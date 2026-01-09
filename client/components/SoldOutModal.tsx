
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2 } from "lucide-react";

// Schema for the form
const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
});

interface SoldOutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SoldOutModal({ isOpen, onClose }: SoldOutModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    });

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsSubmitting(false);
            setIsSuccess(false);
            form.reset();
        }
    }, [isOpen, form]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        try {
            // 1. Submit to Local "Database"
            // Dynamic import to avoid SSR/Build issues with some bundlers, though standard import works too.
            // We'll use the helper function we created.
            const { submitLead } = await import("../lib/pixel");
            await submitLead(values.email);

            // 2. Submit to Netlify Forms (Hidden) for Production
            const formData = new FormData();
            formData.append("form-name", "leads");
            formData.append("name", values.name);
            formData.append("email", values.email);

            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });

            console.log("LEAD CAPTURED:", values);
        } catch (error) {
            console.error("Submission failed", error);
        }

        // Always succeed for UX
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setIsSuccess(true);
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[425px] rounded-2xl shadow-2xl border-none p-8">
                <DialogHeader className="space-y-4">
                    <DialogTitle className="text-3xl font-bold text-center text-primary tracking-tight">
                        {isSuccess ? "You're on the list!" : "We're Currently Sold Out"}
                    </DialogTitle>
                    <DialogDescription className="text-center text-base text-muted-foreground leading-relaxed">
                        {isSuccess
                            ? "Thanks for your interest. We'll notify you as soon as stock is available."
                            : "Due to viral demand, we have temporarily run out of stock. Please join the waitlist to be notified when we restock."}
                    </DialogDescription>
                </DialogHeader>

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-8 space-y-6">
                        <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10 text-secondary" />
                        </div>
                        <Button onClick={onClose} className="w-full rounded-xl py-6 text-lg font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg">
                            Close
                        </Button>
                    </div>
                ) : (
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6 pt-4"
                            name="leads"
                            data-netlify="true"
                        >
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-foreground font-semibold">Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John Doe" {...field} className="h-12 rounded-xl border-border/60 focus:border-primary/50 focus:ring-primary/20 bg-muted/5" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-foreground font-semibold">Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="john@example.com" {...field} className="h-12 rounded-xl border-border/60 focus:border-primary/50 focus:ring-primary/20 bg-muted/5" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button type="submit" className="w-full text-lg py-6 rounded-xl font-bold cta-primary shadow-xl shadow-primary/20" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Joining Waitlist...
                                    </>
                                ) : (
                                    "Notify Me When Available"
                                )}
                            </Button>
                        </form>
                    </Form>
                )}
            </DialogContent>
        </Dialog>
    );
}

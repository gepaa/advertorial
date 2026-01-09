
import { useState, useEffect } from "react";
import { SoldOutModal } from "@/components/SoldOutModal";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight, ShieldCheck, Zap, Wind, Truck, RotateCcw, Box, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useSearchParams } from "react-router-dom";
import { trackEvent } from "../lib/pixel";

export default function SalesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchParams] = useSearchParams();

    // Tracking: Page View & Scroll & Query Param Check
    useEffect(() => {
        console.log("TRACKING: Sales Page View - Vortix");
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);

        // Check for openModal param
        if (searchParams.get("openModal") === "true") {
            setIsModalOpen(true);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [searchParams]);



    const handleCtaClick = () => {
        console.log("TRACKING: CTA Clicked (Intent to Purchase)");
        trackEvent("sales_cta_click");
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-white font-sans text-foreground overflow-x-hidden">
            {/* HEADER - Sticky */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary shadow-lg py-2' : 'bg-transparent py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className={`text-lg md:text-xl font-bold italic tracking-widest transition-colors ${scrolled ? 'text-primary-foreground' : 'text-primary'}`}>
                            VORTIX
                        </span>
                    </div>
                    {scrolled && (
                        <Button onClick={handleCtaClick} size="sm" className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-6 shadow-sm animate-in fade-in zoom-in duration-300">
                            Check Availability
                        </Button>
                    )}
                </div>
            </header>

            <main>
                {/* HERO SECTION */}
                <section className="relative w-full pt-20 pb-12 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center">
                        {/* Text Content */}
                        <div className="space-y-6 md:pr-8 z-10 order-2 md:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                                <Star className="w-3 h-3 fill-current" />
                                <span>High Demand: Low Stock</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
                                Making Every Breath in Your Space <span className="text-primary italic">Pure & Clean!</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-lg">
                                A Life of Clean Air & Peace of Mind—Vortix 4-in-1! Don't let your family breathe recirculated dust.
                            </p>

                            <ul className="space-y-3">
                                {[
                                    "Captures PM2.5 particles your old vacuum blows back",
                                    "H11 HEPA sealed filtration—what goes in, stays in",
                                    "4-in-1 functionality: Vacuum, Blower, Inflator, Pump",
                                    "Fits in your glovebox—always ready for the 60-second reset",
                                    "30 verified Air Watts (not fake Pa claims)",
                                    "Special introductory 50% OFF discount"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <div className="mt-1 min-w-5">
                                            <CheckCircle2 className="w-5 h-5 text-secondary fill-secondary/10" />
                                        </div>
                                        <span className="text-sm md:text-base font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6">
                                <Button onClick={handleCtaClick} size="lg" className="w-full md:w-auto cta-primary text-lg md:text-xl px-8 py-6 rounded-full shadow-xl shadow-primary/30 hover:scale-105 transition-transform">
                                    GET 50% OFF Vortix NOW
                                    <ArrowRight className="ml-2 w-6 h-6" />
                                </Button>
                                <p className="text-xs text-slate-500 mt-3 text-center md:text-left font-medium">
                                    <span className="text-red-500 font-bold">Warning:</span> Limited availability. 50% OFF offer may end soon.
                                </p>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative order-1 md:order-2">
                            <div className="aspect-square relative z-10">
                                {/* Product Image Blob/Gradient Backing */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-blue-50 rounded-full blur-3xl opacity-70 scale-90"></div>
                                <img
                                    src="/images/product.png"
                                    alt="Vortix 4-in-1"
                                    className="relative w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 md:scale-110"
                                />
                                {/* Floating Badges */}
                                <div className="absolute -bottom-4 right-4 bg-white/90 backdrop-blur border border-white/50 p-4 rounded-xl shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                                    <div className="flex items-center gap-3">
                                        <Wind className="w-8 h-8 text-primary" />
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase">Suction</p>
                                            <p className="text-xl font-black text-slate-800">30 AW</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TRUST STRIP - "Black Bar" Style */}
                <section className="bg-slate-900 text-white py-6 md:py-8">
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800/50">
                        <div className="flex flex-col items-center justify-center gap-2 p-2">
                            <ShieldCheck className="w-8 h-8 text-secondary mb-1" />
                            <h3 className="font-bold text-lg">GUARANTEED HIGH QUALITY</h3>
                            <p className="text-sm text-slate-400 max-w-xs">Professional-grade standards. Clean air verified with every use.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 p-2 pt-6 md:pt-2">
                            <RotateCcw className="w-8 h-8 text-secondary mb-1" />
                            <h3 className="font-bold text-lg">NO-HASSLE RETURNS</h3>
                            <p className="text-sm text-slate-400 max-w-xs">Not satisfied? Return within 30 days for a full refund.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 p-2 pt-6 md:pt-2">
                            <Zap className="w-8 h-8 text-secondary mb-1" />
                            <h3 className="font-bold text-lg">FAST & EASY USE</h3>
                            <p className="text-sm text-slate-400 max-w-xs">No subscriptions. Just charge and go!</p>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION & USE CASES */}
                <section className="py-16 md:py-24 px-4 bg-white">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            All-New Vortix 4-in-1
                            <br />
                            <span className="text-primary italic">Your Family's Clean Air Guardian!</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            Engineered with sealed-gasket filtration technology and professional-grade materials, Vortix is built to capture what cheap vacuums blow back into your breathing space. Choosing Vortix means choosing not just a cleaning tool, but ultimate protection for your family's respiratory health.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Car Seats & Vehicles",
                                desc: "Where your children breathe. Where allergens hide in crevices.",
                                icon: Truck,
                                color: "bg-blue-100 text-blue-600"
                            },
                            {
                                title: "Home Office",
                                desc: "Where dust accumulates on keyboards and productivity suffers.",
                                icon: Box,
                                color: "bg-indigo-100 text-indigo-600"
                            },
                            {
                                title: "Pet Areas",
                                desc: "Where dander weaves into fabric and triggers allergies.",
                                icon: Wind, // Placeholder icon
                                color: "bg-orange-100 text-orange-600"
                            },
                            {
                                title: "Tight Spaces",
                                desc: "Between seat rails. Inside door pockets. Under couch cushions.",
                                icon: Zap,
                                color: "bg-cyan-100 text-cyan-600"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition-shadow border border-slate-100 group">
                                <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-sm md:text-base text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button onClick={handleCtaClick} className="cta-primary px-10 py-6 text-lg rounded-full">
                            BUY NOW - 50% OFF
                        </Button>
                        <p className="mt-4 text-sm text-slate-500 italic max-w-2xl mx-auto">
                            "Transforming any environment into a cleaner, safer space in seconds. Stop breathing the invisible enemy. Start capturing it."
                        </p>
                    </div>
                </section>

                {/* ZIG-ZAG FEATURE DEEP DIVES */}
                <section className="bg-slate-50 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 space-y-24">

                        {/* Feature 1 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 relative">
                                <div className="aspect-video bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex items-center justify-center">
                                    {/* Abstract rep of filter */}
                                    <div className="text-center">
                                        <ShieldCheck className="w-24 h-24 text-primary mx-auto mb-4 opacity-80" />
                                        <p className="text-sm font-bold uppercase text-slate-400">H11 HEPA Sealed System</p>
                                    </div>
                                </div>
                                <div className="absolute -z-10 top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl"></div>
                            </div>
                            <div className="order-1 md:order-2 space-y-6">
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Sealed-Gasket Filtration System</h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    The H11 HEPA filter is surrounded by compression seals that force <span className="font-bold text-primary">100% of air</span> through the filtration pleats, capturing particles as small as 0.3 microns—pollen, dust mite waste, mold spores, allergen silt.
                                </p>
                                <p className="text-lg text-slate-600 font-medium">
                                    What goes in, stays in. No more PM2.5 blowback into your family's breathing zone.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">30 Verified Air Watts — Real Power</h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    While cheap vacuums advertise inflated Pascal numbers, Vortix delivers <span className="font-bold text-primary">30 verified Air Watts</span>—the only honest metric for cleaning performance.
                                </p>
                                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold shrink-0">91%</div>
                                        <p className="font-bold text-slate-800">Sand Test Clearance on First Pass</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 italic">That's the difference between real suction and noise-making toys.</p>
                            </div>
                            <div className="relative">
                                <div className="aspect-video bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-8 flex items-center justify-center text-white">
                                    <div className="text-center">
                                        <Wind className="w-24 h-24 text-secondary mx-auto mb-4" />
                                        <p className="text-sm font-bold uppercase text-slate-400">Verified Power</p>
                                    </div>
                                </div>
                                <div className="absolute -z-10 bottom-4 -right-4 w-full h-full bg-secondary/20 rounded-2xl"></div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 relative">
                                <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl flex items-center justify-center text-white">
                                    <div className="text-center">
                                        <Box className="w-24 h-24 mx-auto mb-4 text-white/90" />
                                        <p className="text-sm font-bold uppercase text-white/80">Compact & Portable</p>
                                    </div>
                                </div>
                                <div className="absolute -z-10 top-4 -left-4 w-full h-full bg-slate-200 rounded-2xl"></div>
                            </div>
                            <div className="order-1 md:order-2 space-y-6">
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Compact & Always Ready</h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    At just 11 inches and 0.8 pounds, Vortix fits in your glovebox, desk drawer, or closet. See a crumb? Handle it in 60 seconds.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 font-medium text-slate-700"><Check className="w-5 h-5 text-primary" /> No dragging out bulky equipment</li>
                                    <li className="flex items-center gap-3 font-medium text-slate-700"><Check className="w-5 h-5 text-primary" /> No extension cords</li>
                                    <li className="flex items-center gap-3 font-medium text-slate-700"><Check className="w-5 h-5 text-primary" /> No excuses</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                {/* COMPARISON TABLE */}
                <section className="py-16 md:py-24 px-4 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Families Choose Vortix</h2>
                            <p className="text-slate-500">Don't settle for fake Pascal claims.</p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px] border-collapse">
                                <thead>
                                    <tr>
                                        <th className="p-4 text-left text-slate-400 font-medium tracking-wider text-sm uppercase border-b border-slate-100">What You Get</th>
                                        <th className="p-4 text-center bg-primary/5 text-primary font-bold text-lg border-t-4 border-primary rounded-t-xl w-1/3">Vortix 4-in-1</th>
                                        <th className="p-4 text-center text-slate-400 font-bold border-b border-slate-100 w-1/3">Cheap Handhelds</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["H11 HEPA sealed filtration (visible proof)", true, false],
                                        ["30 verified Air Watts (honest power)", true, false],
                                        ["Zero PM2.5 blowback (smoke test)", true, false],
                                        ["4-in-1 multi-tool (replaces 4 purchases)", true, false],
                                        ["Washable filter (no subscriptions)", true, false],
                                        ["Fits in glovebox (11 inches, 0.8 lbs)", true, false],
                                        ["30-day money-back guarantee", true, false],
                                    ].map(([feature, pro, con], i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-slate-50/50" : "bg-white"}>
                                            <td className="p-4 font-medium text-slate-700">{feature}</td>
                                            <td className="p-4 text-center bg-primary/5 border-x border-white">
                                                <div className="flex justify-center"><CheckCircle2 className="w-6 h-6 text-primary fill-primary/20" /></div>
                                            </td>
                                            <td className="p-4 text-center">
                                                <div className="flex justify-center opacity-30"><span className="text-xl font-bold text-red-500">✕</span></div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 mt-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden">
                            <div className="relative z-10 space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold">LIMITED-TIME OFFER: 50% OFF + FREE SHIPPING</h3>
                                <div className="space-y-1">
                                    <p className="text-slate-400 line-through">Regular Price: Check Site</p>
                                    <p className="text-3xl font-bold text-secondary">Today Only: <span className="text-white text-lg font-normal">Check Availability</span></p>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <Button onClick={handleCtaClick} size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 rounded-full text-lg font-bold shadow-xl">
                                    CLAIM DISCOUNT
                                </Button>
                            </div>
                            {/* Bg glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/30 blur-[100px] rounded-full -z-0 pointer-events-none"></div>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIAL CAROUSEL/GRID */}
                <section className="bg-slate-50 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Customers Say</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "My Kids' Allergies Disappeared!",
                                    quote: "My two daughters have asthma... After switching to Vortix, their symptoms improved within DAYS. The filter turned black after one car cleaning—that's when I understood what we'd been breathing.",
                                    author: "Jessica T., Austin, TX",
                                    role: "Health-Conscious Parent",
                                    image: "/images/reviews/avatar1.png"
                                },
                                {
                                    title: "Professional Detailer—This Is The Real Deal",
                                    quote: "I've used shop-vacs, Dysons, every handheld... Vortix is the first that actually passes the smoke test—ZERO exhaust emissions. The blower function saved me $90 in compressed air cans.",
                                    author: "David C., Phoenix, AZ",
                                    role: "Auto Detailing Specialist",
                                    image: "/images/reviews/avatar2.png"
                                },
                                {
                                    title: "I Stopped Sneezing After Vacuuming",
                                    quote: "The sneezing STOPPED. The sealed filtration is legit—you can see the proof when the filter turns grey. Game changer for anyone with seasonal allergies.",
                                    author: "Sarah M., Denver, CO",
                                    role: "Overwhelmed Parent of Two",
                                    image: "/images/reviews/avatar3.png"
                                }
                            ].map((review, i) => (
                                <Card key={i} className="border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-8 space-y-4">
                                        <div className="flex text-yellow-400 gap-1">
                                            {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                                        </div>
                                        <h4 className="font-bold text-lg text-slate-900">{review.title}</h4>
                                        <p className="text-slate-600 italic leading-relaxed">"{review.quote}"</p>
                                        <div className="pt-4 border-t border-slate-100 mt-4 flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-slate-100">
                                                <img
                                                    src={review.image}
                                                    alt={review.author}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800">{review.author}</p>
                                                <p className="text-xs font-bold text-primary uppercase tracking-wide">{review.role}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA / BUNDLE */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Your Pro Bundle Includes:</h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left max-w-2xl mx-auto py-8">
                            {[
                                "Vortix 4-in-1 Multi-Tool",
                                "H11 HEPA sealed filter",
                                "Crevice Nozzle",
                                "Brush Attachment",
                                "Inflator/Pump Adaptors",
                                "USB-C Charging Cable",
                                "Hard-shell Carrying Case",
                                "1-Year Warranty"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                                    <Check className="w-5 h-5 text-secondary shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 pt-4">
                            <p className="text-red-600 font-bold uppercase tracking-widest animate-pulse">
                                Final Warning: Only 200 Orders at 50% Off
                            </p>
                            <Button onClick={handleCtaClick} className="w-full md:w-auto px-12 py-8 text-xl md:text-2xl rounded-2xl shadow-2xl cta-primary hover:scale-105 transition-transform">
                                CLAIM YOUR 50% DISCOUNT NOW
                            </Button>
                            <p className="text-sm text-slate-400">
                                30-Day Money-Back Guarantee. Secure Checkout.
                            </p>
                        </div>
                    </div>
                </section>

                {/* VISUAL SPACER FOR MOBILE CTA */}
                <div className="h-24 md:hidden"></div>

                {/* MOBILE STICKY CTA */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-slate-200 z-50 md:hidden pb-safe">
                    <Button onClick={handleCtaClick} className="w-full py-6 text-lg rounded-xl shadow-lg cta-primary">
                        Check Availability - 50% OFF
                    </Button>
                </div>
            </main>

            {/* MODAL */}
            <SoldOutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

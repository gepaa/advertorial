
import { supabase } from './supabase';

export const initPixel = () => {
    let visitorId = localStorage.getItem('vortix_visitor_id');
    if (!visitorId) {
        visitorId = crypto.randomUUID();
        localStorage.setItem('vortix_visitor_id', visitorId);
    }
    return visitorId;
};

export const trackEvent = async (eventName: string) => {
    const visitorId = initPixel();

    // Log for dev
    console.log(`[PIXEL] Event: ${eventName} | Visitor: ${visitorId}`);

    try {
        if (!supabase) return;

        const { error } = await supabase
            .from('events')
            .insert([
                {
                    event_name: eventName,
                    visitor_id: visitorId
                }
            ]);

        if (error) {
            console.error('Supabase Events Error:', error);
            // Optionally retry or fallback
        }
    } catch (e) {
        console.error('Failed to send tracking event', e);
    }
};

export const submitLead = async (email: string) => {
    const visitorId = initPixel();

    // Log for dev
    console.log(`[PIXEL] Lead: ${email}`);

    try {
        if (!supabase) return;

        const { error } = await supabase
            .from('leads')
            .insert([
                {
                    email: email,
                    visitor_id: visitorId
                }
            ]);

        if (error) {
            console.error('Supabase Leads Error:', error);
        }
    } catch (e) {
        console.error('Failed to submit lead', e);
    }
};

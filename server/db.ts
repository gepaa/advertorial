import { createClient } from '@supabase/supabase-js';
import "dotenv/config";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    // Fallback or warning if env vars are missing, though technically we should ensure they are present.
    console.warn("Supabase credentials missing in .env");
}

const supabase = createClient(supabaseUrl || '', supabaseKey || '');

export const db = {
    addEvent: async (event: any) => {
        const { data, error } = await supabase
            .from('events')
            .insert([
                {
                    event_name: event.event,
                    visitor_id: event.visitorId
                    // created_at is auto-generated
                }
            ])
            .select() // To return the inserted row
            .single();

        if (error) {
            console.error('Supabase Events Error:', error);
            throw error;
        }
        return data;
    },

    addLead: async (lead: any) => {
        const { data, error } = await supabase
            .from('leads')
            .insert([
                {
                    email: lead.email,
                    visitor_id: lead.visitorId
                    // created_at is auto-generated
                }
            ])
            .select()
            .single();

        if (error) {
            console.error('Supabase Leads Error:', error);
            throw error;
        }
        return data;
    },

    getStats: async () => {
        const { count: eventsCount } = await supabase.from('events').select('*', { count: 'exact', head: true });
        const { count: leadsCount } = await supabase.from('leads').select('*', { count: 'exact', head: true });

        return {
            totalEvents: eventsCount || 0,
            totalLeads: leadsCount || 0,
            // uniqueVisitors is omitted for simplicity unless required
            uniqueVisitors: 0
        };
    }
};

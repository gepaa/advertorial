import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'server/data/tracking.json');

// Ensure DB exists
function ensureDb() {
    if (!fs.existsSync(path.dirname(DB_PATH))) {
        fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
    }
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify({ events: [], leads: [] }, null, 2));
    }
}

function readDb() {
    ensureDb();
    try {
        const data = fs.readFileSync(DB_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return { events: [], leads: [] };
    }
}

function writeDb(data: any) {
    try {
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing to DB:', error);
    }
}

export const db = {
    addEvent: (event: any) => {
        const data = readDb();
        const newEvent = {
            ...event,
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString()
        };
        data.events.push(newEvent);
        writeDb(data);
        return newEvent;
    },

    addLead: (lead: any) => {
        const data = readDb();
        const newLead = {
            ...lead,
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString()
        };
        data.leads.push(newLead);
        writeDb(data);
        return newLead;
    },

    getStats: () => {
        const data = readDb();
        return {
            totalEvents: data.events.length,
            totalLeads: data.leads.length,
            uniqueVisitors: new Set(data.events.map((e: any) => e.visitorId)).size
        };
    }
};

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
        await fetch('/api/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ event: eventName, visitorId })
        });
    } catch (e) {
        console.error('Failed to send tracking event', e);
    }
};

export const submitLead = async (email: string) => {
    const visitorId = initPixel();

    // Log for dev
    console.log(`[PIXEL] Lead: ${email}`);

    try {
        await fetch('/api/lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, visitorId })
        });
    } catch (e) {
        console.error('Failed to submit lead', e);
    }
};

export const event = ({ action, category, label }) => {
    if (typeof window.gtag !== "undefined") {
        window.gtag("event", action, {
            event_category: category,
            event_label: label,
        });
    } else {
        console.warn("gtag not loaded yet");
    }
};

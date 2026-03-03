/**
 * Shared utility to open the booking modal from any component.
 * Uses a browser CustomEvent so Astro islands don't need shared React state.
 */
export function openBookingModal() {
    if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("open-booking-modal"));
    }
}

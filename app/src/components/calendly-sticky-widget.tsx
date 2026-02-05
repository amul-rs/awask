'use client';
import React from "react";

export default function CalendlyStickyWidget() {
    const openCalendly = () => {
        if (typeof window !== "undefined" && (window as any).Calendly) {
            (window as any).Calendly.initPopupWidget({
                url: "https://calendly.com/awask-official/30min",
            });
        }
    };

    return (
        <div className="calendly-sticky-wrapper">
            <div
                className="calendly-sticky-btn"
                onClick={openCalendly}
                role="button"
                tabIndex={0}
            >
                <span>Discovery Call</span>
            </div>
        </div>
    );
}

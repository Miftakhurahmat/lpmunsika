import React from "react";

export default function Podcast() {
    return (
        <div className="p-5">
            <h2 className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase">
                <a href="https://open.spotify.com/show/3PSxdzFHQz77vVRZfxBRdS?si=bb59a5980dfd46d3">
                    Podcast Nol SKS
                </a>
            </h2>
            <hr />
            <iframe
                className="mt-10 h-60"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/episode/08CYFYL5P51RtXlcGTit85?utm_source=generator"
                width="100%"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
            <iframe
                className="mt-10 h-60"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/episode/0zTFzIRgAhyfGn3Azm7jOj?utm_source=generator"
                width="100%"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
            <iframe
                className="mt-10 h-60"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/episode/4tqdAGP3A2uxty0gwrSIMn?utm_source=generator"
                width="100%"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </div>
    );
}

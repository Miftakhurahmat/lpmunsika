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
                src="https://open.spotify.com/embed/episode/1h3EtWO6MB3sQTs4dOete1?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
            <iframe
                className="mt-10 h-60"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/episode/7mnh3SITOqSnNHVnnnm6SF?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
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
        </div>
    );
}

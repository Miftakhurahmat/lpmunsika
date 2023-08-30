import React from "react";

export default function Podcast({ sportifies }) {
    return (
        <div className="p-5">
            <h2 className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase">
                <a href="https://open.spotify.com/show/3PSxdzFHQz77vVRZfxBRdS?si=bb59a5980dfd46d3">
                    Podcast Nol SKS
                </a>
            </h2>
            <hr />
            {sportifies.map((sportify) => (
                <iframe
                    className="mt-10 h-60"
                    style={{ borderRadius: "12px" }}
                    src={sportify.link}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    key={sportify.id}
                ></iframe>
            ))}
        </div>
    );
}

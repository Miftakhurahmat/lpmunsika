import React from "react";

export default function Youtube() {
    return (
        <div className="p-5">
            <h2 className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase">
                <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCvIwacqd0o6e4zEhU9ytkNg"
                >
                    LPM Channel
                </a>
            </h2>
            <hr />
            <iframe
                className="w-full h-60 rounded-xl mt-10"
                src="https://www.youtube.com/embed/8YGOnUgq6hE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <iframe
                className="w-full h-60 rounded-xl mt-10"
                src="https://www.youtube.com/embed/hCdkI3WgRqA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <iframe
                className="w-full h-60 rounded-xl mt-10"
                src="https://www.youtube.com/embed/lTYARHJLvPQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

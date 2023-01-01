import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Card({ articles, slug }) {
    return (
        <>
            {articles
                .filter((article) => article.is_active == 1)
                .map((article) => (
                    <article key={article.id} className="pt-10">
                        <figure>
                            <img
                                className="rounded-xl"
                                src={"/storage/" + article.image}
                                alt={article.title}
                            />
                        </figure>
                        <figcaption className="pt-3">
                            <div className="flex items-center opacity-50 text-xs">
                                <p>{article.category.category_name}</p>
                                <span className="w-1 h-1 bg-black mx-3 rounded-full"></span>
                                <p>{article.created_at.slice(0, 10)}</p>
                            </div>
                            <h3 className="text-xl font-bold pt-1">
                                {article.title}
                            </h3>
                            <div
                                className="pt-1 opacity-80 text-justify"
                                dangerouslySetInnerHTML={{
                                    __html: article.body.slice(0, 180) + "...",
                                }}
                            />
                            {slug === undefined ? (
                                <Link
                                    href={"detail/" + article.slug}
                                    className="font-bold opacity-80"
                                >
                                    Baca Selengkapnya
                                </Link>
                            ) : (
                                <Link
                                    href={article.slug}
                                    className="font-bold opacity-80"
                                >
                                    Baca Selengkapnya
                                </Link>
                            )}
                        </figcaption>
                    </article>
                ))}
        </>
    );
}

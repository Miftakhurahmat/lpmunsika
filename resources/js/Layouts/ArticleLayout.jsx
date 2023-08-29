import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import Podcast from "@/Components/Sportify";
import Youtube from "@/Components/Youtube";
import { Head } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

export default function ArticleLayout({ categories, slug, article }) {
    (function () {
        // DON'T EDIT BELOW THIS LINE
        var d = document,
            s = d.createElement("script");
        s.src = "https://lpmunsika-com.disqus.com/embed.js";
        s.setAttribute("data-timestamp", +new Date());
        (d.head || d.body).appendChild(s);
    })();

    useEffect(() => {
        const img = document.querySelectorAll("img");
        for (let i = 2; i < img.length; i++) {
            img[i].style.borderTopLeftRadius = "10px";
            img[i].style.borderTopRightRadius = "10px";
            img[i].style.width = "100%";
        }
        const figCaption = document.querySelectorAll("figcaption");
        for (let i = 1; i < figCaption.length; i++) {
            figCaption[i].style.fontSize = "12px";
            figCaption[i].style.fontWeight = "bold";
            figCaption[i].style.fontStyle = "italic";
            figCaption[i].style.backgroundColor = "#f2f2f2";
            figCaption[i].style.opacity = 0.8;
            figCaption[i].style.padding = "10px";
            figCaption[i].style.textAlign = "center";
            figCaption[i].style.borderBottomLeftRadius = "10px";
            figCaption[i].style.borderBottomRightRadius = "10px";
        }
    });

    return (
        <>
            <Head title={article.title} />

            <NavBar categories={categories} slug={slug} />

            <div className="xl:px-28 xl:grid xl:grid-cols-3">
                <section className="p-5 xl:col-span-2">
                    <article>
                        <figure>
                            <img
                                src={"/storage/" + article.image}
                                alt={article.title}
                                className="rounded-xl w-full"
                            />
                        </figure>
                        <figcaption className="pt-5">
                            <div className="flex gap-5 text-xs pt-1 opacity-80">
                                <div className="flex gap-1 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <p>{article.user.name}</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <p>{article.created_at.slice(0, 10)}</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 6h.008v.008H6V6z"
                                        />
                                    </svg>
                                    <p>{article.category.category_name}</p>
                                </div>
                            </div>
                            <div className="text-xl text-left pt-1 font-bold xl:text-3xl border-b-8 w-full border-red-500 uppercase">
                                <h2>{article.title}</h2>
                            </div>
                            <hr />
                            <div
                                className="pt-5 text-justify"
                                dangerouslySetInnerHTML={{
                                    __html: article.body,
                                }}
                            />
                        </figcaption>
                        <div className="py-10" id="disqus_thread"></div>
                    </article>
                </section>

                <div className="xl:col-span-1">
                    <Youtube />

                    <Podcast />
                </div>
            </div>

            <Footer categories={categories} slug={slug} />
        </>
    );
}

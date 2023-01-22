import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Hero({ articles }) {
    return (
        <>
            <div className="xl:grid xl:grid-cols-2">
                <Link
                    href={"detail/" + articles.data[0].slug}
                    className="relative col-span-2"
                >
                    <img
                        src={"/storage/" + articles.data[0].image}
                        alt={articles.data[0].title}
                        className="rounded-t-xl"
                    />
                    <div className="rounded-t-xl bg-gradient-to-t from-slate-900 to-transparent text-slate-50 absolute px-3 h-full w-full bottom-0">
                        <div className="flex flex-col justify-end h-full pb-3">
                            <div className="flex items-center text-xs">
                                <p>{articles.data[0].category.category_name}</p>
                                <span className="w-1 h-1 bg-white mx-3 rounded-full"></span>
                                <p>
                                    {articles.data[0].created_at.slice(0, 10)}
                                </p>
                            </div>
                            <div className="font-bold">
                                <h3>{articles.data[0].title}</h3>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    href={"detail/" + articles.data[1].slug}
                    className="relative"
                >
                    <img
                        src={"/storage/" + articles.data[1].image}
                        alt={articles.data[1].title}
                        className="xl:rounded-bl-xl"
                    />
                    <div className="xl:rounded-bl-xl bg-gradient-to-t from-slate-900 to-transparent text-slate-50 absolute px-3 h-full w-full bottom-0">
                        <div className="flex flex-col justify-end h-full pb-3">
                            <div className="flex items-center text-xs">
                                <p>{articles.data[1].category.category_name}</p>
                                <span className="w-1 h-1 bg-white mx-3 rounded-full"></span>
                                <p>
                                    {articles.data[1].created_at.slice(0, 10)}
                                </p>
                            </div>
                            <div className="font-bold">
                                <h3>{articles.data[1].title}</h3>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    href={"detail/" + articles.data[2].slug}
                    className="relative"
                >
                    <img
                        src={"/storage/" + articles.data[2].image}
                        alt={articles.data[2].title}
                        className="rounded-b-xl xl:rounded-bl-none"
                    />
                    <div className="rounded-b-xl xl:rounded-bl-none bg-gradient-to-t from-slate-900 to-transparent text-slate-50 absolute px-3 h-full w-full bottom-0">
                        <div className="flex flex-col justify-end h-full pb-3">
                            <div className="flex items-center text-xs pt-28">
                                <p>{articles.data[2].category.category_name}</p>
                                <span className="w-1 h-1 bg-white mx-3 rounded-full"></span>
                                <p>
                                    {articles.data[2].created_at.slice(0, 10)}
                                </p>
                            </div>
                            <div className="font-bold">
                                <h3>{articles.data[2].title}</h3>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

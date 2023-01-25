import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

export default function Admin(props) {
    const sortView = () => {
        return props.articles.data.sort((a, b) => {
            return b.views - a.views;
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Admin
                </h2>
            }
        >
            <Head title="Admin" />

            <div className="flex mx-3 mt-5 xl:mx-20">
                <div className="bg-slate-50 shadow-lg rounded-lg justify-center h-20 mx-1 flex w-1/3 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                    </svg>
                    <div className="flex flex-col pl-1">
                        <h1 className="font-bold text-xs">User</h1>
                        <p className="text-center">{props.users.length}</p>
                    </div>
                </div>
                <div className="bg-slate-50 shadow-lg rounded-lg justify-center h-20 mx-1 flex w-1/3 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                        />
                    </svg>
                    <div className="flex flex-col pl-1">
                        <h1 className="font-bold text-xs">Article</h1>
                        <p className="text-center">{props.articles.total}</p>
                    </div>
                </div>
                <div className="bg-slate-50 shadow-lg rounded-lg justify-center h-20 mx-1 flex w-1/3 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6"
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
                    <div className="flex flex-col pl-1">
                        <h1 className="font-bold text-xs">Category</h1>
                        <p className="text-center">{props.categories.length}</p>
                    </div>
                </div>
            </div>

            <div className="flex mx-3 mt-5 xl:mx-20">
                <div className="w-2/3 rounded-lg bg-slate-50 shadow-lg mx-1 p-3">
                    <h1 className="font-bold text-sm">Article Draft</h1>
                    <hr />
                    {props.articles.data
                        .filter((article) => article.is_active === 2)
                        .map((article) => (
                            <Link
                                key={article.id}
                                href={"/article/" + article.id + "/edit"}
                            >
                                {article.title}
                            </Link>
                        ))}
                </div>
                <div className="w-1/3 rounded-lg bg-slate-50 shadow-lg mx-1 p-3">
                    <h1 className="font-bold">Most Popular Article</h1>
                    <hr />
                    {sortView().map((e) => (
                        <p className="text-xs py-3 xl:text-base" key={e.id}>
                            {e.title} ({e.views})
                        </p>
                    ))}
                    <div className="text-sm flex justify-center items-center gap-3 pt-5 xl:text-base xl:gap-5">
                        <Link href={props.articles.first_page_url}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-3 xl:w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                                />
                            </svg>
                        </Link>
                        <Link href={props.articles.prev_page_url}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-3 xl:w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </Link>
                        <p>{props.articles.current_page}</p>
                        <Link href={props.articles.next_page_url}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-3 xl:w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </Link>
                        <Link href={props.articles.last_page_url}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-3 xl:w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

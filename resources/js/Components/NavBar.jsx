import { useForm } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";

export default function NavBar({ slug, categories }) {
    const [nav, setNav] = useState(false);
    const { data, setData, get } = useForm({
        search: "",
    });

    const handleClick = () => {
        if (nav === false) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        get("/detail/search");
    };

    return (
        <header>
            <nav className="bg-black flex flex-row justify-between px-5 h-16 items-center xl:px-32">
                <div className="invisible xl:hidden">
                    <span></span>
                </div>
                <div className="xl:order-1">
                    <Link href="/">
                        <img
                            src="/storage/logo-lpm.jpg"
                            alt="LPM Unsika"
                            className="w-10"
                        />
                    </Link>
                </div>
                <div className="xl:hidden">
                    <button
                        onClick={handleClick}
                        className="flex flex-col justify-around h-8 w-8 p-1 ring-1 rounded-md ring-white ring-opacity-80 items-center"
                    >
                        <span className="bg-white w-3 h-0.5 opacity-80"></span>
                        <span className="bg-white w-3 h-0.5 opacity-80"></span>
                        <span className="bg-white w-3 h-0.5 opacity-80"></span>
                    </button>
                </div>
                {slug === undefined ? (
                    <div className="xl:text-white xl:flex xl:order-2 xl:font-bold gap-5 hidden">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={"detail/" + category.slug}
                            >
                                {category.category_name}
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="xl:text-white xl:flex xl:order-2 xl:font-bold gap-5 hidden">
                        {categories.map((category) => (
                            <Link key={category.id} href={category.slug}>
                                {category.category_name}
                            </Link>
                        ))}
                    </div>
                )}
                <div className="hidden xl:flex order-3">
                    <form className="relative" onSubmit={submit}>
                        <input
                            name="search"
                            type="text"
                            className="rounded-3xl h-8"
                            placeholder="Cari"
                            onChange={(e) => setData("search", e.target.value)}
                        />
                        <button
                            type="submit"
                            className="absolute right-3 top-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </nav>
            {nav && (
                <div className="text-center pt-3 font-bold">
                    <form className="relative" onSubmit={submit}>
                        <input
                            name="search"
                            type="text"
                            className="rounded-3xl h-8"
                            placeholder="Cari"
                            onChange={(e) => setData("search", e.target.value)}
                        />
                        <button
                            type="submit"
                            className="absolute top-1.5 right-20"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </button>
                    </form>
                    {slug !== undefined
                        ? categories.map((category) => (
                              <div className="pt-3" key={category.id}>
                                  <Link href={category.slug}>
                                      {category.category_name}
                                  </Link>
                              </div>
                          ))
                        : categories.map((category) => (
                              <div className="pt-3" key={category.id}>
                                  <Link href={"detail/" + category.slug}>
                                      {category.category_name}
                                  </Link>
                              </div>
                          ))}
                </div>
            )}
        </header>
    );
}

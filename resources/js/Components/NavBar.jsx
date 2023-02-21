import { useForm } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import React, { useRef, useState } from "react";
import { Transition } from "react-transition-group";

export default function NavBar({ slug, categories }) {
    const [nav, setNav] = useState(false);

    const nodeRef = useRef(null);

    const defaultStyle = {
        transition: "all 300ms ease-in-out",
        transform: "translateY(-500px)",
        position: "static",
    };

    const transitionStyles = {
        entering: { transform: "translateY(0px)", position: "static" },
        entered: { transform: "translateY(0px)", position: "static" },
        exiting: {
            transform: "translateY(-500px)",
            position: "absolute",
            left: "55px",
        },
        exited: { transform: "translateY(-500px)", position: "absolute" },
    };

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
                        <Link
                            href={"detail/berita"}
                            className="transition ease-in-out duration-300 hover:text-red-500"
                        >
                            Berita
                        </Link>
                        <Link
                            href={"detail/buletin"}
                            className="transition ease-in-out duration-300 hover:text-red-500"
                        >
                            Buletin
                        </Link>
                        <div className="relative">
                            <p className="transition ease-in-out duration-300 hover:text-red-500 peer cursor-pointer">
                                Karya Mahasiswa
                            </p>
                            <div className="absolute bg-slate-800 flex flex-col w-full gap-3 z-10 p-3 invisible peer-hover:visible hover:visible">
                                <Link
                                    className="hover:text-red-500"
                                    href="detail/resensi-buku"
                                >
                                    Resensi Buku
                                </Link>
                                <Link
                                    className="hover:text-red-500"
                                    href="detail/review-film"
                                >
                                    Review Film
                                </Link>
                                <Link
                                    className="hover:text-red-500"
                                    href="detail/opini"
                                >
                                    Opini
                                </Link>
                                <Link
                                    className="hover:text-red-500"
                                    href="detail/esai"
                                >
                                    Esai
                                </Link>
                                <Link
                                    className="hover:text-red-500"
                                    href="detail/puisi"
                                >
                                    Puisi
                                </Link>
                            </div>
                        </div>
                        <Link
                            href={"detail/gaya-mahasiswa"}
                            className="transition ease-in-out duration-300 hover:text-red-500"
                        >
                            Gaya Mahasiswa
                        </Link>
                    </div>
                ) : (
                    <div className="xl:text-white xl:flex xl:order-2 xl:font-bold gap-5 hidden">
                        <Link
                            href={"berita"}
                            className="transition ease-in-out duration-300 hover:text-red-500"
                        >
                            Berita
                        </Link>
                        <Link
                            href={"buletin"}
                            className="transition ease-in-out duration-300 hover:text-red-500"
                        >
                            Buletin
                        </Link>
                        <div className="relative">
                            <p className="transition ease-in-out duration-300 hover:text-red-500 peer cursor-pointer">
                                Karya Mahasiswa
                            </p>
                            <div className="absolute bg-slate-800 flex flex-col w-full gap-3 z-10 p-3 invisible peer-hover:visible hover:visible">
                                <Link
                                    className="hover:text-red-500"
                                    href="resensi-buku"
                                >
                                    Resensi Buku
                                </Link>
                                <Link
                                    className="hover:text-red-500"
                                    href="review-film"
                                >
                                    Review Film
                                </Link>
                                <Link
                                    className="hover:text-red-500"
                                    href="opini"
                                >
                                    Opini
                                </Link>
                                <Link
                                    className="hover:text-red-500"
                                    href="esai"
                                >
                                    Esai
                                </Link>
                                <Link
                                    className="hover:text-red-500"
                                    href="puisi"
                                >
                                    Puisi
                                </Link>
                            </div>
                        </div>
                        <Link
                            href={"gaya-mahasiswa"}
                            className="transition ease-in-out duration-300 hover:text-red-500"
                        >
                            Gaya Mahasiswa
                        </Link>
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
            <Transition nodeRef={nodeRef} in={nav} timeout={500}>
                {(state) => (
                    <div
                        ref={nodeRef}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                        }}
                        className="text-center pt-3 font-bold"
                    >
                        <form className="relative" onSubmit={submit}>
                            <input
                                name="search"
                                type="text"
                                className="rounded-3xl h-8"
                                placeholder="Cari"
                                onChange={(e) =>
                                    setData("search", e.target.value)
                                }
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
                        {slug !== undefined ? (
                            <div className="pt-3 flex flex-col gap-5">
                                <Link
                                    href={"berita"}
                                    className="transition ease-in-out duration-300 hover:text-red-500"
                                >
                                    Berita
                                </Link>
                                <Link
                                    href={"buletin"}
                                    className="transition ease-in-out duration-300 hover:text-red-500"
                                >
                                    Buletin
                                </Link>
                                <div className="relative">
                                    <p className="transition ease-in-out duration-300 hover:text-red-500 peer cursor-pointer">
                                        Karya Mahasiswa
                                    </p>
                                    <div className="absolute bg-slate-100 flex flex-col w-full gap-1 z-10 p-1 invisible peer-hover:visible hover:visible -top-36">
                                        <Link
                                            className="hover:text-red-500"
                                            href="resensi-buku"
                                        >
                                            Resensi Buku
                                        </Link>
                                        <Link
                                            className="hover:text-red-500"
                                            href="review-film"
                                        >
                                            Review Film
                                        </Link>
                                        <Link
                                            className="hover:text-red-500"
                                            href="opini"
                                        >
                                            Opini
                                        </Link>
                                        <Link
                                            className="hover:text-red-500"
                                            href="esai"
                                        >
                                            Esai
                                        </Link>
                                        <Link
                                            className="hover:text-red-500"
                                            href="puisi"
                                        >
                                            Puisi
                                        </Link>
                                    </div>
                                </div>
                                <Link
                                    href={"gaya-mahasiswa"}
                                    className="transition ease-in-out duration-300 hover:text-red-500"
                                >
                                    Gaya Mahasiswa
                                </Link>
                            </div>
                        ) : (
                            <div className="pt-3 flex flex-col gap-5">
                                <Link
                                    href={"detail/berita"}
                                    className="transition ease-in-out duration-300 hover:text-red-500"
                                >
                                    Berita
                                </Link>
                                <Link
                                    href={"detail/buletin"}
                                    className="transition ease-in-out duration-300 hover:text-red-500"
                                >
                                    Buletin
                                </Link>
                                <div className="relative">
                                    <p className="transition ease-in-out duration-300 hover:text-red-500 peer cursor-pointer">
                                        Karya Mahasiswa
                                    </p>
                                    <div className="absolute bg-slate-100 flex flex-col w-full gap-1 z-10 p-1 invisible peer-hover:visible hover:visible -top-36">
                                        <Link
                                            className="hover:text-red-500"
                                            href="detail/resensi-buku"
                                        >
                                            Resensi Buku
                                        </Link>
                                        <Link
                                            className="hover:text-red-500"
                                            href="detail/review-film"
                                        >
                                            Review Film
                                        </Link>
                                        <Link
                                            className="hover:text-red-500"
                                            href="detail/opini"
                                        >
                                            Opini
                                        </Link>
                                        <Link
                                            className="hover:text-red-500"
                                            href="detail/esai"
                                        >
                                            Esai
                                        </Link>
                                        <Link
                                            className="hover:text-red-500"
                                            href="detail/puisi"
                                        >
                                            Puisi
                                        </Link>
                                    </div>
                                </div>
                                <Link
                                    href={"detail/gaya-mahasiswa"}
                                    className="transition ease-in-out duration-300 hover:text-red-500"
                                >
                                    Gaya Mahasiswa
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </Transition>
        </header>
    );
}

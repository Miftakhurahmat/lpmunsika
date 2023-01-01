import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import NavBar from "../../Components/NavBar";
import Footer from "@/Components/Footer";
import Card from "@/Components/Card";
import Youtube from "@/Components/Youtube";
import Podcast from "@/Components/Podcast";

export default function Index({ categories, articles }) {
    return (
        <>
            <Head title="LPM Unsika | Official Website" />

            <NavBar categories={categories} />

            <section className="p-5">
                <div>
                    <Link
                        as="h2"
                        href="/detail/lastest"
                        className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase hover:cursor-pointer"
                    >
                        Berita Terkini
                    </Link>
                    <hr />
                    <Card articles={articles} />
                </div>
                <div className="pt-10">
                    <Link
                        as="h2"
                        href="/detail/berita"
                        className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase hover:cursor-pointer"
                    >
                        Berita
                    </Link>
                    <hr />
                    <Card
                        articles={articles.filter(
                            (article) => article.category_id === 1
                        )}
                    />
                </div>
                <div className="pt-10">
                    <Link
                        as="h2"
                        href="/detail/buletin"
                        className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase hover:cursor-pointer"
                    >
                        Buletin
                    </Link>
                    <hr />
                    <Card
                        articles={articles.filter(
                            (article) => article.category_id === 2
                        )}
                    />
                </div>
                <div className="pt-10">
                    <Link
                        as="h2"
                        href="/detail/karya-mahasiswa"
                        className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase hover:cursor-pointer"
                    >
                        Karya Mahasiswa
                    </Link>
                    <hr />
                    <Card
                        articles={articles.filter(
                            (article) => article.category_id === 3
                        )}
                    />
                </div>
                <div className="pt-10">
                    <Link
                        as="h2"
                        href="/detail/opini"
                        className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase hover:cursor-pointer"
                    >
                        opini
                    </Link>
                    <hr />
                    <Card
                        articles={articles.filter(
                            (article) => article.category_id === 4
                        )}
                    />
                </div>
            </section>

            <aside>
                <Youtube />
                <Podcast />
            </aside>

            <Footer categories={categories} />
        </>
    );
}

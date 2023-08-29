import NavBar from "@/Components/NavBar";
import Card from "@/Components/Card";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";
import Footer from "@/Components/Footer";
import Youtube from "@/Components/Youtube";
import Podcast from "@/Components/Sportify";
import Pagination from "@/Components/Pagination";

export default function LastestLayout({ categories, slug, articles }) {
    return (
        <>
            <Head title="Berita Terkini" />

            <NavBar categories={categories} slug={slug} />

            <div className="xl:px-28 xl:grid xl:grid-cols-3">
                <section className="p-5 xl:col-span-2">
                    <h2 className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase">
                        Berita Terkini
                    </h2>
                    <hr />
                    <Card articles={articles.data} slug={slug} />
                    <Pagination articles={articles} />
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

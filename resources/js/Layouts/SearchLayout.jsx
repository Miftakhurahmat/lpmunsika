import Card from "@/Components/Card";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import Podcast from "@/Components/Sportify";
import Youtube from "@/Components/Youtube";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function SearchLayout({ search, categories, slug, request }) {
    return (
        <>
            <Head title="Search" />

            <NavBar categories={categories} slug={slug} />

            <div className="xl:grid xl:grid-cols-3 xl:px-28">
                <section className="p-5 xl:col-span-2">
                    <h2 className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase">
                        Search: {request}
                    </h2>
                    <hr />
                    <Card articles={search} slug={slug} />
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

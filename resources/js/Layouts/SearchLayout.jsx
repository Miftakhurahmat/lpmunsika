import Card from "@/Components/Card";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import Podcast from "@/Components/Podcast";
import Youtube from "@/Components/Youtube";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function SearchLayout({ search, categories, slug, request }) {
    return (
        <>
            <Head title="Search" />

            <NavBar categories={categories} slug={slug} />

            <section className="p-5">
                <h2 className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase">
                    Search: {request}
                </h2>
                <hr />

                <Card articles={search} slug={slug} />
            </section>

            <Youtube />

            <Podcast />

            <Footer categories={categories} slug={slug} />
        </>
    );
}

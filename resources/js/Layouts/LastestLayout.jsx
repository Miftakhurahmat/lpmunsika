import NavBar from "@/Components/NavBar";
import Card from "@/Components/Card";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import Footer from "@/Components/Footer";

export default function LastestLayout({ categories, slug, articles }) {
    return (
        <>
            <Head title="Berita Terkini" />

            <NavBar categories={categories} slug={slug} />

            <section className="p-5">
                <h2 className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase">
                    Berita Terkini
                </h2>
                <hr />

                <Card articles={articles} />
            </section>

            <Footer categories={categories} slug={slug} />
        </>
    );
}

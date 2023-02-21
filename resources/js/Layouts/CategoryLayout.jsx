import Card from "@/Components/Card";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import Pagination from "@/Components/Pagination";
import Podcast from "@/Components/Podcast";
import Youtube from "@/Components/Youtube";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";

export default function CategoryLayout({
    slug,
    categories,
    berita,
    buletin,
    karyaMahasiswa,
    gayaMahasiswa,
    resensiBuku,
    reviewFilm,
    opini,
    esai,
    puisi,
}) {
    const category = categories.filter((category) => category.slug === slug);

    let articles = "";

    if (slug === "berita") {
        articles = berita;
    } else if (slug === "buletin") {
        articles = buletin;
    } else if (slug === "karya-mahasiswa") {
        articles = karyaMahasiswa;
    } else if (slug === "gaya-mahasiswa") {
        articles = gayaMahasiswa;
    } else if (slug === "resensi-buku") {
        articles = resensiBuku;
    } else if (slug === "review-film") {
        articles = reviewFilm;
    } else if (slug === "opini") {
        articles = opini;
    } else if (slug === "esai") {
        articles = esai;
    } else if (slug === "puisi") {
        articles = puisi;
    }

    return (
        <>
            <Head title={category[0].category_name} />

            <NavBar categories={categories} slug={slug} />

            <div className="xl:px-28 xl:grid xl:grid-cols-3">
                <section className="p-5 xl:col-span-2">
                    <h2 className="font-bold text-xl xl:text-3xl border-b-8 w-max border-red-500 uppercase">
                        Category: {category[0].category_name}
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

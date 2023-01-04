import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import Card from "@/Components/Card";
import AboutLayout from "@/Layouts/AboutLayout";
import PedomanLayout from "@/Layouts/PedomanLayout";
import ArticleLayout from "@/Layouts/ArticleLayout";
import LastestLayout from "@/Layouts/LastestLayout";
import CategoryLayout from "@/Layouts/CategoryLayout";
import SearchLayout from "@/Layouts/SearchLayout";

export default function Show({
    slug,
    categories,
    article,
    articles,
    berita,
    buletin,
    karyaMahasiswa,
    opini,
    search,
    request,
}) {
    if (
        slug === "berita" ||
        slug === "buletin" ||
        slug === "karya-mahasiswa" ||
        slug === "opini"
    ) {
        return (
            <CategoryLayout
                slug={slug}
                categories={categories}
                berita={berita}
                buletin={buletin}
                karyaMahasiswa={karyaMahasiswa}
                opini={opini}
            />
        );
    } else if (slug === "search") {
        return (
            <SearchLayout
                search={search}
                categories={categories}
                slug={slug}
                request={request}
            />
        );
    } else if (slug === "lastest") {
        return (
            <LastestLayout
                categories={categories}
                slug={slug}
                articles={articles}
            />
        );
    } else if (slug === "tentang-kami") {
        return <AboutLayout categories={categories} slug={slug} />;
    } else if (slug === "pedoman-media-siber") {
        return <PedomanLayout categories={categories} slug={slug} />;
    } else {
        return (
            <ArticleLayout
                categories={categories}
                slug={slug}
                article={article}
            />
        );
    }
}

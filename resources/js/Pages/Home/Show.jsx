import React from "react";
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
    gayaMahasiswa,
    resensiBuku,
    reviewFilm,
    opini,
    esai,
    artikel,
    search,
    request,
}) {
    if (
        slug === "berita" ||
        slug === "buletin" ||
        slug === "karya-mahasiswa" ||
        slug === "gaya-mahasiswa" ||
        slug === "resensi-buku" ||
        slug === "review-film" ||
        slug === "opini" ||
        slug === "esai" ||
        slug === "artikel"
    ) {
        return (
            <CategoryLayout
                slug={slug}
                categories={categories}
                berita={berita}
                buletin={buletin}
                karyaMahasiswa={karyaMahasiswa}
                gayaMahasiswa={gayaMahasiswa}
                resensiBuku={resensiBuku}
                reviewFilm={reviewFilm}
                opini={opini}
                esai={esai}
                artikel={artikel}
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

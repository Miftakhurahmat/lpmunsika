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
    sportifies,
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
    puisi,
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
        slug === "artikel" ||
        slug === "puisi"
    ) {
        return (
            <CategoryLayout
                slug={slug}
                categories={categories}
                sportifies={sportifies}
                berita={berita}
                buletin={buletin}
                karyaMahasiswa={karyaMahasiswa}
                gayaMahasiswa={gayaMahasiswa}
                resensiBuku={resensiBuku}
                reviewFilm={reviewFilm}
                opini={opini}
                esai={esai}
                artikel={artikel}
                puisi={puisi}
            />
        );
    } else if (slug === "search") {
        return (
            <SearchLayout
                search={search}
                categories={categories}
                sportifies={sportifies}
                slug={slug}
                request={request}
            />
        );
    } else if (slug === "lastest") {
        return (
            <LastestLayout
                categories={categories}
                sportifies={sportifies}
                slug={slug}
                articles={articles}
            />
        );
    } else if (slug === "tentang-kami") {
        return (
            <AboutLayout
                categories={categories}
                sportifies={sportifies}
                slug={slug}
            />
        );
    } else if (slug === "pedoman-media-siber") {
        return (
            <PedomanLayout
                categories={categories}
                sportifies={sportifies}
                slug={slug}
            />
        );
    } else {
        return (
            <ArticleLayout
                categories={categories}
                sportifies={sportifies}
                slug={slug}
                article={article}
            />
        );
    }
}

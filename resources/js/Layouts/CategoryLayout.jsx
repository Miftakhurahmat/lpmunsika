import Card from "@/Components/Card";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function CategoryLayout({ slug, categories, articles }) {
    const categoriesFilter = categories.filter(
        (category) => category.slug === slug
    );

    const articlesFilter = articles.filter(
        (article) =>
            article.category_id ===
            categories.filter((category) => category.slug === slug)[0].id
    );
    return (
        <>
            <Head title={categoriesFilter[0].category_name} />

            <NavBar categories={categories} slug={slug} />

            <section className="p-5">
                <h2 className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase">
                    Category: {categoriesFilter[0].category_name}
                </h2>
                <hr />

                <Card articles={articlesFilter} slug={slug} />
            </section>

            <Footer categories={categories} slug={slug} />
        </>
    );
}

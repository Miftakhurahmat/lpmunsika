import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import NavBar from "../../Components/NavBar";
import Footer from "@/Components/Footer";
import Card from "@/Components/Card";
import Youtube from "@/Components/Youtube";
import Podcast from "@/Components/Podcast";

export default function Index({
    categories,
    articles,
    berita,
    buletin,
    karyaMahasiswa,
    opini,
}) {
    return (
        <>
            <Head title="LPM Unsika | Official Website" />

            <NavBar categories={categories} />

            <div className="xl:grid xl:grid-cols-3 xl:px-28">
                <section className="p-5 xl:col-span-2">
                    <div>
                        <Link
                            as="h2"
                            href="/detail/lastest"
                            className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase hover:cursor-pointer"
                        >
                            Berita Terkini
                        </Link>
                        <hr />
                        <Card articles={articles.data} />
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
                        <Card articles={berita.data} />
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
                        <Card articles={buletin.data} />
                    </div>
                    <div className="xl:grid xl:grid-cols-2 xl:gap-20">
                        <div className="pt-10">
                            <Link
                                as="h2"
                                href="/detail/karya-mahasiswa"
                                className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase hover:cursor-pointer"
                            >
                                Karya Mahasiswa
                            </Link>
                            <hr />
                            <Card articles={karyaMahasiswa.data} />
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
                            <Card articles={opini.data} />
                        </div>
                    </div>
                </section>

                <aside>
                    <Youtube />
                    <Podcast />
                </aside>
            </div>

            <Footer categories={categories} />
        </>
    );
}

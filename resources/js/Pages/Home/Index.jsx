import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import NavBar from "../../Components/NavBar";
import Footer from "@/Components/Footer";
import Card from "@/Components/Card";
import Youtube from "@/Components/Youtube";
import Sportify from "@/Components/Sportify";
import Hero from "@/Components/Hero";

export default function Index({
    sportifies,
    articles,
    berita,
    buletin,
    gayaMahasiswa,
    resensiBuku,
    reviewFilm,
    opini,
    esai,
    artikel,
    puisi,
    cerpen,
}) {
    return (
        <>
            <Head title="LPM Unsika | Official Website" />

            <NavBar />

            <div className="xl:grid xl:grid-cols-3 xl:px-28">
                <section className="p-5 xl:col-span-2">
                    <div>
                        <Link
                            as="h2"
                            href="/detail/lastest"
                            className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase hover:cursor-pointer"
                        >
                            Terbaru
                        </Link>
                        <hr />
                        <div className="pt-10">
                            <Hero articles={articles} />
                        </div>
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
                                className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase hover:cursor-pointer"
                            >
                                Karya Mahasiswa
                            </Link>
                            <hr />
                            <Card articles={resensiBuku.data} />
                            <Card articles={reviewFilm.data} />
                            <Card articles={opini.data} />
                            <Card articles={esai.data} />
                            <Card articles={artikel.data} />
                            <Card articles={puisi.data} />
                            <Card articles={cerpen.data} />
                        </div>
                        <div className="pt-10">
                            <Link
                                as="h2"
                                href="/detail/gaya-mahasiswa"
                                className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase hover:cursor-pointer"
                            >
                                Gaya Mahasiswa
                            </Link>
                            <hr />
                            <Card articles={gayaMahasiswa.data} />
                        </div>
                    </div>
                </section>

                <aside>
                    <Youtube />
                    <Sportify sportifies={sportifies} />
                </aside>
            </div>

            <Footer />
        </>
    );
}

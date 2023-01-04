import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import Podcast from "@/Components/Podcast";
import Youtube from "@/Components/Youtube";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function AboutLayout({ categories, slug }) {
    return (
        <>
            <Head title="Tentang Kami" />

            <NavBar categories={categories} slug={slug} />

            <div className="xl:px-28 xl:grid xl:grid-cols-3">
                <section className="p-5 xl:col-span-2">
                    <article>
                        <figcaption>
                            <h2 className="font-bold text-3xl border-b-8 w-max border-red-500 uppercase">
                                Tentang Kami
                            </h2>
                            <hr />
                            <div className="text-justify">
                                <p className="pt-10">
                                    Lembaga Pers Mahasiswa Universitas
                                    Singaperbangsa Karawang atau biasa disebut
                                    dengan LPM Unsika didirikan pada 17 Mei
                                    2011. Dimulai dari sekelompok mahasiswa yang
                                    ingin mengembangkan bakat dan hobinya di
                                    bidang jurnalistik, sehingga timbul sebuah
                                    gagasan untuk membentuk stasiun radio dalam
                                    lingkungan non-akademik. Didukung oleh pihak
                                    Universitas dan seluruh civitas akademika,
                                    serta mendapat dukungan dari pemerintah
                                    daerah kabupaten Karawang dengan adanya
                                    rekomendasi dari Dinas Perhubungan,
                                    Komunikasi dan Informatika, Dinas
                                    Pendidikan, dan Unsika itu sendiri.
                                </p>
                                <p className="pt-3">
                                    LPM Unsika merupakan unit kegiatan mahasiswa
                                    yang berperan sebagai wadah untuk
                                    menyalurkan bakat dan hobi dalam bidang
                                    jurnalistik. LPM Unsika disahkan menjadi
                                    Unit Kegiatan Mahasiswa berdasarkan surat
                                    keputusan Rektor Unsika Nomor
                                    575/SK/A2/VII/2014 pada bulan Agustus 2014.
                                    LPM Unsika diketuai oleh General Manager
                                    yang bertanggung jawab langsung kepada
                                    Rektor Unsika. LPM bertujuan untuk
                                    menyampaikan segala bentuk informasi yang
                                    sejalan dengan visi misi Unit Kegiatan LPM
                                    khususnya Universitas Singaperbangsa
                                    Karawang, dan sejalur dengan program
                                    pemerintah dalam mencerdaskan masyarakat.
                                </p>
                                <p className="font-bold pt-10">
                                    LPM Unsika Positif Aktif Kreatif
                                </p>
                            </div>
                        </figcaption>
                    </article>
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

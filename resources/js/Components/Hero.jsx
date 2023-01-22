import React, { useRef, useState } from "react";
import { Transition } from "react-transition-group";
import { Link } from "@inertiajs/inertia-react";

export default function Hero({ articles }) {
    const device = window.innerWidth;

    const [slider, setSlider] = useState(1);

    const nodeRef = useRef(null);

    const defaultStyle = {
        transition: "all 300ms ease-in-out",
        display: "block",
    };

    const transitionStyles = {
        entering: { display: "block", opacity: 0 },
        entered: { display: "block", opacity: 1 },
        exiting: { display: "none", opacity: 1 },
        exited: { display: "none", opacity: 0 },
    };

    setTimeout(() => {
        slider == 3 ? setSlider(1) : setSlider(slider + 1);
    }, 5000);

    return (
        <>
            {device <= 1280 ? (
                <>
                    <Transition
                        nodeRef={nodeRef}
                        in={slider == 1}
                        timeout={500}
                    >
                        {(state) => (
                            <Link
                                itemRef={nodeRef}
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state],
                                }}
                                href={"detail/" + articles.data[0].slug}
                                className="relative"
                            >
                                <img
                                    src={"/storage/" + articles.data[0].image}
                                    alt={articles.data[0].title}
                                    className="rounded-xl"
                                />
                                <div className="rounded-xl bg-gradient-to-t from-slate-900 to-transparent text-slate-50 absolute px-3 h-full w-full bottom-0">
                                    <div className="flex flex-col justify-end h-full">
                                        <div className="flex items-center text-xs">
                                            <p>
                                                {
                                                    articles.data[0].category
                                                        .category_name
                                                }
                                            </p>
                                            <span className="w-1 h-1 bg-white mx-3 rounded-full"></span>
                                            <p>
                                                {articles.data[0].created_at.slice(
                                                    0,
                                                    10
                                                )}
                                            </p>
                                        </div>
                                        <div className="font-bold">
                                            <h3>{articles.data[0].title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </Transition>
                    <Transition
                        nodeRef={nodeRef}
                        in={slider == 2}
                        timeout={500}
                    >
                        {(state) => (
                            <Link
                                itemRef={nodeRef}
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state],
                                }}
                                href={"detail/" + articles.data[1].slug}
                                className="relative"
                            >
                                <img
                                    src={"/storage/" + articles.data[1].image}
                                    alt={articles.data[1].title}
                                    className="rounded-xl"
                                />
                                <div className="rounded-xl bg-gradient-to-t from-slate-900 to-transparent text-slate-50 absolute px-3 h-full w-full bottom-0">
                                    <div className="flex flex-col justify-end h-full">
                                        <div className="flex items-center text-xs">
                                            <p>
                                                {
                                                    articles.data[1].category
                                                        .category_name
                                                }
                                            </p>
                                            <span className="w-1 h-1 bg-white mx-3 rounded-full"></span>
                                            <p>
                                                {articles.data[1].created_at.slice(
                                                    0,
                                                    10
                                                )}
                                            </p>
                                        </div>
                                        <div className="font-bold">
                                            <h3>{articles.data[1].title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </Transition>
                    <Transition
                        nodeRef={nodeRef}
                        in={slider == 3}
                        timeout={500}
                    >
                        {(state) => (
                            <Link
                                itemRef={nodeRef}
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state],
                                }}
                                href={"detail/" + articles.data[2].slug}
                                className="relative"
                            >
                                <img
                                    src={"/storage/" + articles.data[2].image}
                                    alt={articles.data[2].title}
                                    className="rounded-xl"
                                />
                                <div className="rounded-xl bg-gradient-to-t from-slate-900 to-transparent text-slate-50 absolute px-3 h-full w-full bottom-0">
                                    <div className="flex flex-col justify-end h-full">
                                        <div className="flex items-center text-xs">
                                            <p>
                                                {
                                                    articles.data[2].category
                                                        .category_name
                                                }
                                            </p>
                                            <span className="w-1 h-1 bg-white mx-3 rounded-full"></span>
                                            <p>
                                                {articles.data[2].created_at.slice(
                                                    0,
                                                    10
                                                )}
                                            </p>
                                        </div>
                                        <div className="font-bold">
                                            <h3>{articles.data[2].title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </Transition>
                </>
            ) : (
                <div className="grid grid-cols-2">
                    <Link
                        href={"detail/" + articles.data[0].slug}
                        className="relative col-span-2"
                    >
                        <img
                            src={"/storage/" + articles.data[0].image}
                            alt={articles.data[0].title}
                            className="rounded-t-xl"
                        />
                        <div className="rounded-t-xl bg-gradient-to-t from-slate-900 to-transparent text-slate-50 absolute px-3 h-full w-full bottom-0">
                            <div className="flex flex-col justify-end h-full">
                                <div className="flex items-center text-xs">
                                    <p>
                                        {
                                            articles.data[0].category
                                                .category_name
                                        }
                                    </p>
                                    <span className="w-1 h-1 bg-white mx-3 rounded-full"></span>
                                    <p>
                                        {articles.data[0].created_at.slice(
                                            0,
                                            10
                                        )}
                                    </p>
                                </div>
                                <div className="font-bold">
                                    <h3>{articles.data[0].title}</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href={"detail/" + articles.data[1].slug}
                        className="relative"
                    >
                        <img
                            src={"/storage/" + articles.data[1].image}
                            alt={articles.data[1].title}
                            className="rounded-bl-xl"
                        />
                        <div className="rounded-bl-xl bg-gradient-to-t from-slate-900 to-transparent text-slate-50 absolute px-3 h-full w-full bottom-0">
                            <div className="flex flex-col justify-end h-full">
                                <div className="flex items-center text-xs">
                                    <p>
                                        {
                                            articles.data[1].category
                                                .category_name
                                        }
                                    </p>
                                    <span className="w-1 h-1 bg-white mx-3 rounded-full"></span>
                                    <p>
                                        {articles.data[1].created_at.slice(
                                            0,
                                            10
                                        )}
                                    </p>
                                </div>
                                <div className="font-bold">
                                    <h3>{articles.data[1].title}</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href={"detail/" + articles.data[2].slug}
                        className="relative"
                    >
                        <img
                            src={"/storage/" + articles.data[2].image}
                            alt={articles.data[2].title}
                            className="rounded-br-xl"
                        />
                        <div className="rounded-br-xl bg-gradient-to-t from-slate-900 to-transparent text-slate-50 absolute px-3 h-full w-full bottom-0">
                            <div className="flex flex-col justify-end h-full">
                                <div className="flex items-center text-xs pt-28">
                                    <p>
                                        {
                                            articles.data[2].category
                                                .category_name
                                        }
                                    </p>
                                    <span className="w-1 h-1 bg-white mx-3 rounded-full"></span>
                                    <p>
                                        {articles.data[2].created_at.slice(
                                            0,
                                            10
                                        )}
                                    </p>
                                </div>
                                <div className="font-bold">
                                    <h3>{articles.data[2].title}</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </>
    );
}

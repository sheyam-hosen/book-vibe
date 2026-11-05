
import React from 'react';
import Image from "next/image";
import bannerImg from "@/app/asscts/hero_img.jpg";

const Banner = () => {
    return (
        <section className="py-6 md:py-10 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-6 md:p-8 lg:p-10">

                    {/* Content */}
                    <div className="space-y-4">

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight">
                            Books to
                            <span className="text-green-600"> Freshen Up </span>
                            Your Bookshelf
                        </h1>

                        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-md">
                            Explore a world of stories, knowledge, and inspiration.
                            Find your next favorite book and make every page count.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <button className="btn btn-success btn-sm md:btn-md text-white rounded-xl">
                                Explore Books
                            </button>

                            <button className="btn btn-outline btn-sm md:btn-md rounded-xl">
                                Learn More
                            </button>
                        </div>

                        <div className="flex items-center gap-6 pt-3">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800">1K+</h3>
                                <p className="text-xs md:text-sm text-slate-500">
                                    Happy Readers
                                </p>
                            </div>

                            <div className="w-px h-9 bg-slate-300"></div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-800">500+</h3>
                                <p className="text-xs md:text-sm text-slate-500">
                                    Books Available
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Image */}
                    <div>
                        <Image
                            src={bannerImg}
                            alt="Books on bookshelf"
                            priority
                            className="w-full h-[220px] md:h-[300px] lg:h-[340px] object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;

import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className="mx-auto my-12 max-w-7xl px-5 lg:px-10">
            <div className="relative overflow-hidden rounded-3xl bg-gray-100 p-6 shadow-sm ring-1 ring-black/5 md:p-10 lg:p-12">
                
                {/* Decorative shapes */}
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-green-200/30 blur-3xl" />

                <div className="relative grid items-center gap-10 md:grid-cols-2 lg:gap-16">
                    
                    {/* Content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Books to freshen up your bookshelf
                        </h2>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <button className="rounded-xl bg-green-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl">
                                View The List
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="absolute -inset-3 rounded-3xl bg-emerald-200/40 blur-2xl" />

                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <Image
                                src={bannerImg}
                                alt="Books on a bookshelf"
                                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;

import { IBook } from '@/types/book.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IListedBookCardProps {
    book: IBook;
}

const ListedBookCard = ({book}: IListedBookCardProps) => {
    return (
        <div
            key={book.bookId}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row"
        >
            {/* Book Image */}
            <div className="relative aspect-3/4 w-full overflow-hidden bg-gray-100 sm:aspect-auto sm:h-auto sm:w-56 md:w-64">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    sizes="(max-width: 640px) 100vw, 256px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur">
                        {book.category}
                    </span>
                </div>

                {/* Rating */}
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-gray-900/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    <span className="text-yellow-400">★</span>
                    {book.rating}
                </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                    {/* Title */}
                    <h3 className="line-clamp-2 text-xl font-bold text-gray-900 md:text-2xl">
                        {book.bookName}
                    </h3>

                    {/* Author */}
                    <p className="mt-2 text-sm text-gray-500">
                        by{" "}
                        <span className="font-medium text-gray-700">
                            {book.author}
                        </span>
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Book Info */}
                    <div className="mt-6 grid grid-cols-3 border-y border-gray-100 py-4">
                        <div className="border-r border-gray-100">
                            <p className="text-xs text-gray-400">Pages</p>
                            <p className="mt-1 font-semibold text-gray-800">
                                {book.totalPages}
                            </p>
                        </div>

                        <div className="border-r border-gray-100 px-4">
                            <p className="text-xs text-gray-400">Published</p>
                            <p className="mt-1 font-semibold text-gray-800">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <div className="px-4">
                            <p className="text-xs text-gray-400">Publisher</p>
                            <p
                                className="mt-1 max-w-[15ch] truncate font-semibold text-gray-800"
                                title={book.publisher}
                            >
                                {book.publisher}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 flex items-center justify-between gap-4">
                    <div>
                        <p className="text-xs text-gray-400">Book ID</p>
                        <p className="text-sm font-medium text-gray-700">
                            #{book.bookId}
                        </p>
                    </div>

                    <Link
                        href={`/books/${book.bookId}`}
                        className="rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default ListedBookCard;
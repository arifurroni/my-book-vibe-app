import { IBook } from '@/types/book.type';
import Image from 'next/image';
import Link from 'next/link';
// import React from 'react';

interface IBookCardProps {
    book: IBook;
}

const BookCard = ({book}: IBookCardProps) => {
    return (
                    <div
                        key={book.bookId}
                        className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        {/* Book Image */}
                        <div className="relative aspect-3/4 overflow-hidden bg-gray-100">
                            <Image
                                src={book.image}
                                alt={book.bookName}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                        <div className="p-5">
                            <h3 className="line-clamp-1 text-lg font-bold text-gray-900">
                                {book.bookName}
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                by{' '}
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
                            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-600 divide-x divide-gray-200">
                                <span className='pr-2'><div>Pages</div>{book.totalPages}</span>

                                <span className='pr-2'><div>Published</div>{book.yearOfPublishing}</span>

                                <span className='pr-2'><div>Publisher</div><span className="block max-w-[13ch] truncate" title={book.publisher}>{book.publisher}</span></span>
                            </div>

                            {/* Button */}
                            <Link href={`/books/${book.bookId}`}>
                                <button className="mt-5 w-full rounded-xl bg-emerald-700 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
    );
};

export default BookCard;
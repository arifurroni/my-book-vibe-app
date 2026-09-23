// import React from 'react';

import ReadBookButton from "@/components/booksDetails/ReadBookButton";
import WishlistButton from "@/components/booksDetails/WishlistButton";
import { IBook } from "@/types/book.type";
import Image from "next/image";

interface IBookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getBooks = async (): Promise<IBook[]> => {
    const response = await fetch('http://localhost:3000/booksData.json');

    if (!response.ok) {
        throw new Error('Failed to fetch books');
    }

    return response.json();
};

const BookDetailsPage = async ({params}: IBookDetailsPageProps) => {
    const {id} = await params;
    const booksData = await getBooks();
    const book = booksData.find((book) => String(book.bookId) == String(id)) as IBook;

    // console.log(book, "book");

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row rounded-3xl border border-base-300 bg-base-100 shadow-xl">
                
                    {/* Book Image */}
                    <figure className="bg-base-200 p-6">
                        <Image
                        src={book.image}
                        alt={book.bookName}
                        width={1500}
                        height={1500}
                        
                        />
                    </figure>
                
                
                
                    {/* Book Details */}
                    <div className=" p-6 lg:p-10">
                        {/* Category */}
                        <div className=" items-center gap-2">
                            <span className="badge badge-primary badge-lg">
                                {book.category}
                            </span>
                        </div>

                        {/* Book Name */}
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-base-content lg:text-4xl">
                        {book.bookName}
                        </h2>

                        {/* Author */}
                        <p className="text-lg font-medium text-base-content/60">
                        <span className="font-bold">By: </span><span className="text-primary">{book.author}</span>
                        </p>

                        {/* Rating */}
                        <div className="mt-3 flex items-center gap-3">
                        <div className="rating rating-sm">
                            {[1, 2, 3, 4, 5].map((star) => (
                            <input
                                key={star}
                                type="radio"
                                name="book-rating"
                                className="mask mask-star-2 bg-orange-400"
                                checked={Math.round(book.rating) === star}
                                readOnly
                            />
                            ))}
                        </div>

                        <span className="font-semibold">{book.rating}/5</span>
                        </div>

                        {/* Description */}
                        <p className="mt-4 leading-7 text-base-content/70"><span className="font-bold">Review: </span>{book.review}</p>

                        {/* Book Information */}
                        <div className="my-5 grid grid-cols-2 gap-4 rounded-2xl bg-base-200 p-5 sm:grid-cols-3">
                        <div>
                            <p className="text-sm text-base-content/50">Pages</p>
                            <p className="mt-1 font-bold">{book.totalPages}</p>
                        </div>

                        <div>
                            <p className="text-sm text-base-content/50">Publisher</p>
                            <p className="mt-1 font-bold">{book.publisher}</p>
                        </div>

                        <div>
                            <p className="text-sm text-base-content/50">Published</p>
                            <p className="mt-1 font-bold">{book.yearOfPublishing}</p>
                        </div>
                        </div>

                        {/* Tags */}
                        <div>
                        <p className="mb-2 text-sm font-semibold text-base-content/60">
                            Tags
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {book.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="badge badge-outline rounded-full px-4 py-3">
                                #{tag}
                            </span>
                            ))}
                        </div>
                        </div>

                        {/* Buttons */}
                        <div className="card-actions mt-7 flex flex-wrap gap-3">

                            <ReadBookButton book={book} />

                            <WishlistButton book={book} />
                        </div>
                    </div>
                
                
            </div>
        </div>
    );
};

export default BookDetailsPage;
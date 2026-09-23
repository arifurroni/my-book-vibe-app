// import React from 'react';
// import Image from 'next/image';
import BookCard from '../shared/BookCard';
import { IBook } from '@/types/book.type';



const getBooks = async (): Promise<IBook[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);

    if (!response.ok) {
        throw new Error('Failed to fetch books');
    }

    return response.json();
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="mx-auto my-16 max-w-7xl px-5 lg:px-10">
            {/* Section Header */}
            <div>
                <div>
                    <h2 className="my-10 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl text-center">
                        Popular Books
                    </h2>

                </div>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {booksData.slice(0, 6).map((book, ind) => {
                    return <BookCard key={ind} book={book} />
                })}
            </div>
        </section>
    );
};

export default Books;

"use client";
// import BookCard from '@/components/shared/BookCard';
import ListedBookCard from '@/components/shared/ListedBookCard';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/book.type';
import React, { useContext, useState } from 'react';
// import Books from '../books/page';

const ListedBooks = () => {
    const {readBooks, wishlist} = useContext(BooksContext)

    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating")

    const sortBooks = (books: IBook[]) => {
        const sortedBooks = [...books];

        if (sortBy === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating)
        } else if (sortBy === "pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages)
        } else if (sortBy === "year") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        }

        return sortedBooks;
    }

    const sortedReadBooks = sortBooks(readBooks)
    const sortedWishlist = sortBooks(wishlist)

    // console.log(readBooks, wishlist, "ReadBooks", "wishlist");
    return (
        <div className="mx-auto my-12 max-w-7xl px-5 lg:px-10">
            <h2 className="font-bold text-center bg-amber-100 rounded-2xl text-4xl my-7 px-5 py-3">
                Listed Books
            </h2>

            <div className='text-center m-10'>
                <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")} 
                defaultValue="Pick a Runtime" 
                className="select select-success bg-success"
                >
                    <option disabled={true}>Sort By</option>
                    <option value={"rating"}>By Rating</option>
                    <option value={"pages"}>By Page Number</option>
                    <option value={"year"}>By Published Year</option>
                </select>
            </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Read Books: ${readBooks.length}`}
                    defaultChecked
                />
                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-5">
                    {
                       sortedReadBooks.length > 0 ? sortedReadBooks.map((book: IBook) => {
                            return <ListedBookCard key={book.bookId} book={book} />
                        }) : <p className='text-center font-semibold text-lg'>No read books found</p>
                    }
                </div>

                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Wishlist Books: ${wishlist.length}`}
                    
                />
                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-5">
                    {sortedWishlist.length > 0 ? sortedWishlist.map((book: IBook) => {
                        return <ListedBookCard key={book.bookId} book={book} />
                    }) : <p className='text-center font-semibold text-lg'>No books found for wishlist</p>}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
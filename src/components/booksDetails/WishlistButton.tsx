"use client"
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/book.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton = ({book}: {book: IBook}) => {

    const {wishlist, setWishlist} = useContext(BooksContext)
    // console.log(BooksProvider, "BooksProvider");

    const handleAddToWishlist = () => {
        console.log("Wishlist Button Triggered", book);
        setWishlist([...wishlist, book]);

        toast.success(`"${book.bookName}" added to wishlist`);
    }

    return <button className="btn btn-primary rounded-xl px-7 transition-all hover:scale-105" onClick={() => handleAddToWishlist()}>Add to Wishlist</button>
};

export default WishlistButton;
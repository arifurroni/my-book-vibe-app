"use client"
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/book.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadBookButton = ({book}: {book: IBook}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext)
    // console.log(BooksProvider, "BooksProvider");

    const handleReadBook = () => {
        // console.log("Read Book Button Triggered", book);
        setReadBooks([...readBooks, book]);

        toast.success(`You have read "${book.bookName}"`)
    }

    return <button className="btn btn-outline rounded-xl px-7 transition-all hover:scale-105" onClick={() => handleReadBook()}>Read</button>
};

export default ReadBookButton;
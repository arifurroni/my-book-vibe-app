"use client";

import { IBook } from '@/types/book.type';
import React, { createContext, ReactNode, useState } from 'react';

interface IBookContextType {
    readBooks: IBook[];
    wishlist: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<IBookContextType>({readBooks: [], wishlist: [], setReadBooks: () => {}, setWishlist: () => {},});

const BooksProvider = ({children}: {children: ReactNode}) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([]);
    const [wishlist, setWishlist] = useState<IBook[]>([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }

    return <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
};

export default BooksProvider;
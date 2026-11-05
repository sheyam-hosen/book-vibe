"use client"
import { IBook } from '@/types/books.type';
import { ToastContainer } from "react-toastify";
import React, { createContext, ReactNode, useState } from 'react';
 export const BooksContext = createContext({});

const BooksProvider = ({children}: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([])
    const [wishlist, setWishlist] = useState<IBook[]>([])
    const shareDate ={
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist,
    }
    return (
        <BooksContext.Provider value={shareDate}>{children}</BooksContext.Provider>
    );
};

export default BooksProvider;
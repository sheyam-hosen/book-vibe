"use client"
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { toast } from "react-toastify";
import React, { useContext } from 'react';

const WishlistButton = ({book}: {book: IBook}) => {

const  {wishlist, setWishlist}: any = useContext(BooksContext);

    const handleAddToWishlist = () => {
        console.log("add to wishlist btn triggered",book)
        setWishlist([...wishlist, book])
        toast.success(`You have  added  "${book.bookName}"to your wishlist`)
    }
        
    return (
        <button className="btn btn-primary flex-1" onClick={() => handleAddToWishlist()}>Add to Wishlist</button>
    );
};

export default WishlistButton;
"use client"
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { toast } from "react-toastify";
import React, { useContext } from 'react';

const ReadButton = ({book}: {book: IBook}) => {

const  {readBooks, setReadBooks}:any = useContext(BooksContext);

    const handleReadBook = () => {
        console.log("read book btn triggered",book)
        setReadBooks([...readBooks, book])
        toast.success(`You have read "${book.bookName}"`)
    }
        
    return (
        <button className="btn btn-primary flex-1" onClick={() => handleReadBook()}>Mark as Read</button>
    );
};

export default ReadButton;
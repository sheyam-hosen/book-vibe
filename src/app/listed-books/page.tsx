"use client";

import { BooksContext } from "@/context/BooksContext";
import React, { useState, useContext } from "react";
import { IBook } from "@/types/books.type";
import BookCard from "../components/shared/BookCard";
import ListedBooksCard from "../components/shared/ListedBooksCard";

const Listedspage = () => {
    const { readBooks, wishlist }: any = useContext(BooksContext);
    const [sortBy, setSortby] = useState<"rating" | "pages" | "year">("rating");
    // console.log(readBooks, wishlist, "readBooks", "wishlist");  
    // console.log(sortBy, "sortBy");


const sortBooks = (books : IBook[])=>{
    const sortedBooks = [...books];

    if (sortBy === "rating") {
        sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
        sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
        sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return sortedBooks;
};

const sortedReadBooks = sortBooks(readBooks);
const sortedWishlist = sortBooks(wishlist);
console.log(sortedReadBooks, "sortedReadBooks");
console.log(sortedWishlist, "sortedWishlist");

    return (
        <div className="container mx-auto px-4 py-[20px]">
            <h2 className="my-4 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center">
                Listed Books
            </h2>
            <div className="text-center">
            <select
    value={sortBy}
    onChange={(e) => setSortby(e.target.value as "rating" | "pages" | "year")}
    className="select select-success"
>
    <option value="" disabled>Pick a Runtime</option>
    <option value="rating">Rating</option>
    <option value="pages">Pages</option>
    <option value="year">Year</option>
</select>
              </div>
            <div className="tabs tabs-lift">
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Read Books (${readBooks.length})`}
                    defaultChecked
                />

                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {sortedReadBooks.length > 0 ? (
                        sortedReadBooks.map((book: IBook) => (
                            <ListedBooksCard
                                key={book.bookId}
                                book={book}
                            />
                        ))
                    ) : (
                        <p className="text-center text-lg font-semibold">
                            No read books found
                        </p>
                    )}
                </div>

                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Wishlist Books (${wishlist.length})`}
                />

                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {sortedWishlist.length > 0 ? (
                        sortedWishlist.map((book: IBook) => (
                            <ListedBooksCard
                                key={book.bookId}
                                book={book}
                            />
                        ))
                    ) : (
                        <p className="text-center text-lg font-semibold">
                            No books in wishlist
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Listedspage;
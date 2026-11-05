import { IBook } from '@/types/books.type';
import Link from 'next/dist/client/link';
import Image from 'next/dist/shared/lib/image-external';
// import { Playfair_Display } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import React from 'react';
const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
});


interface ListedBooksCardProps {
    book: IBook;
}
const ListedBooksCard = ({ book } :ListedBooksCardProps) => {
    return (
        <div key={book.bookId} className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 sm:flex-row">
            {/* Book Image */}
            <div className="flex h-[180px] w-full shrink-0 items-center justify-center rounded-xl bg-gray-100 sm:w-[180px]">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={120}
                    height={160}
                    className="h-[150px] w-auto object-contain"
                />
            </div>

            {/* Details */}
            <div className="flex-1">
                <h3 className={`${playfairDisplay.className} text-2xl text-gray-900`}>
                    {book.bookName}
                </h3>
                <p className="mt-2 text-sm font-medium text-gray-700">
                    By : {book.author}
                </p>

                {/* Tags + Year */}
                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                    <span className="font-bold text-gray-900">Tag</span>
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-green-50 px-4 py-1.5 font-medium text-green-600"
                        >
                            #{tag}
                        </span>
                    ))}
                    <span className="flex items-center gap-1.5 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
                            <circle cx="12" cy="10" r="2.5" />
                        </svg>
                        Year of Publishing: {book.yearOfPublishing}
                    </span>
                </div>

                {/* Publisher + Pages */}
                <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                            <circle cx="9" cy="8" r="3" />
                            <path strokeLinecap="round" d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                            <circle cx="17" cy="9" r="2.2" />
                            <path strokeLinecap="round" d="M16 14.2c2.8.2 5 2.4 5 5.3" />
                        </svg>
                        Publisher: {book.publisher}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l4 4v14H7V3z" />
                            <path strokeLinecap="round" d="M14 3v4h4M10 12h5M10 16h5" />
                        </svg>
                        Page {book.totalPages}
                    </span>
                </div>

                <div className="my-4 border-t border-gray-200" />

                {/* Pills */}
                <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="rounded-full bg-blue-50 px-4 py-2 text-blue-500">
                        Category: {book.category}
                    </span>
                    <span className="rounded-full bg-orange-50 px-4 py-2 text-orange-400">
                        Rating: {book.rating}
                    </span>
                    <Link
                        href={`/Books/${book.bookId}`}
                        className="rounded-full bg-green-600 px-5 py-2 font-medium text-white transition-colors hover:bg-green-700"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ListedBooksCard;
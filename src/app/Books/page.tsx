
import Image from "next/image";
import BookCard from "@/app/components/shared/BookCard";
import { IBook } from "@/types/books.type";
import booksDataJson from "@/booksData.json";

const Books = async () => {
    const booksData = booksDataJson as IBook[];

    return (
        <section className="container mx-auto px-4 py-10">

            {/* Section Heading */}
            <div className="text-center mb-8 space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                    Discover Your Next Book
                </h2>

                <p className="text-sm text-slate-500">
                    Explore amazing stories and find your next favorite book.
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

                {booksData.map((book: IBook, ind: number) => (
                    <BookCard key={ind} book={book} />
                ))}

            </div>
        </section>
    );
};

export default Books;


import Image from "next/image";
import BookCard from "@/app/components/shared/BookCard";
import { IBook } from "@/types/books.type";
 const getBooks = async () => {
const response = await fetch("http://localhost:3000/booksData.json");
const data = await response.json();
return data;
    
};

const Books = async () => {
    const booksData = await getBooks();

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
            <div className="grid gap-6 sm:grid-cols-2 lg:cols-3">

                {booksData.slice(0, 9).map((book: IBook, ind: number) => {
    return <BookCard key={ind} book={book} />;
})}

            </div>
        </section>
    );
};

export default Books;

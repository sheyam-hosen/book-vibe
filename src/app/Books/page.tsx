
import Image from "next/image";
import BookCard from "@/app/components/shared/BookCard";
import { IBook } from "@/types/books.type";
const getBooks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`
    );

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetch books data", error);
    return [];
  }
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

                {booksData.map((book:IBook, ind:number) => (
                    <BookCard key={ind} book={book} />
                ))}

            </div>
        </section>
    );
};

export default Books;

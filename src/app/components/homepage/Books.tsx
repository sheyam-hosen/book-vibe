
import Image from "next/image";
import BookCard from "@/app/components/shared/BookCard";
import { IBook } from "@/types/books.type";
import { error } from "next/dist/build/output/log";
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
            <div className="grid gap-6 sm:grid-cols-2 lg:cols-3">

                {booksData.slice(0, 9).map((book: IBook, ind: number) => {
    return <BookCard key={ind} book={book} />;
})}

            </div>
        </section>
    );
};

export default Books;

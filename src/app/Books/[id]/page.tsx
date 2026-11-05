
import { IBook } from '@/types/books.type';
import React from 'react';
import Image from 'next/image';
import ReadButton from '@/app/components/bookDetails/ReadButton';
import WishlistButton from '@/app/components/bookDetails/WishlistButton';
// import ReadButton from '@/app/components/bookDetails/ReadButton';

interface IBookDetailsPageProps {
    params: {
        id: string;
    };
}
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


const BookDetailsPage = async ({params}: IBookDetailsPageProps) => {
    const { id } = await params;
    const bookData = await getBooks()
    const book = bookData.find((book:IBook) => String(book.bookId) ===String(id)
)as IBook;
   
   
    
    console.log(book,"book")
    
    
    
    
    return (
    <div className="container mx-auto px-4 py-10">
        <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden rounded-2xl">

            {/* Book Image */}
            <figure className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 lg:w-1/3">
                <Image
                    width={300}
                    height={400}
                    src={book.image}
                    alt={book.bookName}
                    className="rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
                />
            </figure>

            {/* Book Details */}
            <div className="card-body lg:w-2/3 p-8">

                <div className="flex flex-wrap items-center gap-2">
                    <span className="badge badge-primary badge-outline">
                        {book.category}
                    </span>

                    {book.tags.map((tag, index) => (
                        <span key={index} className="badge badge-ghost">
                            {tag}
                        </span>
                    ))}
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-base-content mt-3">
                    {book.bookName}
                </h2>

                <p className="text-base text-base-content/60">
                    By <span className="font-semibold text-primary">{book.author}</span>
                </p>

                <div className="divider my-2"></div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="rating rating-sm">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <input
                                key={star}
                                type="radio"
                                className="mask mask-star-2 bg-orange-400"
                                checked={star === Math.round(book.rating)}
                                readOnly
                            />
                        ))}
                    </div>

                    <span className="font-semibold">{book.rating}/5</span>
                </div>

                {/* Description */}
                <div className="mt-4">
                    <h3 className="text-lg font-bold mb-2">About This Book</h3>
                    <p className="text-base-content/70 leading-7">
                        {book.review}
                    </p>
                </div>

                {/* Book Information */}
                <div className="grid grid-cols-2 gap-4 mt-5">

                    <div className="bg-base-200/60 p-4 rounded-xl">
                        <p className="text-sm text-base-content/50">Total Pages</p>
                        <p className="font-bold text-lg">{book.totalPages}</p>
                    </div>

                    <div className="bg-base-200/60 p-4 rounded-xl">
                        <p className="text-sm text-base-content/50">Published Year</p>
                        <p className="font-bold text-lg">{book.yearOfPublishing}</p>
                    </div>

                    <div className="bg-base-200/60 p-4 rounded-xl col-span-2">
                        <p className="text-sm text-base-content/50">Publisher</p>
                        <p className="font-bold text-lg">{book.publisher}</p>
                    </div>

                </div>

                {/* Action */}
                <div className="card-actions justify-end mt-6">
                    <ReadButton book={book} />
                    <WishlistButton book={book} />

                </div>

            </div>
        </div>
    </div>
);
};

export default BookDetailsPage;
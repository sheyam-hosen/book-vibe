
import { IBook } from "@/types/books.type";
import Link from "next/link";
import Image from "next/image";
interface IBookCardprops {
    book:IBook
}

const BookCard = ({ book }:IBookCardprops) => {
    return (
        <div
            className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm cursor-pointer
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:shadow-xl hover:border-green-300
            active:scale-95"
        >

            {/* Book Image */}
            <div className="bg-slate-100 p-4 flex justify-center">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={150}
                    height={190}
                    className="h-[180px] w-auto object-contain rounded-lg
                    transition-transform duration-300
                    group-hover:scale-105"
                />
            </div>

            {/* Card Content */}
            <div className="p-4 space-y-3">

                {/* Category & Rating */}
                <div className="flex justify-between items-center">
                    <span className="bg-green-100 text-green-700 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        {book.category}
                    </span>

                    <span className="text-amber-500 text-sm font-semibold">
                        ★ {book.rating}
                    </span>
                </div>

                {/* Title */}
                <div>
                    <h3 className="text-base font-bold text-slate-800 line-clamp-1 group-hover:text-green-600 transition-colors">
                        {book.bookName}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1">
                        By {book.author}
                    </p>
                </div>

                {/* Review */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Book Info */}
                <div className="flex justify-between border-t border-slate-100 pt-3">
                    <div>
                        <p className="text-[10px] text-slate-400">Pages</p>
                        <p className="text-xs font-semibold text-slate-700">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-[10px] text-slate-400">Published</p>
                        <p className="text-xs font-semibold text-slate-700">
                            {book.yearOfPublishing}
                        </p>
                    </div>
                </div>

                {/* Button */}
                <Link href={`/Books/${book.bookId}`}
    className="btn w-full rounded-xl border-0 bg-slate-900 text-white transition-all hover:bg-emerald-600"
>
    View Details
</Link>
                {/* <Link href={`/Books/${book.bookId}`}>
                    <button className="btn w-full rounded-xl border-0 bg-slate-900 text-white
                        trnsition-all hover:bg-emerald-600">
                        View Details
                    </button>
                </Link> */}

            </div>
        </div>
    );
};

export default BookCard;

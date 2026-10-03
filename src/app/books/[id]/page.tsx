import ReadButton from '@/components/bookDetails/ReadButton';
import { IBook } from '@/types/books.types';
import Image from 'next/image';
import React from 'react';

interface IBookDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}
const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};


const BookDetailPage = async({params}: IBookDetailPageProps) => {
    const { id } = await params;
    const booksData = await getBooks();
  const book = booksData.find(
  (book: IBook) => String(book.bookId) === String(id)
) as IBook;
  console.log(book,"book details");



    return (
      <div className="container mx-auto my-[70px] px-4">
  <div className="card lg:card-side bg-white shadow-xl border border-slate-200 rounded-3xl overflow-hidden">

    {/* Book Image */}
    <figure className="lg:w-1/2 bg-slate-100 p-8">
      <Image
        src={book.image}
        alt={book.bookName}
        width={500}
        height={650}
        className="w-full max-h-[520px] object-contain rounded-2xl"
      />
    </figure>

    {/* Book Details */}
    <div className="card-body lg:w-1/2 p-8 lg:p-10">

      {/* Category + Rating */}
      <div className="flex items-center justify-between gap-4 mb-2">
        <span className="badge badge-success badge-outline px-4 py-3 font-medium">
          {book.category}
        </span>

        <span className="text-lg font-semibold text-amber-500">
          ⭐ {book.rating}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
        {book.bookName}
      </h1>

      {/* Author */}
      <p className="text-slate-500 text-lg">
        By{" "}
        <span className="font-semibold text-slate-700">
          {book.author}
        </span>
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 my-2">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Review */}
      <div className="mt-3">
        <h3 className="text-lg font-bold text-slate-800 mb-2">
          About this book
        </h3>

        <p className="text-slate-600 leading-7">
          {book.review}
        </p>
      </div>

      {/* Book Information */}
      <div className="grid grid-cols-2 gap-4 mt-4">

        <div className="bg-slate-50 p-4 rounded-2xl">
          <p className="text-xs text-slate-400 mb-1">Publisher</p>
          <p className="font-semibold text-slate-700">
            {book.publisher}
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl">
          <p className="text-xs text-slate-400 mb-1">Published</p>
          <p className="font-semibold text-slate-700">
            {book.yearOfPublishing}
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl">
          <p className="text-xs text-slate-400 mb-1">Total Pages</p>
          <p className="font-semibold text-slate-700">
            {book.totalPages}
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl">
          <p className="text-xs text-slate-400 mb-1">Rating</p>
          <p className="font-semibold text-slate-700">
            {book.rating} / 5
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="card-actions mt-6">
        <ReadButton book={book} />

        <button className="btn btn-outline rounded-xl px-6">
          Add to Wishlist
        </button>
      </div>

    </div>
  </div>
</div>
    );
};

export default BookDetailPage;

"use client";

import ListedBooksCard from "@/components/shared/ListedBooksCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.types";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
   
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Heading */}
      <h2 className="mb-10 bg-amber-100 rounded-3xl py-12 text-center text-4xl font-bold text-black">
        Listed Books
      </h2>

      {/* Tabs */}
      <div className="tabs tabs-border w-full">
        {/* ================= READ BOOKS TAB ================= */}
        <input
          type="radio"
          name="listed_books_tabs"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />

        {readBooks.map((book: IBook) => (
          <ListedBooksCard key={book.bookId} book={book} />
        ))}

        {/* ================= WISHLIST TAB ================= */}
        <input
          type="radio"
          name="listed_books_tabs"
          className="tab"
          aria-label={`Wishlist (${wishlist.length})`}
        />

        <div className="tab-content w-full pt-7">
          {wishlist.length > 0 ? (
            <div className="flex flex-col gap-6 w-full">
              {wishlist.map((book: IBook) => (
                <div
                  key={book.bookId}
                  className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row gap-7 p-6">
                    {/* ================= IMAGE ================= */}
                    <div className="w-full md:w-[260px] flex-shrink-0">
                      <div className="w-full h-[340px] bg-gray-100 rounded-2xl flex items-center justify-center p-5">
                        <Image
                          src={book.image}
                          alt={book.bookName}
                          width={220}
                          height={310}
                          className="w-[210px] h-[300px] object-cover rounded-xl shadow-md"
                        />
                      </div>
                    </div>

                    {/* ================= BOOK INFO ================= */}
                    <div className="flex-1 flex flex-col">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {book.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-4 py-1.5 bg-green-50 text-green-600 text-sm font-semibold rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Book Name */}
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {book.bookName}
                      </h2>

                      {/* Author */}
                      <p className="text-gray-500 mb-4">
                        By{" "}
                        <span className="font-semibold text-gray-800">
                          {book.author}
                        </span>
                      </p>

                      <hr className="border-gray-200 mb-5" />

                      {/* Review */}
                      <p className="text-gray-600 leading-7 line-clamp-3 mb-6">
                        {book.review}
                      </p>

                      {/* Book Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
                        {/* Category */}
                        <div>
                          <p className="text-xs text-gray-400 mb-1">
                            Category
                          </p>

                          <p className="font-semibold text-gray-700">
                            {book.category}
                          </p>
                        </div>

                        {/* Publisher */}
                        <div>
                          <p className="text-xs text-gray-400 mb-1">
                            Publisher
                          </p>

                          <p className="font-semibold text-gray-700">
                            {book.publisher}
                          </p>
                        </div>

                        {/* Total Pages */}
                        <div>
                          <p className="text-xs text-gray-400 mb-1">
                            Total Pages
                          </p>

                          <p className="font-semibold text-gray-700">
                            📖 {book.totalPages} Pages
                          </p>
                        </div>

                        {/* Published Year */}
                        <div>
                          <p className="text-xs text-gray-400 mb-1">
                            Published
                          </p>

                          <p className="font-semibold text-gray-700">
                            📅 {book.yearOfPublishing}
                          </p>
                        </div>
                      </div>

                      {/* Bottom */}
                      <div className="mt-auto pt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Rating */}
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">
                            Rating:
                          </span>

                          <span className="font-bold text-gray-900">
                            {book.rating}
                          </span>

                          <span className="text-yellow-400 text-xl">
                            ★
                          </span>
                        </div>

                        {/* Button */}
                        <Link href={`/books/${book.bookId}`}>
                          <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl cursor-pointer transition-all duration-300">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-gray-500 text-lg">
                No books in wishlist yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;

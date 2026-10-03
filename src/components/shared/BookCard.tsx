import { IBook } from '@/types/books.types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps {
    book:IBook;
}

const BookCard = ({book}:IBookCardProps) => {
    return (
        <div
                   key={book.bookId}
                   className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl transition duration-300"
                 >
       
                   {/* Image */}
                   <div className="bg-gray-100 rounded-xl p-5 h-[280px] flex justify-center items-center">
                     <Image
                       src={book.image}
                       alt={book.bookName}
                       width={800}
                       height={600}
                       className="h-full object-contain rounded-lg"
                     />
                   </div>
       
                   {/* Content */}
                   <div className="mt-5">
       
                     {/* Tags */}
                     <div className="flex gap-2 mb-4">
                       {book.tags.map((tag: string) => (
                         <span
                           key={tag}
                           className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium"
                         >
                           #{tag}
                         </span>
                       ))}
                     </div>
       
                     {/* Book Name */}
                     <h2 className="text-2xl font-bold text-gray-900">
                       {book.bookName}
                     </h2>
       
                     {/* Author */}
                     <p className="text-gray-500 mt-2">
                       By{" "}
                       <span className="font-semibold text-gray-700">
                         {book.author}
                       </span>
                     </p>
       
                     {/* Category + Rating */}
                     <div className="flex justify-between items-center mt-5 border-t border-gray-200 pt-4">
       
                       <span className="text-gray-600">
                         {book.category}
                       </span>
       
                       <span className="font-semibold text-gray-700">
                         {book.rating} ⭐
                       </span>
       
                     </div>
       
                     {/* Page + Year */}
                     <div className="flex justify-between mt-3 text-sm text-gray-500">
                       <span>📖 {book.totalPages} Pages</span>
                       <span>📅 {book.yearOfPublishing}</span>
                     </div>
       
                     {/* Button */}
                     <Link href={`/books/${book.bookId}`}>
                     <button className="w-full mt-5 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition">
                       View Details
                     </button>
                     </Link>
       
                   </div>
                 </div>
    );
};

export default BookCard;

"use client";
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.types';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: IBook }) => {
  const {readBooks, setReadBooks} =useContext(BooksContext)
  
 
const handleReadBook = () => {
 console.log("Read button clicked", book);
 setReadBooks([...readBooks, book]);
 toast.success(`You have read "${book.bookName}"!`);
}
    return (
        <button className="btn btn-success text-white rounded-xl px-6" onClick={()=> handleReadBook()}>
          Read Now
        </button>
    );
};

export default ReadButton;

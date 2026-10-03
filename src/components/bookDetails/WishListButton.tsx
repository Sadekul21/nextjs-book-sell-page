"use client";
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.types';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({ book }: { book: IBook }) => {
  const {wishlist, setWishlist} =useContext(BooksContext)
  
 
const handleAddToWishlist = () => {
 console.log("Wishlist button clicked", book);
 setWishlist([...wishlist, book]);
 toast.success(`You have added "${book.bookName}" to your wishlist!`);
}
    return (
        <button className="btn btn-success text-white rounded-xl px-6" onClick={()=> handleAddToWishlist()}>
          Add to Wishlist
        </button>
    );
};

export default WishListButton;

"use client"
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ListedBooks = () => {
    const {readBooks, wishlist} = useContext(BooksContext);
    console.log("readBooks", readBooks,"wishlist", wishlist);
    
    return (
        <div>
            listed books | Total read Books:{readBooks.length} <br /> |Total wishlist: {wishlist.length}
        </div>
    );
};

export default ListedBooks;

// import React from 'react';
//  const getBooks= async()=>{
//     const res= await fetch("http://localhost:3000//booksData.json")
//     const data =await res.json();
//     return data;
//  }
// const Books =async () => {
//     const booksData=await getBooks();
//     console.log(booksData,"booksData");

//     return (
//         <section className='container mx-auto my-[70px]'>
//           Books
//           {booksData.map((book, ind)=>{
//             return <div key={ind}>{book.bookName}</div>
//           })}
//         </section>
       
//     );
// };

// export default Books;

import Image from "next/image";
import BookCard from "../BookCard";
import { IBook } from "@/types/books.types";

const getBooks = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-black">
          Books
        </h2>
        <p className="text-gray-500 mt-2">
          Explore our amazing collection of books
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

        {booksData.slice(0, 9).map((book:IBook,ind:number) => {
             return <BookCard  key={ind} book={book} /> 
            }
         
        )}

      </div>
    </section>
  );
};

export default Books;

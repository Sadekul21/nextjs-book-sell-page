import Image from "next/image";

import { IBook } from "@/types/books.types";
import BookCard from "@/components/shared/BookCard";

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
          Explore All Books
        </h2>
        <p className="text-gray-500 mt-2">
          Discover your next favorite book
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

        {booksData.map((book:IBook,ind:number) => {
             return <BookCard key={ind} book={book} /> 
            }
         
        )}

      </div>
    </section>
  );
};

export default Books;


import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-10 bg-slate-100 rounded-3xl overflow-hidden shadow-sm">

          {/* Left Content */}
          <div className="p-8 md:p-12 lg:p-16 space-y-6">
            <span className="inline-block text-sm font-semibold text-emerald-600 bg-emerald-100 px-4 py-2 rounded-full">
              Discover your next read
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Books to freshen up your bookshelf
            </h2>

            <p className="text-slate-600 text-base md:text-lg max-w-xl leading-relaxed">
              Explore a curated collection of books and find stories that make
              your reading time more enjoyable.
            </p>

            <button className="btn bg-emerald-500 hover:bg-emerald-600 border-none text-white px-7">
              View the Books
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-full min-h-[420px]">
            <Image
              src={bannerImg}
              alt="Books banner"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;

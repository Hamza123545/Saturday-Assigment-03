import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center w-full h-screen gap-4 px-8 lg:flex-row">
        {/* Content Section */}
        <div className="flex flex-col items-center justify-center w-[90%] gap-4 py-10 h-auto lg:items-start lg:w-1/2 lg:h-96">
          <h1 className="text-5xl font-bold text-center lg:text-left">
            Welcome To Our Website
          </h1>
          <p className="text-xl text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            dolore repellat eligendi, delectus debitis placeat hic! Ex delectus
            cumque quae dolorem consectetur repudiandae quaerat modi, veritatis
            illum a ipsum ipsa!
          </p>
          <button className="px-10 py-2 mt-4 text-white bg-black rounded-sm">
            Contact Us
          </button>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center w-full h-auto lg:w-1/2 lg:h-48">
          <Image
            className="w-auto h-96"
            src="/img/black.jpg"
            width={500}
            height={400}
            alt="theme"
          />
        </div>
      </div>
    </>
  );
}

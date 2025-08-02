import { Link } from "react-router";
import HomeImage1 from "../assets/HomeImage1.png";
import HomeImageHandshake1 from "../assets/HomeImageHandshake1.png";
import Stockphoto1 from "../assets/HomeImageStockPhoto1.png";

import { aboutData, homeData } from "../data/componentData";
import Categories from "../components/categories";
import ExpoComponent from "../components/expoComponent";
const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-24">
      <div className="flex flex-col gap-6 sm:items-end items-center border-b-2 pb-4 border-gray-300">
        <span className="">
          <img src={HomeImage1} alt="" className="lg:max-w-6xl" />
        </span>
        <span className="flex gap-12 px-4">
          {homeData.map((data, index) => (
            <Link
              target="_blank"
              to={data.link}
              key={index}
              className="hover:scale-105 hover:bg-main hover:-translate-y-2 duration-300 transform transistion-normal text-bold border-2 rounded-md sm:text-2xl text-sm md:px-12 px-2 py-1 md:py-4"
            >
              {data.content}
            </Link>
          ))}
        </span>
      </div>
      <div className="sm:max-w-7xl sm:px-12 px-4">
        <h1 className="sm:text-4xl text-xl mb-2">
          About <b className="underline">Us</b>
        </h1>
        <section className="flex flex-col sm:gap-6 gap-2">
          {aboutData
            .filter((data) => data.for === "about")
            .map((data, index) => (
              <p
                key={index}
                className={`leading-relaxed ${
                  data.isJustify ? "text-justify" : ""
                } text-md sm:text-xl px-4`}
              >
                {data.content}
              </p>
            ))}
        </section>
      </div>
      <div className="bg-main w-full lg:px-48 lg:py-24 p-4">
        <h1 className="sm:text-4xl text-xl mb-2 sm:max-w-7xl">
          About <b className="underline">MPPA</b>
        </h1>
        <section className="flex flex-col sm:gap-6 gap-2 sm:max-w-7xl">
          {aboutData
            .filter((data) => data.for === "aboutMPPA")
            .map((data, index) => (
              <p
                key={index}
                className={`leading-relaxed  ${
                  data.isJustify ? "text-justify" : ""
                } text-md sm:text-xl px-4`}
              >
                {data.content}
              </p>
            ))}
        </section>
      </div>
      <div className="flex flex-col gap-6">
        <span className="grid lg:grid-cols-2 items-center justify-center gap-12">
          <h1 className="text-4xl text-center">
            What's on <b className="underline">PhysioLink Expo</b>?
          </h1>
          <img
            src={HomeImageHandshake1}
            alt="Handshake at expo"
            className="rounded-3xl opacity-70 w-full max-w-lg mx-auto lg:max-w-xl"
          />
        </span>
        <ExpoComponent></ExpoComponent>
      </div>
      <div className="bg-main w-full sm:py-20 md:py-24 lg:py-4 px-4 sm:px-8 md:px-12 lg:px-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center leading-tight mb-6">
          About <b className="underline">PhysioLink Show</b>
        </h1>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-12 relative">
          <div className="absolute inset-0 overflow-hidden rounded-xl h-64 self-end">
            <img
              src={Stockphoto1}
              alt="Background image showing people interacting at an event"
              className="object-cover opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
            />
            <div className="absolute inset-0 bg-black opacity-10"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12 w-full">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 w-full max-w-4xl p-4">
              <span
                className="
               text-gray-800      
                shadow-xl                         
                flex flex-col items-center justify-center 
                p-6 sm:p-8 md:p-10                
                rounded-2xl                    
                text-center                      
                transform transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-secondary/80 hover:-translate-y-2 
                cursor-pointer                   
              "
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none">
                  50+
                </h2>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-2">
                  Exhibitors
                </h3>
              </span>
              <span
                className="
                 text-gray-800
                shadow-xl
                flex flex-col items-center justify-center
                p-6 sm:p-8 md:p-10
                rounded-2xl
                text-center
                transform transition-all duration-300 ease-in-out
                hover:scale-105 hover:bg-secondary/80 hover:-translate-y-2
                cursor-pointer
              "
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none">
                  500 - 1000
                </h2>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-2">
                  Visitors
                </h3>
              </span>
              <span
                className="
               text-gray-800
                shadow-xl
                flex flex-col items-center justify-center
                p-6 sm:p-8 md:p-10
                rounded-2xl
                text-center
                transform transition-all duration-300 ease-in-out
                hover:scale-105 hover:bg-secondary/80 hover:-translate-y-2
                cursor-pointer
              "
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none">
                  10,000
                </h2>
                <h3
                  className="text-base sm:text-lg md:text-xl font-semibold mt-2"
                  title="Square meters"
                >
                  SQM
                </h3>
              </span>
            </section>
          </div>
        </div>
      </div>
      <div className="max-w-7xl text-center">
        <h1 className="font-bold md:text-4xl text-2xl">Exhibitor Profile</h1>
        <h2 className="md:text-3xl text-xl">7 Product Categories</h2>
        <Categories></Categories>
      </div>
    </section>
  );
};

export default Home;

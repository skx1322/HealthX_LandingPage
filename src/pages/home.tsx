import { Link } from "react-router";
import HomeImage2 from "../assets/HomeImage2.jpeg";
import HomeImageHandshake1 from "../assets/HomeImageHandshake1.png";

import { aboutData, homeData } from "../data/componentData";
import {CategoriesWhite} from "../components/categories";
import ExpoComponent from "../components/expoComponent";
const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-6 sm:items-end items-center border-b-2 pb-4 border-gray-300">
        <span className="">
          <img src={HomeImage2} alt="" className="lg:max-w-6xl" />
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
      <div className="sm:max-w-7xl sm:px-12 px-4 my-12">
        <h1 className="sm:text-4xl text-xl mb-2 font-bold">
          About Us
        </h1>
        <section className="flex flex-col sm:gap-6 gap-2">
          {aboutData
            .filter((data) => data.for == "about")
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
        <h1 className="sm:text-4xl text-xl mb-2 sm:max-w-7xl font-bold">
          About MPPPA
        </h1>

<section className="flex flex-col sm:gap-6 gap-2 sm:max-w-7xl">
  {aboutData
    .filter((data) => data.for === "aboutMPPPA")
    .map((data, index) => (
      <div key={index} className="px-4">
        <p
          className={`leading-relaxed ${
            data.isJustify ? "text-justify" : ""
          } text-md sm:text-xl`}
        >
          {data.content}
        </p>

        {/* ✅ Button added below paragraph */}
        <a
          href="http://mpppamalaysia.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
            Visit MPPPA Website
          </button>
        </a>
      </div>
    ))}
</section>
      </div>
      <div className="flex flex-col gap-6 my-12">
        <span className="grid lg:grid-cols-2 items-center justify-center gap-12">
          <h1 className="text-4xl text-center font-bold">
            What's on PhysioLink Expo?
          </h1>
          <img
            src={HomeImageHandshake1}
            alt="Handshake at expo"
            className="rounded-3xl opacity-70 w-full max-w-lg mx-auto lg:max-w-xl"
          />
        </span>
        <ExpoComponent></ExpoComponent>
      </div>
      <div className="bg-main w-full sm:py-20 pt-12 px-4 sm:px-8 md:px-12 lg:px-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center leading-tight mb-6 font-bold">
          About PhysioLink Show
        </h1>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-12 relative">
          <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12 w-full">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 w-full max-w-4xl p-4">
              <span
                className=" hover:text-blue-500
                bg-white
               text-gray-800      
                shadow-xl                         
                flex flex-col items-center justify-center 
                p-6 sm:p-8 md:p-10                
                rounded-2xl                    
                text-center                      
                transform transition-all duration-300 ease-in-out 
                hover:scale-105 hover:-translate-y-2 
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
                className="hover:text-blue-500
                bg-white
                 text-gray-800
                shadow-xl
                flex flex-col items-center justify-center
                p-6 sm:p-8 md:p-10
                rounded-2xl
                text-center
                transform transition-all duration-300 ease-in-out
                hover:scale-105  hover:-translate-y-2
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
                className="hover:text-blue-500
                bg-white
               text-gray-800
                shadow-xl
                flex flex-col items-center justify-center
                p-6 sm:p-8 md:p-10
                rounded-2xl
                text-center
                transform transition-all duration-300 ease-in-out
                hover:scale-105 hover:-translate-y-2
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
      <div className="max-w-full text-center bg-main w-full pb-12">
        <h1 className="font-bold md:text-4xl text-2xl">Exhibitor Profile</h1>
        <h2 className="md:text-3xl text-xl">7 Product Categories</h2>
        <CategoriesWhite></CategoriesWhite>
      </div>
    </section>
  );
};

export default Home;

import { Link } from "react-router";
import { homeData } from "../data/componentData";
import HealthAxisLogo1 from "../assets/HealthAxisLogo1.png";
import PPPLogo1 from "../assets/PPPLogo1.jpg";

const Footer = () => {
  return (
    <footer className="bg-main mt-12 py-12 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-12 md:gap-16">
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              PhysioLink Expo 2025
            </h1>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Ready to Exhibit with Us?
            </h2>
            {homeData.slice(0, 1).map((data) => (
              <Link
                to={data.link}
                key={data.link}
                className="hover:scale-105 hover:bg-main hover:-translate-y-2 duration-300 transform transistion-normal text-bold border-2 rounded-md sm:text-2xl text-sm md:px-12 px-2 py-1 md:py-4"
              >
                {data.content}
              </Link>
            ))}
          </div>
        </section>

        <hr className="w-full border-t-2 border-gray-300" />

        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Organised by
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-items-center sm:justify-items-start">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <img
                  className="h-16 w-auto mb-2"
                  src={HealthAxisLogo1}
                  alt="HealthX Axis Logo"
                />
                <h4 className="font-bold text-lg">HealthX Axis</h4>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <img
                  className="h-16 w-auto mb-2"
                  src={PPPLogo1}
                  alt="Malaysia Private Physiotherapy Association Logo"
                />
                <h4 className="font-bold text-lg">
                  Malaysia Private Physiotherapy Association
                </h4>
              </div>
            </div>
          </div>

          <div className="text-center md:text-end">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 underline decoration-2 underline-offset-4">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-2 text-lg md:text-xl">
              <p>
                Email:{" "}
                <a
                  className="hover:underline"
                >
                  healthxaxis@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a className="hover:underline">
                  016-2835562
                </a>
              </p>
              <p className="mt-2">Location: Shah Alam, Malaysia</p>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-300 mt-12 pt-8 text-center text-sm md:text-base text-gray-600">
        <p>&copy; 2025 PhysioLink Expo. All rights reserved.</p>
        <p>Managed by HealthX Axis.</p>
      </div>
    </footer>
  );
};

export default Footer;

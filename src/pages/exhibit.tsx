import { exhibitReason, visitorProfile } from "../data/componentData";
import { FaRegCheckSquare } from "react-icons/fa";
import ExhibitTalk1 from "../assets/ExhibitTalk1.png";
import NetworkSVG from "./svg";

const Exhibit = () => {
  return (
    <section>
      <div className="bg-main py-10 px-4 sm:px-8 md:py-16 md:px-12 lg:py-24 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24 items-start">
          <section className="flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
              Why <b className=" font-bold">Exhibit?</b>
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify md:text-left">
              As Malaysia’s leading expo dedicated to physio and rehab
              technologies, this event brings together private practice leaders,
              educators, and innovators under one roof.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify md:text-left">
              PhysioLink Expo is the #1 healthcare event for physiotherapists in
              the private sector. Engage with top minds in the global healthcare
              industry and unlock new opportunities for business growth.
            </p>
          </section>
          <section className="grid grid-cols-1 grid-rows-4 gap-6 md:gap-8">
            {exhibitReason.map((data, index) => (
              <span
                className="flex items-start gap-4 border-2 shadow-xl bg-main/80 rounded-xl hover:text-green-800 p-2 transform transistion-normal duration-300 hover:scale-105"
                key={index}
              >
                <FaRegCheckSquare className="text-2xl md:text-3xl lg:text-4xl mt-1 flex-shrink-0" />{" "}
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  {data.content}
                </p>
              </span>
            ))}
          </section>
        </div>
      </div>
      <div className="py-10 px-4 sm:px-8 md:py-16 md:px-12 lg:py-24 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-4">
            Visitor Profile
          </h1>
          <h3 className="text-xl sm:text-2xl lg:text-3xl text-center mb-10 text-gray-700">
            Meet key decision-makers and trade professionals including:
          </h3>
          <section
            className="
            grid
            grid-cols-1       
            sm:grid-cols-2    
            md:grid-cols-3    
            lg:grid-cols-4     
            gap-6              
          "
          >
            {visitorProfile.map((data, index) => (
              <span
                className="
                bg-main         
                py-4 px-6                   
                rounded-xl                   
                text-base md:text-lg lg:text-xl font-medium text-center 
                leading-tight
                transform transition-all duration-300 ease-in-out 
                hover:bg-main/80 hover:scale-105 hover:shadow-lg  
                cursor-pointer              
              "
                key={index}
              >
                {data.content}
              </span>
            ))}
          </section>
        </div>
      </div>
      <div className="py-12 px-4 sm:px-8 md:py-16 md:px-12 lg:py-24 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 md:gap-16 lg:gap-20">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center border-b-2 border-gray-300 pb-2">
            <div className="order-1 md:order-1 flex justify-center">
              <img
                src={ExhibitTalk1}
                alt="Exhibit talk image."
                className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg rounded-xl shadow-lg"
              />
            </div>
            <div className="order-2 md:order-2 flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-gray-800">
                Product Talks
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                Showcase products & elevate your brand with a spotlight product
                talk, reaching a highly engaged audience eager for innovation.
              </p>
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center border-b-2 border-gray-300 pb-2">
            <div className="order-2 md:order-1 flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-gray-800">
                B2B Networking Opportunities
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                Connect with clinic owners, hospital professionals,
                physiotherapists, rehab product suppliers, and healthcare
                innovators from across Malaysia.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 mt-2">
                Reach your ideal audience via exclusive VIP match-making
                programs, fostering meaningful connections.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center text-blue-600">
              <NetworkSVG className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80" />{" "}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Exhibit;

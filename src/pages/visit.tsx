import { FaRegCheckSquare } from "react-icons/fa";
import { expoDetail, visitReason } from "../data/componentData";
import Categories from "../components/categories";
import HomeImageHandshake1 from "../assets/HomeImageHandshake1.png";
import VisitorHandshake2 from "../assets/VisitorHandshake2.png";

const Visit = () => {
  return (
    <section className="flex flex-col gap-24">
      <div className="bg-main py-10 px-4 sm:px-8 md:py-16 md:px-12 lg:py-24 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24 items-center">
          <section className="flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
              Why <b className="underline font-bold">Visit?</b>
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
            {visitReason.map((data, index) => (
              <span
                className="flex items-start gap-4 bg-secondary/80 rounded-2xl p-2 transform transistion-normal duration-300 hover:scale-105"
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
      <div className="max-w-7xl text-center self-center">
        <h1 className="font-bold md:text-4xl text-2xl">Exhibitor Profile</h1>
        <h2 className="md:text-3xl text-xl">7 Product Categories</h2>
        <Categories></Categories>
      </div>
      <div className="flex flex-col gap-6 bg-main p-4">
        <span className="grid lg:grid-cols-2 items-center justify-center gap-12">
          <img
            src={HomeImageHandshake1}
            alt="Handshake at expo"
            className="rounded-3xl opacity-70 w-full max-w-lg mx-auto lg:max-w-xl"
          />
          <h1 className="text-4xl text-center">
            What's on <b className="underline">PhysioLink Expo</b>?
          </h1>
        </span>
        <section className="px-4 py-8 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
            {expoDetail.map((data, index) => (
              <div
                key={index}
                className={`
                        shadow-xl bg-secondary/80 text-gray-800 p-12 rounded-2xl transform transistion-normal duration-300 hover:scale-105 hover:bg-secondary
                      col-span-1
                    `}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {data.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed">
                  {data.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="py-12 px-4 sm:px-8 md:py-16 md:px-12 lg:py-24 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <span className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-800">
              VIP Matchmaking Programme
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
              Connect with key decision-makers and qualified buyers through
              exclusive, pre-arranged meetings. Our program meticulously matches
              your objectives with the right contacts.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 mt-2">
              The VIP Matchmaking Programme ensures targeted networking, saving
              you time and maximizing business opportunities with efficient,
              high-value interactions.
            </p>
          </span>
          <div className="flex justify-center md:justify-end">
            <img
              src={VisitorHandshake2}
              alt="Visitor handshaking"
              className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg rounded-xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;

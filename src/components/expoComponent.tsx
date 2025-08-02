import { expoDetail } from "../data/componentData";

const ExpoComponent = () => {
  return (
    <section className="px-4 py-8 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
        {expoDetail.map((data, index) => (
          <div
            key={index} 
            className={`
                shadow-xl bg-main p-12 rounded-2xl transform transistion-normal duration-300 hover:bg-main/50 hover:scale-105
              ${
                index % 2 == 0 ? "md:col-start-2" : "" 
              }
              col-span-1
            `}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              {data.title}
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {data.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpoComponent;

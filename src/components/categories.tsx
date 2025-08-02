import { expoCategories } from "../data/componentData";

const Categories = () => {
  return (
    <section className="px-2 mt-6">
      <div className="hidden md:block">
        <div className="grid grid-cols-4 gap-4">
          {expoCategories.slice(0, 4).map((data, index) => (
            <span
              key={index}
              className={`shadow-xl rounded-xl p-5 hover:bg-main/60 hover:scale-105 transform transition duration-300 hover:-translate-y-2 bg-main  hover:text-gray-800`}
            >
              <p className="md:text-xl text-sm">{data.content}</p>
            </span>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <div className="grid grid-cols-3 gap-4 max-w-4xl">
            {expoCategories.slice(4, 7).map((data, index) => (
              <span
                key={index + 4} 
                className={`shadow-xl rounded-xl p-5 hover:bg-main/60 hover:scale-105 transform transition duration-300 hover:-translate-y-2 bg-main  hover:text-gray-800`}
              >
                <p className="md:text-xl text-sm">{data.content}</p>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-4">
          {expoCategories.map((data, index) => (
            <span
              key={index}
              className={`shadow-xl rounded-xl p-5 leading-relaxed  bg-main hover:bg-main/60 hover:scale-105 transform transition duration-300 hover:text-white`}
            >
              <p className="md:text-xl text-sm">{data.content}</p>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

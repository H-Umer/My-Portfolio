import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.jpg";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.png";
import bootImage from "../../public/bootImage.jpeg";
import tailwind from "../../public/tailwind.jpeg";
import SQL from "../../public/SQL.jpeg";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 3,
      logo: java,
      name: "React JS",
    },
    {
      id: 5,
      logo: oracle,
      name: "Mongo DB",
    },
    {
      id: 6,
      logo: spring,
      name: "Node JS",
    },
    {
      id: 7,
      logo: springBoot,
      name: "Expree JS",
    },
    {
      id: 8,
      logo: bootImage,
      name: "Bootstrap",
    },

  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[270px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;

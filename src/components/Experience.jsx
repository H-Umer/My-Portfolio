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
function Experience() {
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
    {
      id: 9,
      logo: tailwind,
      name: "Tailwind CSS",
    },
    {
      id: 10,
      logo: SQL,
      name: "SQL",
    },
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="  ">
          I've more than 6 months Experience in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;

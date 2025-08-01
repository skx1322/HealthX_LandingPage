import { Link } from "react-router";
import LogoFull1 from "../assets/LogoFull1.png";
const Header = () => {
  const headerData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Exhibit",
      link: "/exhibit",
    },
    {
      title: "Visit",
      link: "/visit",
    },
  ];

  return (
    <header>
      <div>
        <span>
            <img src={LogoFull1} alt="LogoFull1" />
        </span>
      </div>
      <div>
        <section>
          {headerData.map((data, index) => (
            <Link to={data.link} key={index}>
              {data.title}
            </Link>
          ))}
        </section>
      </div>
    </header>
  );
};

export default Header;

import { useContext } from "react";
import { AppContext } from "../../context/context";
import Icon from "../../utils/IconChoice";
import { strings } from "../../utils/strings";
import smartwatch from "../../assets/smartwatchimg.png";

const Home = () => {
  const { language } = useContext(AppContext);

  return (
    <div className="custom-gradient w-screen h-screen overflow-hidden">
      {/* Header Container */}
      <div className="flex flex-row align-center justify-center gap-2 pt-7 justify-around">
        {/* Logo */}
        <div className="flex">
          <Icon name="smartwatch" />
          <h2>SmartShop</h2>
        </div>
        {/* Links */}
        <ul className="flex flex-row align-center gap-7">
          <li>Home</li>
          <li>Produtos</li>
          <li>Contato</li>
          <li>Sobre</li>
        </ul>
        {/* Icons */}
        <ul className="flex flex-row align-center gap-2">
          <li>
            <Icon name="user" />
          </li>
          <li>
            <Icon name="search" />
          </li>
          <li>
            <Icon name="cart" />
          </li>
        </ul>
      </div>

    {/* Landing page info */}
      <div className="flex flex-col h-screen">
        <div className="flex md:flex-col lg:flex-row gap-x-10 w-screen h-full justify-center justify-self-center p-5">
          <div className="flex align-center justify-center flex-col gap-y-5">
            <h1 className="sm:self-center lg:self-start sm:text-4xl lg:text-6xl sm:max-w-5xl lg:max-w-xl">{strings.mainText[language]}</h1>
            <p className="sm:self-center lg:self-start ml-0.5 text-[#8B8E99] max-w-xl text-sm">
              {strings.subText[language]}
            </p>
          </div>
          <img src={smartwatch} className="max-w-md self-center" style={{ height: 564 }}/>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { AppContext } from "../../context/context";
import Icon from "../../utils/IconChoice";
import { strings } from "../../utils/strings";
import smartwatch from "../../assets/smartwatchimg.png";
import "./style.css";
import { Divide } from "hamburger-react";
import Navbar, { navDirection } from "../../components/Navbar";
import { HOME_NAV_ICONS, HOME_NAV_LABELS } from "../../utils/consts";

const Home = () => {
  const { language } = React.useContext(AppContext);
  const [shownMenu, setShownMenu] = React.useState(false);

  return (
    <div className="custom-gradient w-screen h-screen overflow-hidden">
      <div className={`sm:flex md:hidden ${shownMenu ? "bg-neutral-700" : ""} justify-between items-center`}>
        <h2>SmartShop</h2>
        <Divide duration={0.8} onToggle={() => setShownMenu(!shownMenu)} />
          <div className={`${shownMenu ? "flex" : "hidden"} flex-col bg-neutral-700 w-screen h-screen opacity-95	absolute top-10 p-2`}>
            <Navbar direction={navDirection.COLUMN} navbarItem={HOME_NAV_LABELS}/>
            {/* User section */}
            <Navbar direction={navDirection.ROW} navbarItem={HOME_NAV_ICONS}/>
          </div>
      </div>
      {/* Header Container */}
      <div className="sm:hidden md:flex flex-row align-center justify-center gap-2 pt-7 justify-around">
        {/* Logo */}
        <div className="flex">
          <Icon name="smartwatch" />
          <h2>SmartShop</h2>
        </div>
        {/* Links */}
        <Navbar direction={navDirection.ROW} navbarItem={HOME_NAV_LABELS}/>
        {/* Icons */}
        <Navbar direction={navDirection.ROW} navbarItem={HOME_NAV_ICONS}/>
      </div>

      {/* Landing page info */}
      <div className="flex flex-col h-screen">
        <div className="flex sm:flex-col lg:flex-row gap-x-10 w-screen h-full justify-center justify-self-center p-5">
          <div className="flex align-center justify-center flex-col gap-y-5">
            <h1 className="sm:self-center lg:self-start sm:text-4xl lg:text-6xl sm:max-w-5xl lg:max-w-xl">
              {strings.mainText[language]}
            </h1>
            <p className="sm:self-center lg:self-start ml-0.5 text-[#8B8E99] max-w-xl text-sm">
              {strings.subText[language]}
            </p>
          </div>
          <img
            src={smartwatch}
            className="md:max-w-[115rem] sm:max-w-[16rem] self-center sm:max-h-[30rem] md:max-h-[140rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

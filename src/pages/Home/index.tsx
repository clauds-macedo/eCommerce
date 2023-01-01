import React from "react";

// Utils
import { strings } from "../../utils/strings";
import { HOME_NAV_ICONS, HOME_NAV_LABELS } from "../../utils/consts";
import { AppContext } from "../../context/context";

// Assets
import smartwatch from "../../assets/smartwatchimg.png";
import "./style.css";

// Components
import Icon from "../../utils/IconChoice";
import Navbar, { navDirection } from "../../components/Navbar";
import { Button } from "@chakra-ui/react";
import { Divide } from "hamburger-react";

const Home = () => {
  const { language } = React.useContext(AppContext);
  const [shownMenu, setShownMenu] = React.useState(false);

  return (
    <div className="custom-gradient w-screen h-screen overflow-x-hidden md:overflow-hidden">
      <div className={`sm:flex md:hidden ${shownMenu ? "bg-neutral-700" : ""}`}>
        <div className="flex justify-between items-center w-full px-2">
          <h2>SmartShop</h2>
          <Divide duration={0.8} onToggle={() => setShownMenu(!shownMenu)} />
        </div>
        <div
          className={`${
            shownMenu ? "flex" : "hidden"
          } flex-col bg-neutral-700 w-screen h-screen opacity-95 absolute top-10 p-4 mb-2 space-y-8`}
        >
          <Navbar
            direction={navDirection.COLUMN}
            navbarItem={HOME_NAV_LABELS}
          />
          {/* User section */}
          <Navbar direction={navDirection.ROW} navbarItem={HOME_NAV_ICONS} />
        </div>
      </div>
      {/* Header Container */}
      <div className="sm:hidden md:flex flex-row align-center justify-center gap-2 pt-7 justify-around">
        {/* Logo */}
        <div className="flex">
          <Icon name="smartwatch" />
          <h2 className="text-slate-50">SmartShop</h2>
        </div>
        {/* Links */}
        <Navbar direction={navDirection.ROW} navbarItem={HOME_NAV_LABELS} />
        {/* Icons */}
        <Navbar direction={navDirection.ROW} navbarItem={HOME_NAV_ICONS} />
      </div>

      {/* Landing page info */}
      <div className="flex flex-col h-screen">
        <div className="flex sm:flex-col lg:flex-row gap-x-10 w-screen h-full justify-center justify-self-center p-5">
          <div className="flex align-center justify-center flex-col gap-y-5 sm:w-xl">
            <h1 className="sm:self-center lg:self-start sm:text-3xl lg:text-6xl sm:max-w-5xl lg:max-w-xl font-bold text-slate-200">
              {strings.mainText[language]}
            </h1>
            <p className="sm:self-center lg:self-start ml-0.5 text-[#8B8E99] max-w-xl text-sm">
              {strings.subText[language]}
            </p>
            <div className="lg:w-full sm:w-80 sm:self-center mb-8">
              <Button
                borderColor={"white"}
                variant="outline"
                _hover={{ borderColor: "#B5B9C7", transform: "scale(1.02)" }}
                transition="all .25s ease"
                width={"100%"}
                opacity={shownMenu ? "0.05" : "1"}
              >
                {strings.readMore[language]}
              </Button>
            </div>
          </div>
          <img
            src={smartwatch}
            className="2xl:max-w-[115rem] lg:max-w-[25rem] sm:max-w-[16rem] self-center sm:max-h-[30rem] md:max-h-[140rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

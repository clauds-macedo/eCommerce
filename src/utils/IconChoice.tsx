import Smartwatch from "../assets/Smartwatch";
import { User as PhosphorUser, ShoppingCart, MagnifyingGlass } from "phosphor-react";
import { IconProps } from "phosphor-react/dist/lib/";
const defaultStyling = {
    width: 24,
    height: 24,
    cursor: "pointer",
    color: "white"
}

interface IconChoiceProps {
    name: string,
    iconProps?: IconProps
}

const Icon = ({ name, iconProps }: IconChoiceProps) => {
    const icons: {[key: string]: JSX.Element} = {
        smartwatch: <Smartwatch/>,
        user: <PhosphorUser {...defaultStyling} />,
        search: <MagnifyingGlass {...defaultStyling} />,
        cart: <ShoppingCart {...defaultStyling} />
    }
    if (!(name in icons)) return <></>
    return icons[name];
}

export default Icon;
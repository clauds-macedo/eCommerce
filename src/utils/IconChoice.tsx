import Smartwatch from "../assets/Smartwatch";
import User from "../assets/User";
import Search from "../assets/Search";
import Cart from "../assets/Cart";
import { User as PhosphorUser, ShoppingCart, MagnifyingGlass } from "phosphor-react";

const defaultStyling = {
    width: 24,
    height: 24,
    cursor: "pointer"
}

const icons: {[key: string]: JSX.Element} = {
    smartwatch: <Smartwatch/>,
    user: <PhosphorUser {...defaultStyling} />,
    search: <MagnifyingGlass {...defaultStyling} />,
    cart: <ShoppingCart {...defaultStyling} />
}

const Icon = (props: { name: string }) => {
    console.log(icons[props.name])
    if (!(props.name in icons)) return <></>
    return icons[props.name];
}

export default Icon;
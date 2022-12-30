import Icon from "../../utils/IconChoice";

const Home = () => {
    return (
        <div className="custom-gradient w-screen h-screen">
            {/* Container do Header */}
            <div className="flex flex-row align-center justify-center gap-2 pt-7 space-x-96">
                {/* Logo */}
                <div className="flex">
                    <Icon name="smartwatch"/>
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
                    <li><Icon name="user"/></li>
                    <li><Icon name="search"/></li>
                    <li><Icon name="cart"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Home;
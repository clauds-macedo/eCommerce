import React from "react";
import {Smartwatch} from '../../assets/Smartwatch';

const Home = () => {
    return (
        <div className="custom-gradient w-screen h-screen">
            {/* Container do Header */}
            <div className="flex flex-row align-center justify-center gap-2 pt-7 space-x-96">
                {/* Logo */}
                <div className="flex">
                    <Smartwatch/>
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
                    <li>Buscar</li>
                    <li>Perfil</li>
                    <li>Carrinhunnn</li>
                </ul>
            </div>
        </div>
    )
}

export default Home;
import React from "react";
import NavbarPrincipal from "./components/navbar";
import SideMenu from "./components/sidemenu";
import PerfilUsuario from "./components/perfil";


function Perfil (){
    return (
        <div>
            <NavbarPrincipal/>
            <SideMenu/>
            <PerfilUsuario/>

        </div>
     
    );

    }
export default Perfil;
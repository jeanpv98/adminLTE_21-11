import React from "react";
import NavBarPrincipal from "./components/navbar";
import SideMenu from "./components/sidemenu";
import ListaUsuarios from "./components/userlist";

function Usuarios() {
    return (
        <div>
            <NavBarPrincipal/>
            <SideMenu/>
            <ListaUsuarios/>

            
        </div>
    );
}

export default Usuarios;
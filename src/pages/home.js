import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import Kpis from './components/kpis'

function HomePrincipal() {
    return (
        <div>
            <NavBarPrincipal/>
            <SideMenu/>
            <Kpis/>
        </div>
    );
}

export default HomePrincipal;
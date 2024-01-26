import React from 'react';
import {Outlet} from "react-router-dom";

import {HeaderContainer} from "../../components";

const MainLayout = () => {
    return (
        <div>
            <HeaderContainer/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
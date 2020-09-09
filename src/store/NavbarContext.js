import React, { useState, useContext } from 'react';

const NavbarContext = React.createContext();
const NavbarUpdateContext = React.createContext();

export function useNavbarStyle() {
    return useContext(NavbarContext);
}

export function useToggleNavbarStyle() {
    return useContext(NavbarUpdateContext);
}

export function NavbarProvider({children}) {

    const [navigationToggle, setNavigationToggle] = useState(false);

    function toggleNav() {
        setNavigationToggle(prevValue => !prevValue);
    }

    return(
        <NavbarContext.Provider value={navigationToggle}>
            <NavbarUpdateContext.Provider value={toggleNav}>
                {children}
            </NavbarUpdateContext.Provider>
        </NavbarContext.Provider>
    )
}
import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

import classes from "./Toolbar.module.scss";

const toolbar = (props) => {
   return (
      <header className={classes.header}>
         <DrawerToggle clicked={props.drawerToggleClicked} />
         <div className={classes.Logo}>
            <Logo />
         </div>
         <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} />
         </nav>
      </header>
   );
};

export default toolbar;

import React from "react";
import burgerLogo from "../../assets/svg/logo.svg";
import classes from "./Logo.module.scss";

const logo = (props) => {
   return (
      <div className={classes.Logo} style={{height: props.height}}>
         <img src={burgerLogo} alt="McReact" />
      </div>
   );
};

export default logo;

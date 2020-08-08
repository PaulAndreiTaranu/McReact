import React from "react";
import classes from "./BuildControl.module.scss";

const buildControl = (props) => {
   return (
      <div className={classes.BuildControl}>
         <label className={classes.label}>{props.label}</label>
         <button className={[classes.btn, classes.btn__sub].join(" ")} onClick={props.removed} disabled={props.disabled}>
            Less
         </button>
         <button className={[classes.btn, classes.btn__add].join(" ")} onClick={props.added}>
            More
         </button>
      </div>
   );
};

export default buildControl;

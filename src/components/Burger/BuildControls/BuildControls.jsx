import React from "react";
import classes from "./BuildControls.module.scss";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
   { label: "Salad", type: "salad" },
   { label: "Bacon", type: "bacon" },
   { label: "Cheese", type: "cheese" },
   { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
   return (
      <div className={classes.container}>
         <div className={classes.BuildControls}>
            <p className={classes.currentPrice}>
               Current price: <strong>${props.price.toFixed(2)}</strong>
            </p>
            <div>
               {controls.map((control) => (
                  <BuildControl
                     key={control.label}
                     label={control.label}
                     added={() => props.ingredientAdded(control.type)}
                     removed={() => props.ingredientRemoved(control.type)}
                     disabled={props.disabled[control.type]}
                  />
               ))}
            </div>
            <button className={classes.orderButton} disabled={!props.purchasable} onClick={props.ordered}>
               {props.isAuth ? "ORDER NOW" : "SIGN IN TO ORDER"}
            </button>
         </div>
      </div>
   );
};

export default buildControls;

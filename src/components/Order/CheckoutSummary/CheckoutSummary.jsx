import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.scss";

const checkoutSummary = (props) => {
   return (
      <div className={classes.CheckoutSummary}>
         <h1>Your burger!</h1>
         <div style={{ width: "100%", margin: "auto", marginTop: "4vh" }}>
            <Burger ingredients={props.ingredients} />
         </div>
         <Button btnType="Danger" clicked={props.checkoutCancelled}>
            Cancer
         </Button>
         <Button btnType="Success" clicked={props.checkoutContinued}>
            Continue
         </Button>
      </div>
   );
};

export default checkoutSummary;

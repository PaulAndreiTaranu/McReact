import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
   componentWillUpdate() {}

   render() {
      const ingredientSummary = Object.keys(this.props.ingredients).map((ingKey) => {
         return (
            <li key={ingKey}>
               <span style={{ textTransform: "capitalize" }}>{ingKey}</span>: {this.props.ingredients[ingKey]}
            </li>
         );
      });

      return (
         <Aux>
            <h3>Your Order</h3>
            <p>Burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>
               <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
            </p>
            <p>Continue to Checkout?</p>
            <div>
               <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
                  CANCEL
               </Button>
               <Button btnType="Success" clicked={this.props.purchaseContinued}>
                  CONTINUE
               </Button>
            </div>
         </Aux>
      );
   }
}

export default OrderSummary;

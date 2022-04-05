import React, { Component } from 'react'
import Phone from './Phone'
import "semantic-ui-css/semantic.min.css";
import { DropTarget } from 'react-dnd'
import { ItemTypes } from './Constants'
import DisplayPhone from "./DisplayPhone";


class ShoppingCart extends Component{

    render(){
      // DnD Spec
      let ShoppingCartSpec = {
        drop() {
          return { name: "ShoppingCart" };
        },
      };
      // DnD DropTarget - collect
      let collect = (connect, monitor) => {
        return {
          connectDropTarget: connect.dropTarget(),
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        };
      };

      return (
        <div className="shopping-cart">
          <Phone name="Test_Phone" />
        </div>
      );
    }
}

export default ShoppingCart;

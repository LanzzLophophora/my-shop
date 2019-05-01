import React, { Component } from 'react';
import ProductItem from "./ProductItem";

class ShoppingCart extends Component {
    renderItem = (item) => {
        const { handleAddItem } = this.props;

        return (
            <ProductItem
                key={item.id}
                item={item}
                addToShoppingCart={handleAddItem}
            />
        )
    };

    render() {
        const { shoppingCart } = this.props;
        return (

            <div>
                Hello! It is your shoppingCart!
                {shoppingCart.map(this.renderItem)}
            </div>
        )
    }
}

export default ShoppingCart;
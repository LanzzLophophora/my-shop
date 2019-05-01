import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {

    addItemButton = () => {
        const { addToShoppingCart, item } = this.props;
        addToShoppingCart(item)
    };

    render() {
        const { cost, title, description, id, } = this.props.item;

        return (
            <div className={"item"}>
                <h2>Название: {<Link to={`/posts/${id}`} > {title} </Link>}</h2>
                <p>Описание товара: {description}</p>
                <span>Цена: {cost} </span>
                <button onClick={this.addItemButton}>Add to shopping cart</button>
            </div>
        )
    }
}
export default ProductItem;
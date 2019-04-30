import React, { Component } from "react";

class PostItem extends Component {

    addItemButton = () => {
        const { addToShoppingCart, post } = this.props;
        addToShoppingCart(post)
    };

    render() {
        const { cost, title, description } = this.props.post;

        return (
            <div className={"item"}>
                <h2>Название: {title}</h2>
                <p>Описание товара: {description}</p>
                <span>Цена: {cost} </span>
                <button onClick={this.addItemButton}>Add to shopping cart</button>
            </div>
        )
    }
}
export default PostItem;
import React, { Component } from "react";

import ProductItem from "./ProductItem";

class ProductList extends Component {

    addItem = item => {
        const { handleAddItem }= this.props;
        handleAddItem(item)
    };

    renderItem = (item) => (
        <ProductItem
            key={item.id}
            item={item}
            addToShoppingCart={this.addItem}
        />
    );

    render() {
        const { items, error } = this.props;

        return (
            <div className="posts">
                {error && <h2>{error}</h2>}
                <div className="post-list">
                    {items.map(this.renderItem)}
                </div>
            </div>
        );
    }
}

export default ProductList;
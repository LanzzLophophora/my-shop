import React, {Component} from 'react';
import ProductList from "./ProductList";
import {Route, Switch} from "react-router";
import ShoppingCart from "./ShoppingCart";
import {OneItem} from "./index";

class Home extends Component {

    state = {
        shoppingCart: [],
        items: [],
        error: ""
    };

    sendRequest() {
        const url = "../products.json";
        const request = {
            method: "GET",
        };
        const requestHandler = (resolve, reject) => {
            fetch(url, request)
                .then(response => {
                    const errorStatus = 300;
                    if (response.status < errorStatus) {
                        return response.json();
                    }
                    throw new Error("Server error");
                })
                .then(data => resolve(data))
                .catch(error => reject(error.message))
        };
        return new Promise(requestHandler);
    };

    addToShoppingCart = item => {
        const newShoppingCart = [...this.state.shoppingCart];
        newShoppingCart.push(item);
        this.setState({
            shoppingCart: newShoppingCart
        });
        console.log("added!");
    };

    clearShoppingCart = () => {
        this.setState({
            shoppingCart: []
        });
        console.log("ShoppingCart is empty");
    };

    componentDidMount() {
        this.sendRequest()
            .then(items => {
                this.setState({
                        items
                    }
                );
            })
            .catch(error => this.setState({
                error
            }));
    }

    render() {
        const {items, error, shoppingCart} = this.state;
        return (
            <div>
                <div className={"shoppingCart"}>
                    В корзине сейчас {shoppingCart.length ? shoppingCart.length  : "нет" } предметов
                    <button onClick={this.clearShoppingCart}>Clear Shoping Cart!</button>
                </div>

                <Switch>
                    <Route
                        exact path="/posts"
                        render={() => <ProductList
                            items={items}
                            error={error}
                            handleAddItem={this.addToShoppingCart}
                        />}
                        // component={ Home }
                    />

                    <Route
                        exact path="/cart"
                        render={() => <ShoppingCart
                            shoppingCart={ shoppingCart }
                            handleAddItem={this.addToShoppingCart}
                        />}
                        // component={ ShoppingCart }
                    />

                    <Route
                        exact path="/posts/:id"
                        component={ OneItem }
                    />

                </Switch>

                {/*<ProductList*/}
                    {/*items={items}*/}
                    {/*error={error}*/}
                    {/*handleAddItem={this.addToShoppingCart}*/}
                {/*/>*/}
            </div>
        )
    }
}


export default Home;
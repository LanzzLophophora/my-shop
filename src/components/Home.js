import React, { Component } from 'react';
// import {Switch, Route} from 'react-router-dom';
import { HashRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";
// import App from '/App';


class Main extends Component {

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
                })//возвращать данные только тогда, когда код ответа меньше 300
                .then(data => resolve(data))
                .catch(error => reject(error.message)) // в ином случае throw new Error
        };
        return new Promise(requestHandler);
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
                console.log("THRN");
            })
            .catch(error => this.setState({
                error
            }));
    }

    addToShoppingCart = item => {
        console.log(item);

        const newShoppingCart =  [ ...this.state.shoppingCart ];
        newShoppingCart.push(item);
        this.setState({
            shoppingCart: newShoppingCart
        });
        console.log("added!");
        // console.log(this.state.shoppingCart);
    };



    render() {
        const  { items, error, shoppingCart } = this.state;
        return (
            <main>
                <ProductList />

                {/*<Switch>*/}
                    {/*<Route*/}
                        {/*exact path='/'*/}
                        {/*render={ () =>*/}
                            {/*<Products*/}
                                {/*items={items}*/}
                                {/*error={error}*/}
                            {/*/>*/}
                        {/*}*/}
                    {/*/>*/}
                    {/*/!*<Route path='/roster' component={Roster}/>*!/*/}
                    {/*/!*<Route path='/schedule' component={Schedule}/>*!/*/}
                    {/*/!*<Route path="/products" component={Products}/>*!/*/}
                    {/*/!*<Route path="/products/:id" component={Product} />*!/*/}
                    {/*<Route*/}
                        {/*path="/ShoppingCart"*/}
                        {/*render={*/}
                            {/*() =>*/}
                                {/*<ShoppingCart*/}
                                    {/*shoppingCart={shoppingCart}*/}
                                {/*/>*/}
                        {/*}*/}
                    {/*/>*/}
                    {/*<Redirect from="/" to="/products" />*/}
                {/*</Switch>*/}
            </main>
        )
    }
}


export default Main;
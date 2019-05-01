import React, { Component } from "react";

import { Navbar, Home, OneItem } from "./components";

import {Switch, Route, BrowserRouter} from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="header">
                        <Navbar />
                    </header>

                    <main>

                        <Home/>
                        {/*<Switch>*/}
                            {/*<Route*/}
                                {/*exact path="/"*/}
                                {/*component={ Home }*/}
                            {/*/>*/}

                            {/*<Route*/}
                                {/*exact path="/cart"*/}
                                {/*component={ ShoppingCart }*/}
                            {/*/>*/}

                            {/*<Route*/}
                                {/*exact path="/:id"*/}
                                {/*component={ OneItem }*/}
                            {/*/>*/}

                        {/*</Switch>*/}
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

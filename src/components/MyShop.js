import React from "react";

import {api, config} from "../api";
import Header from "./Header";
import CreatePostForm from "./CreatePostForm";
import PostItem from "./PostItem";

class MyShop extends React.Component {

    state = {
        shoppingCart: [],
        items: JSON.parse(localStorage.getItem('items')) || [],
        error: ""
    };

    sendRequest() {
        const url = "./products.json";
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

    componentDidMount() {
        if (!localStorage.getItem('items')) {
            this.sendRequest()
                .then(items => {
                    this.setState({
                            items
                        }
                    );
                    localStorage.setItem('items', JSON.stringify(items))
                })
                .catch(error => this.setState({
                    error
                }));
        }
    };

    appendPost = post => {
        const {posts} = this.state;
        const newPost = {...post};

        newPost.id = posts.length + 1;

        const newPosts = [...posts, newPost];

        this.setState({
            posts: newPosts
        }, () => {
            localStorage.setItem('posts', JSON.stringify(newPosts));
            console.log("LS were update");
        });
    };

    addToShoppingCart = post => {
        console.log(post);

        const newShoppingCart = this.state.shoppingCart;
        newShoppingCart.push(post);
        this.setState({
            shoppingCart: newShoppingCart
        });
        console.log("added!");
        console.log(this.state.shoppingCart);
    };

    clearShopingCart = () => {
        this.setState({
            shoppingCart: []
        });
        console.log("Trash is empty");
        console.log(this.state.shoppingCart);
    };

    renderPost = (post) => (
        <PostItem
            key={post.id}
            post={post}
            addToShoppingCart={this.addToShoppingCart}
        />
    );

    // handleSubmit = (post, onSuccess, onFail) => {
    //   const postRequest = api.post(config);
    //
    //   postRequest('/posts', post)
    //     .then(response => {
    //       this.appendPost(response);
    //       onSuccess && onSuccess(response);
    //     })
    //     .catch(error => {
    //       this.setState({
    //         error
    //       });
    //       onFail && onFail(error);
    //     });
    // };

    render() {
        const {items, error, shoppingCart} = this.state;

        console.log(items);
        console.log(typeof items);

        return (
            <div className="posts">
                <Header shoppingCart={shoppingCart}/>
                {/*<CreatePostForm onSubmit={this.handleSubmit} />*/}
                {error && <h2>{error}</h2>}
                <div className="post-list">
                    {items.map(this.renderPost)}
                </div>
                <button onClick={this.clearShopingCart}>Clear Shoping Cart!</button>
            </div>
        );
    }
}

export default MyShop;

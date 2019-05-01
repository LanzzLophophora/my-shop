import React from "react";

class OneItem extends React.Component{
    render() {
        // const { cost, title, description, id } = this.props.post;

        return (
            <div className={"item"}>

                One Item!~

                {/*<h2>Название: {<Link to="/:id" > {title} </Link>}</h2>*/}
                {/*<p>Описание товара: {description}</p>*/}
                {/*<span>Цена: {cost} </span>*/}
                {/*<button onClick={this.addItemButton}>Add to shopping cart</button>*/}
            </div>
        )
    }
}

export default OneItem;
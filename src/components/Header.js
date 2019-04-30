import React from "react";

class Header extends React.Component {

  render() {
    const { shoppingCart } = this.props;
    return (
      <header className={"header"}>
        <div className={"shoppingCart"}>
          В корзине сейчас {shoppingCart.length ? shoppingCart.length  : "нет" } предметов
        </div>
      </header>
    )

  }
}

export default Header;
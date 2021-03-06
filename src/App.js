import React from "react";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";
//import data from "./data.json";
import store from "./store";

class App extends React.Component {
  /* constructor() {
    super();
    this.state = {
      //products: data.products,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      //name: data.name,
      //price: data.price,
      //genre: "",
      //sort: "",
    };
  } */

  /* createOrder = (order) => {
    alert("Need to save order for " + order.name);
  }; */

  /* removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x.id !== product.id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x.id !== product.id))
    );
  }; */

  /* addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }; */

  /* sortProducts = (event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a.id < b.id
            ? 1
            : -1
        ),
    }));
  }; */

  /* filterProducts = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ genre: event.target.value, products: data.products });
    } else {
      this.setState({
        genre: event.target.value,
        products: data.products.filter(
          (product) => product.genre.indexOf(event.target.value) >= 0
        ),
      });
    }
  }; */

  render() {
    return (
      <Provider store={store}>

        <div className="grid-container">
          <header>
            <a className="font-red" href="/">
              React Shopping Cart
            </a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter />
                <Products />
              </div>
              <div className="sidebar">
                <Cart/>
              </div>
            </div>
          </main>
          <footer>All right is reserved.</footer>
        </div>
      </Provider>
    );
  }
}

export default App;

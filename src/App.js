// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const nayoks = ["faysal", "shuvo", "islam", "Nil", "ima"];
  const products = [
    { name: "Photoshop", price: "$99.99" },
    { name: "Illustrator", price: "$23.23" },
    { name: "Reader", price: "$3.23" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>Learning React</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {nayoks.map((nayok) => (
            <li>{nayok}</li>
          ))}
          {products.map((pro) => (
            <li>{pro.name}</li>
          ))}
        </ul>

        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Product(props) {
  const { name, price } = props.product;
  const productStyle = {
    border: "3px solid salmon",
    borderRadius: "10px",
    backgroundColor: "gray",
    height: "225px",
    width: "300px",
    float: "left",
    margin: "10px",
  };

  return (
    <div style={productStyle}>
      <h3>{name} </h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
}

export default App;

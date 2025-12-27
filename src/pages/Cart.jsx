import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2>Cart is empty</h2>;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <p>{item.title}</p>
          <p>₹ {item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹ {total}</h3>

      <button
        onClick={() => alert("Checkout successful (mock)")}
        style={{ marginTop: "10px" }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;

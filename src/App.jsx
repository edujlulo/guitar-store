import { useState } from "react";
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import "./App.css";
import { db } from "./data/db";

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  // Function for add guitars to cart

  function addGuitarToCart(guitar) {
    setCart((currentCart) => {
      const existing = currentCart.find((g) => g.id === guitar.id);

      if (existing) {
        return currentCart.map((g) =>
          g.id === guitar.id ? { ...g, quantity: g.quantity + 1 } : g
        );
      }

      return [...currentCart, { ...guitar, quantity: 1 }];
    });
  }

  // Function for decrease quantity in cart

  function decreaseQuantity(guitarId) {
    setCart((currentCart) =>
      currentCart
        .map((g) =>
          g.id === guitarId ? { ...g, quantity: g.quantity - 1 } : g
        )
        .filter((g) => g.quantity > 0)
    );
  }

  // Function for increase quantity in cart

  function increaseQuantity(guitarId) {
    setCart((currentCart) =>
      currentCart.map((g) =>
        g.id === guitarId ? { ...g, quantity: g.quantity + 1 } : g
      )
    );
  }

  // Function for delete guitar in cart

  function removeFromCart(guitarId) {
    setCart((currentCart) => currentCart.filter((g) => g.id !== guitarId));
  }

  // Function for empty cart

  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <Header
        cart={cart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Our colection</h2>

        <div className="row mt-5">
          {data.map((guitar) => {
            return (
              <Guitar
                key={guitar.id}
                guitar={guitar}
                addGuitarToCart={addGuitarToCart}
              />
            );
          })}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

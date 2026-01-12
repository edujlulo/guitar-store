import CartGuitar from "./CartGuitar";

export default function Header({
  cart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  clearCart,
}) {
  const totalToPay = cart.reduce((acc, g) => acc + g.price * g.quantity, 0);

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="./public/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="./public/img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                {cart.length === 0 ? (
                  <p className="text-center fw-bold">The cart is empty</p>
                ) : (
                  <table className="w-100 table">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((guitar) => (
                        <CartGuitar
                          key={guitar.id}
                          guitar={guitar}
                          decreaseQuantity={decreaseQuantity}
                          increaseQuantity={increaseQuantity}
                          removeFromCart={removeFromCart}
                        />
                      ))}
                    </tbody>
                  </table>
                )}

                <p className="text-end">
                  Total to pay: <span className="fw-bold">${totalToPay}</span>
                </p>
                <button
                  className="btn btn-dark w-100 mt-3 p-2"
                  onClick={() => clearCart()}
                >
                  Empty Cart
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

import React from "react";
import { Link, useRoutes } from "react-router-dom";
import routes from "./routes/routes";

export default function App() {
  const content = useRoutes(routes);
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="user">User</Link>
        <Link to="cart">Cart</Link>
      </nav>

      {content}
    </div>
  );
}

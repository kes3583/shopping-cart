import React from "react";
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>layout</h1>

      <Outlet />
    </div>
  );
}

export { Layout };

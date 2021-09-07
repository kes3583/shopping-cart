import React, { useState, useCallback }from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";
import { Nav } from './pages';
import { Drawer } from './components/Drawer';

export default function App() {
  const content = useRoutes(routes);
  const [drawerToggle, setDrawerToggle] = useState(false);
  
  const onToggleDrawer = useCallback(() =>{
    setDrawerToggle(!drawerToggle);
  },[drawerToggle])


  return (
    <div> 
      <Nav onToggleDrawer={onToggleDrawer}/>
      <Drawer show={drawerToggle} onToggleDrawer={onToggleDrawer} />      
      {content}
    </div>
  );
}

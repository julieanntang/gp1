import React from "react";
import { Link } from "react-router-dom";
import {Button, Menu} from 'semantic-ui-react'
const NavBar = () => {
  return (
    <Menu>
      <Link to="/"><Menu.Item name='home'/></Link>
      <Link to="/leagues"><Menu.Item name='Leagues'/></Link>
    </Menu>
    )
  }

export default NavBar;
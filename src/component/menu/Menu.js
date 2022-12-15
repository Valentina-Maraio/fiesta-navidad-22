import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./style/Menu.css";

const Menu = () => {
  return (
    <>
      <Nav className="justify-content-end menu" activeKey="/">
        <Nav.Item>
          <Nav.Link>
            <Link className="home_link" to="/">Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className="menu_link" to="/food">Menu</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className="friends_link" to="/friends">Friends</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className="activities_link" to="/activities">Activities</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Menu;

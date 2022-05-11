import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
// import { faClose } from "@fortawesome/free-solid-svg-icons";}
import { IconButton } from '@mui/material';
import { ExitToApp } from '@material-ui/icons'


import { Link } from "react-router-dom";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <Navbar
      // color="warning"
      //  light
      className="navbar-dark  p-3 mb-4 "
      expand="md"
    >
      <Button className="btnfabars"  color="dark" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse className="collapse" isOpen={topbarIsOpen} navbar>
        <Nav className="ml-auto" navbar>
          
          {/* <NavItem >
            <NavLink tag={Link} to={"/page-1"}>
              Page 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-2"}>
              page 2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-3"}>
              page 3
            </NavLink>
          </NavItem> */}
          <NavItem className="cerrarsesion" >
            <NavLink tag={Link} to={"/home"}>

              <IconButton className="buton"
                color="inherit"
                onClick={"/login"}
                // variant="text"
                // style={{  clicked: { color: "red" } }}

              >

                <Link className="logout" to={"/login"}>


                  <ExitToApp  className="icon" />

                  Cerrar Sesión
                </Link>
              </IconButton >

            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Topbar;

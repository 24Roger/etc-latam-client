import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faWrench,
  faLock,
faHandsClapping,
faList,
faInfo

} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "../Sidebar/SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <NavLink tag={Link} to={"/Dashboard"}>
        <h3 >ETC LATAM</h3>
      </NavLink>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink className="mr-2" tag={Link} to={"/Home"}>
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </NavLink>
        </NavItem>

        <SubMenu title="Administración " icon={faWrench} items={submenus[0]} />
        {/* <NavItem>
          <NavLink tag={Link} to={"/about"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2 " />
            About
          </NavLink>
        </NavItem> */}
        <SubMenu title="Seguridad" icon={faLock} items={submenus[1]} />
        <SubMenu title="Clientes/Parqueos" icon={faHandsClapping} items={submenus[1]} />
        <SubMenu title="Gestion de Tickets" icon={faList} items={submenus[1]} />
        <SubMenu title="Informes" icon={faInfo} items={submenus[1]} />

        <NavItem>


          <NavLink className="mr-2" tag={Link} to={"/Home"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="mr-2" tag={Link} to={"/faq"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="mr-2" tag={Link} to={"/contact"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [

  [
    {
      title: "Dashboard",
      target: "/home/dashboard",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      title: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Usuarios",
      target: "/home/users",
    },
    {
      title: "Roles",
      target: "Page-2",
    },
  ],
];

export default SideBar;

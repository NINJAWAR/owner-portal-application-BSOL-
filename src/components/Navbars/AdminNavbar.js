/*!

=========================================================
* Paper Dashboard PRO React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
import { useLocation } from "react-router-dom";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { useHistory } from "react-router-dom";
// import { isImportTypeAssertionContainer } from "typescript";

function AdminNavbar(props) {
  const history = useHistory();
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [color, setColor] = React.useState("navbar-transparent");
  const location = useLocation();
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
  });
  React.useEffect(() => {
    if (
      window.outerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
  }, [location]);
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setColor("bg-white");
    } else {
      setColor("navbar-transparent");
    }
  };
  // this function opens and closes the sidebar on small devices
  const toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    setSidebarOpen(!sidebarOpen);
  };
  // this function opens and closes the collapse on small devices
  // it also adds navbar-transparent class to the navbar when closed
  // ad bg-white when opened
  const toggleCollapse = () => {
    if (!collapseOpen) {
      setColor("bg-white");
    } else {
      setColor("navbar-transparent");
    }
    setCollapseOpen(!collapseOpen);
  };
  const logOut = () => {
    localStorage.removeItem("role");
    history.push("/login");
  };
  return (
    <>
      <Navbar
        className={classnames("navbar-absolute fixed-top", color)}
        expand="lg"
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-minimize">
              <Button
                className="btn-icon btn-round"
                color="default"
                id="minimizeSidebar"
                onClick={props.handleMiniClick}
              >
                <i className="nc-icon nc-minimal-right text-center visible-on-sidebar-mini" />
                <i className="nc-icon nc-minimal-left text-center visible-on-sidebar-regular" />
              </Button>
            </div>
            <div
              className={classnames("navbar-toggle", {
                toggled: sidebarOpen,
              })}
            >
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleSidebar}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              <span className="d-none d-md-block">
                Paper Dashboard PRO React
              </span>
              <span className="d-block d-md-none">PD PRO React</span>
            </NavbarBrand>
          </div>
          <button
            aria-controls="navigation-index"
            aria-expanded={collapseOpen}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            // data-target="#navigation"
            data-toggle="collapse"
            type="button"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={collapseOpen}
          >
            {/* <Form>
              <InputGroup className="no-border">
                <Input defaultValue="" placeholder="Search..." type="text" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Form> */}
            <Nav navbar>
              {/* <NavItem>
                <NavLink
                  className="btn-magnify"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="nc-icon nc-layout-11" />
                  <p>
                    <span className="d-lg-none d-md-block">Stats</span>
                  </p>
                </NavLink>
              </NavItem> */}
              <UncontrolledDropdown className="btn-rotate" nav>
                <DropdownToggle
                  aria-haspopup={true}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  id="navbarDropdownMenuLink"
                  nav
                >
                  <i className="nc-icon nc-bell-55" />
                  <p>
                    <span className="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </DropdownToggle>
                <DropdownMenu
                  persist
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ marginTop: "-5px", marginLeft: "-285px" }}
                >
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Vessel AAMIRA Doc Expire due in next 30 days
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Vessel ADVANTAGE SKY Review Completed
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Vessel BLUE EVERTON ISM Initial certificate Expired
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  className="btn-rotate"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="nc-icon nc-settings-gear-65" />
                  <p>
                    <span className="d-lg-none d-md-block">Account</span>
                  </p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown className="btn-rotate" nav>
                <DropdownToggle
                  aria-haspopup={true}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  id="navbarDropdownMenuLink"
                  nav
                >
                  <img
                    alt="..."
                    className="avatar border-gray"
                    src={require("assets/img/default-avatar.png")}
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                    }}
                  />
                  <p>
                    <span className="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </DropdownToggle>
                <DropdownMenu
                  persist
                  aria-labelledby="navbarDropdownMenuLink"
                  right
                >
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => history.push("/admin/profile")}
                  >
                    <span>My Profile </span>
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={() => logOut()}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;

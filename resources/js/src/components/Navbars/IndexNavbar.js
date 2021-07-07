/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {NavDropdown} from "react-bootstrap";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import './Dropdown.css';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} style={{"backgroundColor":"rgba(40,42,45,0.7)"}}expand="lg">
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
             <img
                  style={{"height":"60px","marginLeft":"50px","marginTop":"-15px"}}
                  src={require("assets/img/LOGO HBG COULEUR.png").default}
                />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-center"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
          {/* <NavItem>
              <NavLink style={{"fontSize":"18px"}}
                data-placement="bottom"
              >Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{"fontSize":"18px"}}
                data-placement="bottom"
              >Voyages
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{"fontSize":"18px"}}
                data-placement="bottom"
              >Transfert
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{"fontSize":"18px"}}
                data-placement="bottom"
              >Conciergeries
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{"fontSize":"18px"}}
                data-placement="bottom"
              >Tourisme d’affaire 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{"fontSize":"15px"}}
                data-placement="bottom"
              >Évènementiels
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Suivez-nous sur Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Aimez-nous sur Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Suivez-nous sur Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://api.whatsapp.com/send?phone=+221767400224"
                target="_blank"
                title="Contactez-nous sur Whatsapp"
              >
                <i className="fa fa-whatsapp" />
                <p className="d-lg-none">Whatsapp</p>
              </NavLink>
            </NavItem> */}
            <NavDropdown title="Services" id="nav-dropdown" style={{fontSize:15}}>

              <NavDropdown.Item eventKey="Basic Pricing">Garde rapproché</NavDropdown.Item>

              <NavDropdown.Item eventKey="Corporate Pricing">Interprète</NavDropdown.Item>

              <NavDropdown.Item eventKey="Enterprise pricing">Assistante technique </NavDropdown.Item>

              <NavDropdown.Item eventKey="Basic Pricing">interprète ( chinois , anglais ,italien ) </NavDropdown.Item>

              <NavDropdown.Item eventKey="Corporate Pricing">Assistance virtuelle </NavDropdown.Item>

              <NavDropdown.Item eventKey="Enterprise pricing">Bureau provisoire  </NavDropdown.Item>

              <NavDropdown.Item eventKey="Basic Pricing">Assistance technique  </NavDropdown.Item>

              <NavDropdown.Item eventKey="Corporate Pricing">Assistance administrative  </NavDropdown.Item>

              <NavDropdown.Item eventKey="Enterprise pricing">Assistance juridique   </NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Voyages" id="nav-dropdown">

              <NavDropdown.Item eventKey="Basic Pricing">Ttrasnfert</NavDropdown.Item>

              <NavDropdown.Item eventKey="Corporate Pricing">Location de voiture </NavDropdown.Item>

              <NavDropdown.Item eventKey="Enterprise pricing">Guest house </NavDropdown.Item>

              <NavDropdown.Item eventKey="Basic Pricing">Hotels</NavDropdown.Item>

              <NavDropdown.Item eventKey="Corporate Pricing">Bon plan </NavDropdown.Item>

              <NavDropdown.Item eventKey="Enterprise pricing">Reservations hotel  </NavDropdown.Item>

              <NavDropdown.Item eventKey="Enterprise pricing">Excursions  </NavDropdown.Item>


            </NavDropdown>
            <NavDropdown title="Transfert" id="nav-dropdown">

              <NavDropdown.Item eventKey="Basic Pricing">Aéroport</NavDropdown.Item>

              <NavDropdown.Item eventKey="Corporate Pricing">Gambie</NavDropdown.Item>

              <NavDropdown.Item eventKey="Enterprise pricing">Capskiring</NavDropdown.Item>

              <NavDropdown.Item eventKey="Basic Pricing">Iles des saloums </NavDropdown.Item>

              <NavDropdown.Item eventKey="Corporate Pricing">Banadafassi</NavDropdown.Item>

              <NavDropdown.Item eventKey="Enterprise pricing">Parc Niokolokoba </NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Conciergeries" id="nav-dropdown">

              <NavDropdown.Item eventKey="Basic Pricing">Service à la personne </NavDropdown.Item>

              <NavDropdown.Item eventKey="Corporate Pricing">Course</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Tourisme d’affaire " id="nav-dropdown">

              <NavDropdown.Item eventKey="Basic Pricing">Accompagnement</NavDropdown.Item>

              <NavDropdown.Item eventKey="Corporate Pricing">Facilitations d’affaire </NavDropdown.Item>

              <NavDropdown.Item eventKey="Enterprise pricing">Mise en relation </NavDropdown.Item>

              <NavDropdown.Item eventKey="Enterprise pricing">Survey ( opportunité d’affaire, réglementations , ... )  </NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Évènementiels" id="nav-dropdown">

              <NavDropdown.Item eventKey="Basic Pricing">Organisons ateliers séminaire </NavDropdown.Item>

              <NavDropdown.Item eventKey="Corporate Pricing">Prises en charges convives</NavDropdown.Item>

              <NavDropdown.Item eventKey="Enterprise pricing">Activités extra des séminaires </NavDropdown.Item>

            </NavDropdown>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Suivez-nous sur Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Aimez-nous sur Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Suivez-nous sur Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://api.whatsapp.com/send?phone=221767400224"
                target="_blank"
                title="Contactez-nous sur Whatsapp"
              >
                <i className="fa fa-whatsapp" />
                <p className="d-lg-none">Whatsapp</p>
              </NavLink>
            </NavItem> 
          </Nav>
        </Collapse>
    </Navbar>
  );
}

export default IndexNavbar;

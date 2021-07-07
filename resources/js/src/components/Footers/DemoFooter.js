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
/*eslint-disable*/
import React from "react";
import { useGoogleMaps } from "react-hook-google-maps";
// reactstrap components
import { Row, Container,NavItem ,NavLink} from "reactstrap";

function DemoFooter() {
  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
    // NOTE: You should always set initial 'center' and 'zoom' values
    // even if you plan to change them later
    {
      center: { lat: 14.7465621, lng: -17.5194983 },
      zoom: 3,
    },
  );
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row style={{"textAlign":"center"}}>
          <nav className="footer-nav" >
          <ul>
          <li>
          <div className="credits ml-auto">
            <span style={{fontSize:25}}>
              <i className="fa fa-map-marker" style={{fontSize:25}} /> Dakar Les Almadies Business CentreL; Zone 12 Almadies Route  de  l'Aéroport N°8  BP 24539, 99 Dakar
            </span>
          </div>
          </li>
            </ul>
            <div ref={ref} style={{ width: "100%", height: 600 }} />;

          <ul>
              <li>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, fait avec{" "}
              <i className="fa fa-heart heart" /> par Anwar B.
            </span>
          </div>
          </li>
          <li >
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
              </li>
              <li>
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
              </li>
              <li>
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
             </li>
              <li>
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
              </li>
            </ul>
          </nav>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;

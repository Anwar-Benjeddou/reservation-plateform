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

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionTypography() {
  return (
    <>
      <Container className="tim-container" >
        {/* <div className="title">
          <h3>Typography</h3>
        </div> */}
        <div id="typography">
          <Row>

            {/* <div className="typography-line"> */}
              <h3>
                {/* <span className="note">Header 3</span> */}
                <p style={{"line-height":"2em","text-align": "justify"}}>Les services de conciergerie personnelle sont à la hausse. Avec l’émergence du numérique et le désir d’expériences sur la propriété, les entreprises de conciergerie modernes évoluent radicalement pour fournir des services exceptionnels 24/7 à leurs clients exigeants.

                    Les hommes d’affaires et les professionnels savent que le temps est leur ressource la plus précieuse. </p>
                
                <p style={{"line-height":"2em","text-align": "justify"}}>Lorsque vous êtes toujours connecté et en déplacement, votre temps est la seule chose que vous ne pouvez jamais récupérer.

                    Pour vous aider à gagner du temps et obtenir un accès privilégié à des événements privés que l’argent ne peut acheter, HBG vous offre un package de service à la personne adapté à votre portefeuille. C’est votre arme secrète pour débloquer un monde d’expériences exclusives et d’événements VIP.</p>

                <p style={{"line-height":"2em","text-align": "justify"}}>Vous recherchez un jet privé de dernière minute pour un rendez-vous important ou simplement passer le week end au Capskiring

                    Aucun problème ! Juste un clic et vous êtes servis.</p>

                <p style={{"line-height":"2em","text-align": "justify"}}>Vous mourez d’envie d’obtenir une place au premier rang d’une cérémonie ? AUCUN PROBLÉME JUSTE UN CLIC !!!

                    Envie d’essayer le nouveau restaurant étoilé ? Votre table est réservée pour ce soir. C’est si facile.</p>

                <p style={{"line-height":"2em","text-align": "justify"}}>En affaire. Ou en vacances au Sénégal, en seul clique vous avez le transfert et l’hébergement qui sied à votre rang avec un système totalement dématérialisé.

                    Vous devez organiser un séminaire ou atelier et n’avez pas le temps d’accueillir vos hôtes un service d’accueil et d’orientation est à votre disposition pour offrir à vos hôtes un séjour inoubliable

                    Eh bien, presque aussi simple que cela. Vous devez d’abord trouver le service de conciergerie de luxe qui vous convient.</p>

              </h3>
          </Row> 
        </div>
        <br />
        
      </Container>
    </>
  );
}

export default SectionTypography;

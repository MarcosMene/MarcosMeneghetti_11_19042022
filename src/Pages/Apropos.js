import React from "react";
import { useState } from "react";
import AproposSection from "../components/AproposSection";
import Accordion from "../components/Accordion";
import styled from "styled-components";

const Apropos = () => {
  const [active, setActive] = useState("");

  return (
    <main className="main">
      <section className="container">
        <AproposSection />

        <Accordions>
          <Accordion
            title="Fiabilité"
            active={active}
            setActive={setActive}
            text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
          <Accordion
            title="Respect"
            active={active}
            setActive={setActive}
            text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Accordion
            title="Service"
            active={active}
            setActive={setActive}
            text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <Accordion
            title="Sécurité"
            active={active}
            setActive={setActive}
            text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </Accordions>
      </section>
    </main>
  );
};

const Accordions = styled.div`
  margin-bottom: 50px;
`;

export default Apropos;

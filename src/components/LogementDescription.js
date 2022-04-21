import React from "react";
import { useState } from "react";
import Tag from "./tag";
import styled from "styled-components";
import LogementRating from "../components/LogementRating";
import Accordion from "../components/Accordion";
import AccordionEquipaments from "../components/AccordionEquipaments";

const LogementTitle = () => {
  const [active, setActive] = useState("");

  return (
    <div>
      <LogDescription>
        <div>
          <h1>Cozy loft on the Canal Saint-Martin</h1>
          <p>Paris, Île-de-France</p>
          <Tags>
            <Tag />
            <Tag />
            <Tag />
          </Tags>
        </div>
        <div>
          <LogementRating />
        </div>
      </LogDescription>

      <Accordions className="Accordion">
        <Accordion
          title="Description"
          active={active}
          setActive={setActive}
          text="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
        />
        <Accordion
          title="Équipements"
          active={active}
          setActive={setActive}
          text={<AccordionEquipaments />}
        />
      </Accordions>
    </div>
  );
};

const LogDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;

  h1 {
    font-size: 2.25rem;
    font-weight: 500;
    margin-top: 25px;
  }
  > p {
    margin-top: 10px;
  }
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
`;

const Accordions = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .accordion {
    width: 45%;
    margin: 35px 0;

    p {
      font-size: 1.125rem;
    }

    .accordingContent.show {
      height: 250px;
      opacity: 1;
    }
  }
`;

export default LogementTitle;

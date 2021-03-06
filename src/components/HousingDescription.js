import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Tag from "./tag";
import HousingRating from "./HousingRating";
import Accordion from "./Accordion";

import { UseFetch } from "../tools/Services";
import { useParams, Navigate } from "react-router-dom";

const LogementDescription = () => {
  const [active, setActive] = useState("");

  const urlParams = useParams();

  const { data } = UseFetch("/data.json");

  const housingData = data.filter((data) => data.id === urlParams.id);

  if (housingData === []) {
    return <Navigate to="/error" />;
  }

  return (
    <div>
      {housingData &&
        housingData.map((location, index, id) => (
          <div key={`${index}-${id}`}>
            <LogDescription key={`${index}-${location.id}`}>
              <div className="housingTitle">
                <h1>{location.title}</h1>
                <p>{location.location}</p>
                <Tags>
                  {location.tags.map((tag, index) => (
                    <Tag tagTitle={tag} key={`${index}-${tag}`} />
                  ))}
                </Tags>
              </div>
              <div className="housingRate" key={`${index}-${`housingRate`}`}>
                <HousingRating
                  sellerName={location.host.name}
                  sellerImage={location.host.picture}
                />
              </div>
            </LogDescription>

            <Accordions className="Accordion">
              <Accordion
                key={`${index}-${`description`}`}
                title="Description"
                active={active}
                setActive={setActive}
                text={location.description}
              />
              <Accordion
                key={`${index}-${`equipement`}`}
                title="Équipements"
                active={active}
                setActive={setActive}
                text={
                  <ul>
                    {location[`equipments`].map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                }
              />
            </Accordions>
          </div>
        ))}
    </div>
  );
};

const LogDescription = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 25px;
  width: 100%;

  .housingTitle {
    h1 {
      font-size: 2.25rem;
      font-weight: 500;
      margin-top: 25px;
    }
    > p {
      margin-top: 10px;
    }
  }

  @media (max-width: 768px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    margin-top: 25px;
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;

    .housingRate {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      width: 100%;
    }

    .housingTitle {
      h1 {
        font-size: 1.6rem;

        margin-top: 0px;
      }
      > p {
        margin-top: 5px;
      }
    }
  }

  @media (max-width: 485px) {
    .housingTitle {
      margin: 0;
      width: 100%;
      h1 {
        font-size: 1.125rem;

        margin-top: 0px;
      }
    }
  }
`;

const Tags = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  margin-top: 30px;
  width: 100%;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  @media (max-width: 485px) {
    margin-top: 20px;
  }
`;

const Accordions = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  .accordion {
    width: 45%;
    margin: 30px 0;

    p {
      font-size: 1.125rem;
    }

    .accordingContent.show {
      max-height: 400px;
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;

    .accordion {
      margin: 30px 0 0 0;
    }
  }
`;

export default LogementDescription;

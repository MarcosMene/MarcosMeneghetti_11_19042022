import React from "react";
import styled from "styled-components";

const HomeGallery = () => {
  return (
    <GallerySectionStyle>
      <GalleryImageStyle>
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <div className="gradient"></div>
        <p>Titre de la location</p>
      </GalleryImageStyle>
      <GalleryImageStyle>
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <div className="gradient"></div>
        <p>Titre de la location</p>
      </GalleryImageStyle>
      <GalleryImageStyle>
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <div className="gradient"></div>
        <p>Titre de la location</p>
      </GalleryImageStyle>
      <GalleryImageStyle>
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <div className="gradient"></div>
        <p>Titre de la location</p>
      </GalleryImageStyle>
      <GalleryImageStyle>
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <div className="gradient"></div>
        <p>Titre de la location</p>
      </GalleryImageStyle>
      <GalleryImageStyle>
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <div className="gradient"></div>
        <p>Titre de la location</p>
      </GalleryImageStyle>
      <GalleryImageStyle>
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <div className="gradient"></div>
        <p>Titre de la location</p>
      </GalleryImageStyle>
      <GalleryImageStyle>
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <div className="gradient"></div>
        <p>Titre de la location</p>
      </GalleryImageStyle>
      <GalleryImageStyle>
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <div className="gradient"></div>
        <p>Titre de la location</p>
      </GalleryImageStyle>
      <GalleryImageStyle>
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <div className="gradient"></div>
        <p>Titre de la location</p>
      </GalleryImageStyle>
      <GalleryImageStyle>
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <div className="gradient"></div>
        <p>Titre de la location</p>
      </GalleryImageStyle>
    </GallerySectionStyle>
  );
};

const GallerySectionStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background: #f6f6f6;
  border-radius: 25px;
  width: 100%;
  padding: 25px 0;
  margin-bottom: 50px;
`;

const GalleryImageStyle = styled.div`
  width: 340px;
  height: 340px;
  margin: 25px 10px 25px 10px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    border-radius: 25px;
  }
  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    background: rgb(255, 97, 97);
    background: linear-gradient(
      180deg,
      rgba(255, 97, 97, 0.3),
      rgba(139, 56, 56, 0.3)
    );
    border-radius: 25px;
  }

  p {
    position: absolute;
    font-size: 1.125rem;
    color: #fff;
    left: 23px;
    bottom: 23px;
    font-weight: 500;
    width: 40%;
  }
`;

export default HomeGallery;

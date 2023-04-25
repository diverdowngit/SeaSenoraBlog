import React, { Component } from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import {
  imgbox,
  transparentbox,
  caption,
} from "../css/PhotoGallery.module.css";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default class PhotosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePopup: false,
      selectedItem: 0,
    };
  }

  render() {
    const { data } = this.props;
    const { activePopup, selectedItem } = this.state;

    return (
      <Layout>
        <SEO
          title="Photos"
          keywords={[`Photos`,`Sailing`, `Liveaboard`, `Cruiser`]}
        />
        <div className="site-container blogs-page" id="Blogs">
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading h2">Photos</h1>
            </div>
            <ul className="photos-page-list">
              {data.contentfulPhotos.photos.map((item, index) => {
                return (
                  <li key={index} className="item">
                    <div
                      className="inner"
                      role="presentation"
                      onClick={() => {
                        this.setState({
                          activePopup: true,
                          selectedItem: index,
                        });
                      }}
                    >
                      <Img
                        fluid={item.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
            {activePopup ? (
              <div className="rg-popup">
                <span
                  className="popup-layer"
                  role="presentation"
                  onClick={() => {
                    this.setState({
                      activePopup: false,
                    });
                  }}
                ></span>
                <div className="popup-inner">
                  <i
                    className="fas fa-times"
                    role="presentation"
                    onClick={() => {
                      this.setState({
                        activePopup: false,
                      });
                    }}
                  ></i>
                  <div className={imgbox}>
                    <img
                      src={data.contentfulPhotos.photos[selectedItem].file.url}
                      alt={
                        data.contentfulPhotos.photos[selectedItem].description
                      }
                    />
                    <div className={transparentbox}>
                      <div className={caption}>
                        <h3>
                          {
                            data.contentfulPhotos.photos[selectedItem]
                              .description
                          }
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Layout>
    );
  }
}
export const pageQuery = graphql`
  query PhotosPageQuery {
    contentfulPhotos {
      photos {
        description
        file {
          url
        }
        fluid(maxWidth: 600) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
  }
`;

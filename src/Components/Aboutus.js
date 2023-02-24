import React, { Component } from "react";
import "./Aboutus.css";
import img from "../img/3-min.jpg"

class Aboutus extends Component {
  render() {
    return (
      <>
        <div id="aboutUsContainer">
          <div>
            <h1>About us</h1>
          </div>
          <div className="aboutContentContainer">
            <div className="aboutContent">
              <p>
                GECO Asia is a specialist IT Consulting / Resourcing firm with
                100% focus on Digital Transformation projects
              </p>
            </div>
            <div className="aboutContent">
              <h4>What We Do</h4>
              <p>
                We are a specialist IT Expert Resources Service Provider
                connecting organizations with qualified Digital Transformation
                experts on time & material (T&M), managed services (long-term
                renewable contracts), or fixed term statement of work (SOW)
                engagement models.
              </p>
            </div>
            <div className="aboutContent">
              <h4>Our People</h4>
              <p>
                Our IT Consultants work with the highest levels of efficiency to
                deliver value with integrity. ​ We are best known in the Asia
                Pacific market as a quality provider of specialist SAP
                Consultants and Next-Gen Digital Transformation Technology
                experts.
              </p>
            </div>
            <div className="aboutContent">
              <img src={img} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Aboutus;

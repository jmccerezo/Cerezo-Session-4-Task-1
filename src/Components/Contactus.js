import React, { Component } from "react";
import "./Contactus.css";

class Contactus extends Component {
  state = {
    contact: [
      {
        id: 1,
        name: "GECO Asia Pte. Ltd.",
        number: "+65 6560 3224",
        email: "info@geco.asia",
        address: "2 Venture Drive, #10-18 Vision Exchange, Singapore 608526",
      },
      {
        id: 2,
        name: "GECO Philippines BGC",
        number: "(+63) 999 169 3172",
        email: "info@geco.asia",
        address:
          "One Global Place, 5th Avenue & 25th Street, BGC, Taguig, Philippines 1632",
      },
      {
        id: 3,
        name: "GECO Philippines IloIlo",
        number: "(+63) 999 169 3172",
        email: "info@geco.asia",
        address:
          "Estrella Building, Simon Ledesma St., Iloilo City, Philippines 5000",
      },
    ],
  };

  render() {
    const locations = this.state.contact.map((loc) => {
      return (
        <React.Fragment key={loc.id}>
          <div className="row">
            <div className="col s12 m12">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <div className="contactCardContainer">
                    <div className="contactCardContent">
                      <span className="card-title">{loc.name}</span>
                      <br />
                      <div className="contactDetails">
                        <i className="material-icons">phone</i>
                        <p>{loc.number}</p>
                      </div>
                      <div className="contactDetails">
                        <i className="material-icons">email</i>
                        <p>{loc.email}</p>
                      </div>
                      <div className="contactDetails">
                        <i className="material-icons">location_on</i>
                        <p>{loc.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });
    return (
      <>
        <div id="contactUsContainer">
          <div>
            <h1>Contact us</h1>
          </div>
          <div>{locations}</div>
          <div>
            <div className="row">
              <div className="col s12 m12">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <div className="contactCardContainer">
                      <div className="contactCardContent">
                        <span className="card-title">
                          GECO Philippines IloIlo
                        </span>
                        <br />
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.084366834469!2d122.55418771428668!3d10.727976163020873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aee5d6d4dea36d%3A0xec8f6de04d196a3a!2sGECO%20Philippines%20-%20IloIlo!5e0!3m2!1sen!2sph!4v1677199725566!5m2!1sen!2sph"
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contactus;

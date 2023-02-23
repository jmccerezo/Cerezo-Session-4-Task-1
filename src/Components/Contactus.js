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
                  <div id="aboutCardContainer">
                    <div className="aboutCardContent">
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
        </div>
      </>
    );
  }
}

export default Contactus;

import React, { Component } from "react";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import "./Home.css";

const animeChanURL = "https://api.jikan.moe/v4/top/anime";

class Home extends Component {
  state = {
    quotes: [],
  };

  componentDidMount = () => {
    axios
      .get(animeChanURL)
      .then((res) => {
        this.setState({
          quotes: res.data.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    const animeQuotes = this.state.quotes.length ? (
      this.state.quotes.map((data, i) => {
        const genres = data.genres.map((genre) => {
          return " ~ " + genre.name;
        });
        return (
          <React.Fragment key={i}>
            <div className="row">
              <div className="col s12 m12">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <div id="animeCardContainer">
                      <div className="animeCardContent">
                        <img src={data.images.jpg.image_url} />
                      </div>
                      <div className="cardContent">
                        <span className="card-title">{data.title}</span>
                        <br />
                        <p>Rank: {data.rank}</p>
                        <p>Score: {data.score}</p>
                        <p>Status: {data.status}</p>
                        <p>Date Aired: {data.aired.string}</p>
                        <p>Genres: {genres}</p>
                        <p>Rating: {data.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })
    ) : (
      <PulseLoader color="#36d7b7" />
    );

    return (
      <>
        <div id="homeContainer">
          <div>
            <h1>MAL Top Animes</h1>
          </div>
          <div>{animeQuotes}</div>
        </div>
      </>
    );
  }
}

export default Home;

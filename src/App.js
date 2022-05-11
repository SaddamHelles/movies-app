import "./App.css";
import { StyledCardMovies } from "./commponents/CardMovie";
import { StyledContainer } from "./commponents/Container/Container";
import { StyledContainerCards } from "./commponents/ContainerCards";
import { StyledHeader } from "./commponents/Header";
import { StyledPopularMoviesTitle } from "./commponents/PopularMoviesTitle";
import { StyledPopupMovie } from "./commponents/PopupMovie";
import { StyledSingleMovie } from "./commponents/SingleMovie";
import bgImage from "./images/BackgroundImage.jpeg";
import urlCardImage from "./images/urlCardImage.jpeg";
import popupImage from "./images/PopupSingleImage.jpeg";

const StyleIcon = {
  width: "200px",
  marginTop: "5px",
  marginLeft: "60px",
  cursor: "pointer",
};
const StylePopup = {
  left: "0px",
  cursor: "pointer",
};
function App() {
  return (
    <StyledContainer>
      <StyledHeader>
        <a href="http://www.netflix.com/ps-en/browse/genre/7424">
          <img
            style={StyleIcon}
            src={require("./images/free-movies-icon-16.jpg")}
            alt="Icon"
          />
        </a>
        {/* <a
          style={{
            textDecoration: "none",
            alignContent: "center",
            color: "white",
          }}
          href="https://www.netflix.com/ps-en/browse/genre/7424"
        >
          React Movie
        </a> */}
      </StyledHeader>
      <StyledSingleMovie urlImage={bgImage}>
        <StyledPopupMovie>
          <img
            style={StylePopup}
            src={require("./images/PopupSingleImage.jpeg")}
            alt="Icon"
          />
          <h2 style={{ color: "white", paddingLeft: "20px" }}>
            Movie's Name and its Onformation
          </h2>
        </StyledPopupMovie>
      </StyledSingleMovie>
      <StyledPopularMoviesTitle>Popular Movies</StyledPopularMoviesTitle>
      <StyledContainerCards>
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
        <StyledCardMovies urlCardImage={urlCardImage} />
      </StyledContainerCards>
    </StyledContainer>
  );
}

export default App;

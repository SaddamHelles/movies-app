import "./App.css";
import { StyledContainer } from "./commponents/Container/Container";
import { StyledHeader } from "./commponents/Header";
import { StyledPopularMoviesTitle } from "./commponents/PopularMoviesTitle";
import { StyledSingleMovie } from "./commponents/SingleMovie";
import bgImage from "./images/BackgroundImage.jpeg";
const StyleIcon = {
  width: "60px",
  marginTop: "5px",
};
function App() {
  return (
    <StyledContainer>
      <StyledHeader>
        <img
          style={StyleIcon}
          src={require("./images/free-movies-icon-16.jpg")}
          alt="Icon"
        />
        {/* <a
          style={{
            textDecoration: "none",
            alignContent: "center",
          }}
          href="https://www.netflix.com/ps-en/browse/genre/7424"
        >

        </a> */}
        React Movie
      </StyledHeader>
      <StyledSingleMovie urlImage={bgImage} />
      <StyledPopularMoviesTitle>Popular Movies</StyledPopularMoviesTitle>
    </StyledContainer>
  );
}

export default App;

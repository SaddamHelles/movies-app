import styled from "styled-components";

export const StyledCardMovies = styled.div`
  width: 18%;
  height: 250px;
  background-image: url(${({ urlCardImage }) => urlCardImage});
  background-size: cover;
  display: inline-block;
  background-repeat: no-repeat;
  margin-right: 8px;
  margin-bottom: 8px;
`;

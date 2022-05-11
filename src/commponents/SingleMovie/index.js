import styled from "styled-components";
export const StyledSingleMovie = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${({ urlImage }) => urlImage});
  padding: 2px;
  margin: 4px;
  background-size: contain;
  background-repeat: no-repeat;
`;

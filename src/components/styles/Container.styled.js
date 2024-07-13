import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  color: ${({ theme }) => theme.color.textColor};
  background-color: ${({ theme }) => theme.color.background};
`;

export default StyledContainer;

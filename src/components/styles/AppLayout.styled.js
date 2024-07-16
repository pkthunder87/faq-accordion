import styled from "styled-components";

const AppLayout = styled.main`
  width: 90dvw;
  max-width: 37rem;
  height: 80dvh;
  max-height: 34rem;
  padding: 2.15rem 2.3rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colorMain};
  background-color: ${({ theme }) => theme.colorWhite};
  border-radius: 10px;
`;

export default AppLayout;

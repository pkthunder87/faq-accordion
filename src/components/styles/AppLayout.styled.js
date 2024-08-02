import styled from "styled-components";

const AppLayout = styled.main`
  /* width: 90dvw; */
  max-width: 37rem;
  /* height: auto; */
  min-height: 34rem;
  padding-inline: 2.15rem;
  padding-block: 2.3rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colorMain};
  background-color: ${({ theme }) => theme.colorWhite};
  border-radius: 10px;
`;

export default AppLayout;

import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  font-weight: bold;
  gap: 1.5rem;

  padding: 0rem;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
  }

  img {
    width: 2.6rem;
    margin-top: -0.5rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img src="icon-star.svg" alt="purple star" />
      <h1 className="head" id="head">
        FAQs
      </h1>
    </StyledHeader>
  );
}

export default Header;

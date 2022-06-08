import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 55px 0;
  background: linear-gradient(
    to right,
    rgba(173, 207, 255, 0.25) 0%,
    rgba(173, 206, 255, 0.25) 1%,
    rgba(181, 176, 248, 0.25) 50%,
    rgba(187, 143, 240, 0.25) 100%
  );
`;
const Wrapper = styled.div`
  width: 1250px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  div {
    height: 370px;
    width: 300px; //
    background-color: beige; //
  }
`;

function MainSection() {
  return (
    <Section>
      <Wrapper>
        <div></div> <div></div> <div></div>
      </Wrapper>
    </Section>
  );
}

export default MainSection;

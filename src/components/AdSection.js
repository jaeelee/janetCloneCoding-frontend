import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 30px 0;
  background-color: pink;
`;
const Wrapper = styled.div`
  width: 1250px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  div {
    margin-right: 20px;
    background-color: blue;
    height: 90px;
    width: 250px;
  }
`;

function AdSection() {
  return (
    <Section>
      <Wrapper>
        <div></div> <div></div> <div></div>
      </Wrapper>
    </Section>
  );
}

export default AdSection;

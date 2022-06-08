import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 30px 0;
  background-color: tomato;
  margin: auto;
  li {
    margin-right: 20px;
    background-color: blue;
    height: 190px;
    width: 300px;
  }
`;
const Wrapper = styled.div`
  width: 1250px;
  margin: auto;
  justify-content: space-between;
`;

const Title = styled.h1`
  align-items: center;
  height: 40px;
  font-size: 28px;
  margin: 0 0 20px;
`;

function HotKeywordSection() {
  return (
    <Section>
      <Wrapper>
        <Title>HOT키워드TOP20</Title>
        <li></li>
      </Wrapper>
    </Section>
  );
}

export default HotKeywordSection;

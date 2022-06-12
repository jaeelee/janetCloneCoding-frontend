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
  height: 370px;
  padding: 0 55px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  div {
    height: 100%;
    background-color: white;
  }
`;
const Banner = styled.div`
  box-sizing: border-box;
  width: 420px;
`;

const Info = styled.div`
  box-sizing: border-box;
  padding: 40px;
  width: 540px;
`;

const Rank = styled.div`
  box-sizing: border-box;
  padding: 40px;
  width: 260px;
  h1 {
    margin: auto;
    font-size: 18px;
  }
  ol {
    padding: 0 0 0 20px;
  }
`;

function MainSection() {
  return (
    <Section>
      <Wrapper>
        <Banner>
          <img
            src="https://janet.co.kr/img/common/main/banner/mainBn_top_01.png"
            alt="Banner"
          />
          {/* <img src="https://janet.co.kr/img/common/main/banner/mainBn_top_02.png" />
          <img src="https://janet.co.kr/img/common/main/banner/mainBn_top_03.png" />
          <img src="https://janet.co.kr/img/common/main/banner/mainBn_top_04.png" /> */}
        </Banner>
        <Info></Info>
        <Rank>
          <h1>기사 인기순위</h1>
          <ol>
            <li>전기기사</li>
            <li>산업안전기사</li>
            <li>위험물산업기사</li>
            <li>전기산업기사</li>
            <li>건축기사</li>
            <li>건설안전기사</li>
            <li>소방설비기사(전기분야)</li>
            <li>제품디자인산업기사</li>
            <li>건설기계정비산업기사</li>
            <li>사출금형산업기사</li>
          </ol>
        </Rank>
      </Wrapper>
    </Section>
  );
}

export default MainSection;

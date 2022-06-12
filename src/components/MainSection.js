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
    background-color: white;
  }
`;
const Banner = styled.div`
  box-sizing: border-box;
  width: 420px;
`;

const Info = styled.div`
  box-sizing: border-box;
  padding: 40px 30px 35px;
  width: 540px;
  .imgBox {
    text-align: center;
  }
`;

const Rank = styled.div`
  box-sizing: border-box;
  padding: 40px 30px 35px;
  width: 260px;
  ol {
    counter-reset: list-number;
    box-sizing: border-box;
    font-size: 13px;
    padding: 25px 0;
    height: 300px;
  }
  li {
    counter-increment: list-number;
    height: 10%;
    &::before {
      width: 20px;
      text-align: center;
      content: counter(list-number);
      display: inline-block;
      color: #bababa;
    }
  }
`;

const Title = styled.h1`
  margin: auto;
  font-size: 18px;
`;

const InfoBox = styled.div`
  box-sizing: border-box;
  height: 225px;
  padding: 20px 10px;
  li {
    box-sizing: border-box;
    width: 230px;
    height: 80px;
    padding: 10px 20px;
    list-style: none;
    float: left;
    display: flex;
  }
  img {
    margin-right: 20px;
  }
  .text {
    width: 85px;
  }
  h3 {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
  }
  p {
    color: #333333;
    font-family: "Noto Sans KR", "Apple SD Gothic Neo", sans-serif;
    font-size: 13px;
  }
`;

function MainSection() {
  const rank = [
    "전기기사",
    "산업안전기사",
    "위험물산업기사",
    "전기산업기사",
    "건축기사",
    "건설안전기사",
    "소방설비기사(전기분야)",
    "제품디자인산업기사",
    "건설기계정비산업기사",
    "사출금형산업기사",
  ];

  const info = [
    {
      id: "1",
      title: "자격증정보",
      text: "자격증정보의 모든 것",
      src: "https://janet.co.kr/html_demo/img/main/inCrfc.png",
    },
    {
      id: "2",
      title: "계열별정보",
      text: "자격증에 대하여 알려드립니다.",
      src: "https://janet.co.kr/html_demo/img/main/iCrtfc.png",
    },
    {
      id: "3",
      title: "자격증 공모전",
      text: "자격증 관련 공모전 정보 확인하기",
      src: "https://janet.co.kr/html_demo/img/main/sCrtfc.png",
    },
    {
      id: "4",
      title: "시험접수안내",
      text: "필기/실기 기본접수안내",
      src: "https://janet.co.kr/html_demo/img/main/rCrtfc.png",
    },
  ];

  return (
    <Section>
      <Wrapper>
        <Banner>
          <img
            src="https://janet.co.kr/img/common/main/banner/mainBn_top_01.png"
            alt="Banner"
          />
        </Banner>
        <Info>
          <Title>자격증정보</Title>
          <InfoBox>
            {info.map((info) => (
              <li key={info.id}>
                <img src={info.src} />
                <div className="text">
                  <h3>{info.title}</h3>
                  <p>{info.text}</p>
                </div>
              </li>
            ))}
          </InfoBox>
          <div className="imgBox">
            <img src="https://janet.co.kr/data/ebslider/eb4_basic/img/d0942d969f0a37cb73a46db345ea874b.png" />
          </div>
        </Info>
        <Rank>
          <Title>기사 인기순위</Title>
          <ol>
            {rank.map((item, index) => (
              <li className="rankList" key={index}>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </Rank>
      </Wrapper>
    </Section>
  );
}

export default MainSection;

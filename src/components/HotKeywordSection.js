import React from "react";
import styled from "styled-components";
import top20 from "../db/top20";

const Section = styled.section`
  padding: 30px 0;
  margin: auto;

  li {
    box-sizing: border-box;
    height: 190px;
    width: 290px;
    float: left;
    margin: 0 10px 15px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
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
  padding-left: 50px;
  b {
    font-weight: bold;
    span {
      color: #8f45ef;
    }
  }
`;

const ImgBox = styled.div`
  border-radius: 10px 10px 0 0;
  position: relative;
  height: 123px;
  opacity: 0.7;
  box-sizing: border-box;
  background: #e9b107;

  h3 {
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    font-size: 20px;
    color: white;
    font-weight: bold;
    padding: 20px 30px;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    background: linear-gradient(transparent, #000000);
  }
`;

const TextBox = styled.div`
  box-sizing: border-box;

  padding: 10px 30px;
  p {
    margin: 2px;
  }
  .agency {
    font-size: 16px;
    line-height: 2;
    height: 28px;
    color: #6e6e6e;
  }
  .date {
    font-size: 13px;
    color: red;
  }
`;

function HotKeywordSection() {
  console.log(top20);
  return (
    <Section>
      <Wrapper>
        <Title>
          <b>
            <span>HOT</span>키워드
          </b>
          TOP20
        </Title>
        <ul>
          {top20.map((item) => (
            <li key={item.id}>
              <ImgBox>
                <h3>{item.title}</h3>
              </ImgBox>
              <TextBox>
                <p className="agency">시행기관 : {item.licenseOrgan}</p>
                <p className="date">시행일 : {item.esRegdt.split("T")[0]}</p>
              </TextBox>
            </li>
          ))}
        </ul>
      </Wrapper>
    </Section>
  );
}

export default HotKeywordSection;

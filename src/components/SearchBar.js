import React from "react";
import styled, { keyframes } from "styled-components";

const widthAnimation = keyframes`
to{
    width:600px; 
}
`;

const Wrapper = styled.div`
  .active {
    animation: ${widthAnimation} 0.5s ease-in;
    animation-fill-mode: forwards;
    /* width: 600px; */
  }
`;
const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  border: 1.5px solid #9c57f5;
  width: 400px;
  height: 35px;
`;

const SearchTitle = styled.div`
  margin: 0;
  line-height: 36px;
  padding: 0px 10px 0px 25px;
  font-size: 14px;
  width: 100px;
  color: #9c57f5;
`;

const SearchBtn = styled.button`
  img {
    vertical-align: middle;
    width: 30px;
    height: 30px;
    padding: 0px 3px;
  }
  padding: 0;
`;

const SearchInput = styled.input`
  width: 100%;
  outline: none;
  :focus {
    &::placeholder {
      color: #9c57f5;
      font-weight: bold;
    }
  }
`;

function SearchBar() {
  const onClick = (event) => {
    event.target.parentElement.classList.add("active");
  };
  return (
    <Wrapper>
      <SearchForm>
        <SearchTitle>통합검색</SearchTitle>
        <SearchInput
          onClick={onClick}
          type="text"
          placeholder="자격증 꿀팁 보러가기 #취준 #취뽀"
        />
        <SearchBtn type="submit" value="검색">
          <img
            src="https://janet.co.kr/html_demo/img/common/mainSrchBtn.png"
            alt="검색"
          />
        </SearchBtn>
      </SearchForm>
    </Wrapper>
  );
}
export default SearchBar;

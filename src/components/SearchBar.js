import React, { useState } from "react";
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
  }
`;
const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  border: 1.5px solid transparent;
  width: 400px;
  height: 35px;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #9c56f5 70%, #7b7afe 100%);
  /* linear-gradient(to right, #9c57f5 70%, #4eafd6 100%); */
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const SearchTitle = styled.div`
  margin: 0;
  line-height: 36px;
  padding: 0px 10px 0px 25px;
  font-size: 14px;
  width: 100px;
`;

const SearchBtn = styled.button`
  padding: 0;
  img {
    vertical-align: middle;
    width: 30px;
    height: 30px;
    padding-right: 3px;
  }
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
  const [search, setSearch] = useState("");

  const onClick = (event) => {
    event.target.parentElement.classList.add("active");
  };
  const onChange = (event) => setSearch(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    window.location.href = `https://janet.co.kr/search/search?stx=${search}`;
  };
  return (
    <Wrapper>
      <SearchForm onSubmit={onSubmit}>
        <SearchTitle>통합검색</SearchTitle>
        <SearchInput
          onChange={onChange}
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

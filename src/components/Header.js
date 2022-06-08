import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Wrapper = styled.header`
  width: 1250px;
  height: 130px;
  margin: auto;
`;
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50%;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  button {
    padding-right: 10px;
  }
`;

const Logo = styled.a`
  margin: 0 30px 0 0;
`;
function Header() {
  return (
    <Wrapper>
      <Navbar>
        <Content>
          <Logo href="/">
            <img
              src="https://janet.co.kr/html_demo/img/common/logo.png"
              alt="자격증넷"
            />
          </Logo>
          <SearchBar />
        </Content>
        <Content>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </Content>
      </Navbar>
      <Navbar>
        <Content>
          <button></button>
          <button>Top100</button>
          <button>자격증정보</button>
          <button>어학/공무원</button>
          <button>자넷info</button>
          <button>자넷톡</button>
        </Content>
        <Content>
          <button>우리동네학원</button>
          <button>커뮤니티</button>
          <button>자격증AI</button>
        </Content>
      </Navbar>
    </Wrapper>
  );
}

export default Header;

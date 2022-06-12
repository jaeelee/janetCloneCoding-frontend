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
`;

const Link = styled.a`
  padding: 15px;
  font-weight: 500;
  color: #919191;
  font-size: 14px;
  text-align: center;
  div {
    margin-top: 10px;
  }
`;

const Logo = styled.a`
  margin: 0 30px 0 0;
`;

const NavButton = styled.button`
  width: ${(props) => `${props.width}`};
  padding: 0;
  margin: auto;
  font-size: 17px;
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
              title="자격증넷"
            />
          </Logo>
          <SearchBar />
        </Content>
        <Content>
          <Link>
            <img
              src="https://janet.co.kr/img/common/header/member.png"
              alt="회원가입"
            />
            <div>회원가입</div>
          </Link>
          <Link>
            <img
              src="https://janet.co.kr/img/common/header/login.png"
              alt="로그인"
            />
            <div>로그인</div>
          </Link>
          <Link>
            <img
              src="https://janet.co.kr/img/common/header/company.png"
              alt="기업서비스"
            />
            <div>기업서비스</div>
          </Link>
        </Content>
      </Navbar>
      <Navbar>
        <Content>
          <NavButton>
            <img
              src="https://janet.co.kr/img/common/header/gnb.png"
              alt="navBtn"
            />
          </NavButton>
          <NavButton width="100px">Top100</NavButton>
          <NavButton width="100px">자격증정보</NavButton>
          <NavButton width="100px">어학/공무원</NavButton>
          <NavButton width="80px">자넷info</NavButton>
          <NavButton width="80px">자넷톡</NavButton>
        </Content>
        <Content>
          <Link>
            <img
              src="https://janet.co.kr/img/common/header/aca.png"
              alt="우리동네학원"
            />
          </Link>
          <Link>
            <img
              src="https://janet.co.kr/img/common/header/commu.png"
              alt="커뮤니티"
            />
          </Link>
          <Link>
            <img
              src="https://janet.co.kr/img/common/header/ai.png"
              alt="자격증ai"
            />
          </Link>
        </Content>
      </Navbar>
    </Wrapper>
  );
}

export default Header;

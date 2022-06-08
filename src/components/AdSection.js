import React from "react";
import styled from "styled-components";
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Section = styled.section`
  padding: 30px 0;
`;
const Wrapper = styled.div`
  width: 1250px;
  display: flex;
  margin: auto;
`;

const Button = styled.button`
  font-size: 20px;
`;

const AdList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

function AdSection() {
  return (
    <Section>
      <Wrapper>
        <Button>
          <BsChevronLeft />
        </Button>
        <AdList>
          <a href="https://janet.co.kr/bbs/board.php?bo_table=bMagazine&wr_id=176">
            <img
              src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_01.png"
              alt="한달만에 취득 가능한 자격증 BEST"
            />
          </a>
          <a href="https://janet.co.kr/bbs/board.php?bo_table=bMagazine&wr_id=170">
            <img
              src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_02.png"
              alt="내게 꼭 필요한 자격증 따기 전 알아둬야 할 것"
            />
          </a>
          <a href="https://janet.co.kr/bbs/board.php?bo_table=bMagazine&wr_id=184">
            <img
              src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_03.png"
              alt="가장 따기 쉬운 자격증"
            />
          </a>
        </AdList>
        <Button>
          <BsChevronRight />
        </Button>
      </Wrapper>
    </Section>
  );
}

export default AdSection;

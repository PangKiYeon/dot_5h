import styled from "styled-components";

const Headbox = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: lightblue;
`;

const Contents = styled.div`
  display: flex;
  width: 96%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div``;

const Menubox = styled.div`
  display: flex;
`;

const Menutitle = styled.div`
  margin-left: 30px;
`;

export default function Header() {
  return (
    <Headbox>
      <Contents>
        <Logo>로고 자리</Logo>
        <Menubox>
          <Menutitle>메뉴1</Menutitle>
          <Menutitle>메뉴2</Menutitle>
        </Menubox>
      </Contents>
    </Headbox>
  );
}

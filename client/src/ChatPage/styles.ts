import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 100%;
  max-height: 600px;
  width: 100%;
  max-width: 600px;
  background: #004d40;

  border-radius: 9px;
  input {
    margin-top: 2rem;
    padding: 10px;
    height: 40px;
    border-radius: 9px;
    border: solid #333 1px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0088cc;
    color: #fff;
    border-radius: 9px;
    border: none;
    height: 60px;
    margin-top: 16px;
  }
  ul {
    padding: 8px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Card = styled.div`
  margin-top: 16px;
  height: 100%;
  overflow: auto;
  border: solid #333 1px;
  border-radius: 9px;
  overflow-x: hidden;
  background-image: url(https://fsa.zobj.net/crop.php?r=XiQL_l_FoG520tEhSM7dhZzR59TLGLx-EhKgmn74NNdr7bPpVr-hBIj7Ez8YHLQCILQ_I_zsHrp1r5cGS5qZdHudw3QYO5EPcs3RiKbEwJCJeussDjspCPRTvjRVgK8p32wUy-ujo49iRZ8a);
`;

export const MyMessage = styled.li`
  margin: 12px 18px;
  padding: 10px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-end;
  min-width: 250px;
  background-color: #b5e4afeb;
  color: #000;
  border-radius: 12px 0 12px 12px;
  + li {
    margin-top: 4px;
  }
`;

export const OtherMessage = styled.li`
  margin: 12px 18px;
  padding: 10px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 250px;
  width: 250px;
  background-color: #e8f5e9;
  border-radius: 0 12px 12px 12px;
`;

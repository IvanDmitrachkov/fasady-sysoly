import styled from "styled-components";
import { layout } from "@/styles";

export const Wrapper = styled.div`
  height: 100vh;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  bottom: 0;
  background-color: white;
  z-index: 100;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 24px;
  ${layout}
`;

export const CloseIcon = styled.img`
  width: 20px;
  height: 20px;

  &:hover {
    opacity: 0.8;
  }

  display: inline-block;
  transition: all 0.2s;
  position: relative;
  top: 0;

  &:active {
    top: 3px;
    box-shadow: 0 2px 0 #387796;
    transition: all 0.2s;
  }
`;

export const Shell = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 38px;
`;

export const Title = styled.div`
  font-size: 24px;
  color: #4f4f4f;
  font-weight: 400;
`;

export const Description = styled.div`
  font-size: 20px;
  font-weight: 300;
`;

export const Ul = styled.ul`
  padding-left: 20px;
`;

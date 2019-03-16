import React, { useEffect } from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { animated } from "react-spring";
import ClickOutside from "react-click-outside";
const modalRoot: any = document.getElementById("modal-root");
import COLOR from "../constatns/color";
const Modal = (props: Props) => {
  const { animateProp, onClose } = props;
  const el = document.createElement("div");
  modalRoot.appendChild(el); // componentDidMount前にappendする必要あり
  useEffect(() => {
    return () => {
      modalRoot.removeChild(el);
    };
  }, []);
  return ReactDOM.createPortal(
    <Wrapper>
      <ClickOutside onClickOutside={onClose}>
        <Content style={animateProp}>
          <Header onClick={onClose}>
            <Link>閉じる</Link>
          </Header>
          {props.children}
        </Content>
      </ClickOutside>
    </Wrapper>,
    el
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.3);
  position: fixed;
`;

const Link = styled.p`
color ${COLOR.peachPink};
cursor: pointer;
`;

const Header = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 12px;
`;

const Content = styled(animated.div)`
  position: absolute;
  background-color: white;
  width: 70%;
  height: 80%;
  top: 10%;
  left: 15%;
  border-radius: 16px;
`;

export default Modal;

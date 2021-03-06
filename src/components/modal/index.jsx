import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* background-color: rgba(0, 0, 0, 0.16); */
`;

const Wrapper = styled.div`
    position: fixed;
    //top: 350px;
    top: 35%;
    left: 50%;
    width: calc(100% - 20px);
    /* max-width: ${(props) => (props.className === "popup" ? "380px" : "768px")}; */
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 0px 0px 0px 800px rgba(0, 0, 0, 0.2);
    z-index: 10;
    padding: 1.5rem;
    word-break: keep-all;
`;
const Modal = ({ content }) => {
    return (
        <>
            <ModalOverlay></ModalOverlay>
            <Wrapper>{content}</Wrapper>
        </>
    );
};
export default Modal;

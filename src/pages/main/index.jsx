import React, { useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import mp from "../../assets/main.png";
import ReactHowler from "react-howler";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    padding-top: 3rem;
`;
const TitleText = styled.div`
    font-size: 20px;
    padding: 0.5rem 0;
`;
const moveAnimation = keyframes`
 0% {
     /* transform: scale(0.7); */
  transform: translateX(0%) translateY(0%) rotate(0deg);
 
 }
 50% {
    transform: translateX(125%) translateY(-200%) rotate(0deg);
    animation-timing-function: cubic-bezier(0.33333, 0, 0.66667, 0.33333);
    background: red;
 } 
 100% {
    /* transform: scale(2.0); */
   transform: translateX(255%) translateY(0%) rotate(360deg);
   background: green
 } 
`;
const Circle = styled.div`
    width: 113px;
    height: 113px;
    border-radius: 700px;
    background: pink;
    /* animation-name: ${({ clicked }) =>
        clicked
            ? css`
                  ${moveAnimation};
              `
            : null}; */
    /* animation-name: ${css`
        ${moveAnimation};
    `}; */
    animation: ${moveAnimation} 2s alternate infinite ease-in;
    animation-duration: 3s;
    /* animation-iteration-count: infinite; */
    animation-fill-mode: forwards;
`;

const MainPictureBox = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 300px;
    overflow: hidden;
    margin: 3rem auto;
`;
const MainPicture = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;
const NextButton = styled.div`
    font-size: 15px;
    float: right;
    padding-right: 1rem;
`;

const Main = ({ history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    return (
        <Wrapper>
            <TitleBox>
                <TitleText>내 인생에서</TitleText>
                <TitleText>가장 찬란했던</TitleText>
                <TitleText>순간은</TitleText>
            </TitleBox>
            <Circle></Circle>
            <MainPictureBox>
                <MainPicture src={mp}></MainPicture>
            </MainPictureBox>
            <NextButton onClick={() => movePage("AddText")}>추억 기록하러 가기 -></NextButton>
        </Wrapper>
    );
};

export default Main;

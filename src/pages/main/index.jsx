import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import mp from "../../assets/main.png";

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
            <MainPictureBox>
                <MainPicture src={mp}></MainPicture>
            </MainPictureBox>
            <NextButton onClick={() => movePage("AddText")}>추억 기록하러 가기 -></NextButton>
        </Wrapper>
    );
};

export default Main;

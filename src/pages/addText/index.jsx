import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import egg from "../../assets/egg.png";
import bird from "../../assets/bird.png";
import { setText } from "../../store/memory";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
`;
const TitleText = styled.div`
    font-size: 20px;
    padding: 0.2rem 0;
    text-align: center;
`;
const StateBox = styled.div`
    padding: 1rem 0;
    text-align: center;
`;
const StatePicture = styled.img`
    object-fit: cover;
    width: 100px;
    height: 100px;
`;
const InputBox = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 3rem 0;
`;
const Input = styled.textarea`
    /* border: none;
    width: 100%;
    border-bottom: 1px solid black; */
    box-sizing: border-box;
    min-height: 100px;
    width: 100%;
    margin: 0 auto;
    border: none;
    outline: none;
    resize: none;

    background-attachment: local;
    background-image: linear-gradient(to right, white 10px, transparent 10px), linear-gradient(to left, white 10px, transparent 10px),
        repeating-linear-gradient(white, white 30px, #212121 31px, #212121 31px, white 32px);
    line-height: 31px;
    padding: 8px 10px;
`;
const NextButton = styled.div`
    font-size: 15px;
    float: right;
    padding-right: 1rem;
`;

const AddText = ({ history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    const onTextChange = (e) => {
        setMemory(e.target.value);
        let lines = e.target.value.split("\n");
        if (lines.length > 3 || e.target.value.length > 100) {
            setIsMax(true);
        } else {
            setMaxMemory(e.target.value);
        }
        if (e.target.value === "") {
            setIsTyping(false);
        } else {
            setIsTyping(true);
        }
    };
    const [isTyping, setIsTyping] = useState(false);
    const [memory, setMemory] = useState("");
    const [maxMemory, setMaxMemory] = useState("");
    const [isMax, setIsMax] = useState(false);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            <TitleBox>
                <TitleText>????????? ?????? ????????? ??????,</TitleText>
                <TitleText>??????????????? ?????? ?????????</TitleText>
                <TitleText>????????? ???????????? ?????? ????????? ??????</TitleText>
            </TitleBox>
            <TitleText>??? ???????????? ?????? ???????????? ?????????</TitleText>
            <StateBox>{isTyping ? <StatePicture src={bird}></StatePicture> : <StatePicture src={egg}></StatePicture>}</StateBox>
            <InputBox>
                <Input
                    wrap="hard"
                    rows="3"
                    type="text"
                    value={isMax ? maxMemory : memory}
                    placeholder={"????????? ??????????????????"}
                    onChange={onTextChange}
                ></Input>
            </InputBox>
            <NextButton
                onClick={() => {
                    movePage("AddPicture");
                    dispatch(setText(memory));
                }}
            >
                ?????? ???????????? ?????? ->
            </NextButton>
        </Wrapper>
    );
};

export default AddText;

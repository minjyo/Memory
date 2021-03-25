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
const Input = styled.input`
    border: none;
    width: 100%;
    border-bottom: 1px solid black;
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
        if (e.target.value === "") {
            setIsTyping(false);
        } else {
            setIsTyping(true);
        }
    };
    const [isTyping, setIsTyping] = useState(false);
    const [memory, setMemory] = useState("");

    return (
        <Wrapper>
            <TitleBox>
                <TitleText>누구나 그런 순간이 있죠,</TitleText>
                <TitleText>떠올리기만 해도 행복한</TitleText>
                <TitleText>당신의 이야기가 듣고 싶어요 응애</TitleText>
            </TitleBox>
            <TitleText>내 인생에서 가장 찬란했던 순간은</TitleText>
            <StateBox>{isTyping ? <StatePicture src={bird}></StatePicture> : <StatePicture src={egg}></StatePicture>}</StateBox>
            <InputBox>
                <Input type="text" value={memory} placeholder={"추억을 입력해주세요"} onChange={onTextChange}></Input>
            </InputBox>
            <NextButton
                onClick={() => {
                    movePage("AddPicture");
                    setText(memory);
                }}
            >
                사진 등록하러 가기 ->
            </NextButton>
        </Wrapper>
    );
};

export default AddText;

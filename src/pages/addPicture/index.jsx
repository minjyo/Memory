import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/modal";
import egg from "../../assets/egg.png";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
`;
const ChooseBtn = styled.button`
    width: 100px;
    height: 100px;
    border-radius: 700px;
    border: 1px solid black;
    background: none;
    margin: 60% 2rem;
`;
const PictureModal = styled.div`
    height: 50%;
`;
const PictureImg = styled.img`
    object-fit: cover;
    height: 300px;
    width: 300px;
`;
const PictureInput = styled.input``;
const PictureComplete = styled.button`
    background: none;
    width: 100px;
    height: 50px;
`;

const EmojiModal = styled.div`
    height: 70%;
`;
const EmojiContainer = styled.div`
    height: 100%;
    width: 100%;
    padding-left: 1rem;
    display: flex;
    flex-wrap: wrap;
`;
const Emoji = styled.img`
    width: 20%;
    height: 30%;
    margin: 1rem;
    border: 1px solid black;
`;
const EmojiComplete = styled.button`
    background: none;
    width: 100px;
    height: 50px;
`;
const MemoryBox = styled.div`
    width: 300px;
    height: 200px;
    margin: 0 auto;
    margin-top: 50%;
`;
const Memory = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const NextButton = styled.div`
    font-size: 15px;
    float: right;
    padding-right: 1rem;
`;

const AddPicture = ({ history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    const choosePicture = (e) => {
        let reader = new FileReader();

        reader.onloadend = () => {
            const base64 = reader.result;
            if (base64) {
                setImgBase64(base64.toString());
            }
        };
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            setPicture(e.target.files[0]);
        }
    };
    const [option, setOption] = useState("");
    const [picture, setPicture] = useState(null);
    const [imgBase64, setImgBase64] = useState("");
    const [emoji, setEmoji] = useState(null);

    return (
        <Wrapper>
            {option === "picture" ? (
                <Modal
                    content={
                        <PictureModal>
                            <PictureImg src={imgBase64} alt="" />
                            <PictureInput
                                type="file"
                                accept="image/jpg,impge/png,image/jpeg,image/gif"
                                name="picture"
                                onChange={choosePicture}
                            ></PictureInput>
                            <PictureComplete onClick={() => setOption("select")}>완료</PictureComplete>
                        </PictureModal>
                    }
                ></Modal>
            ) : option === "emoji" ? (
                <Modal
                    content={
                        <EmojiModal>
                            <EmojiContainer>
                                <Emoji onClick={() => setEmoji(egg)} src={egg}></Emoji>
                                <Emoji onClick={() => setEmoji(egg)} src={egg}></Emoji>
                                <Emoji onClick={() => setEmoji(egg)} src={egg}></Emoji>
                                <Emoji onClick={() => setEmoji(egg)} src={egg}></Emoji>
                                <Emoji onClick={() => setEmoji(egg)} src={egg}></Emoji>
                                <Emoji onClick={() => setEmoji(egg)} src={egg}></Emoji>
                            </EmojiContainer>
                            <EmojiComplete onClick={() => setOption("select")}>완료</EmojiComplete>
                        </EmojiModal>
                    }
                ></Modal>
            ) : option === "select" ? (
                <>
                    <MemoryBox>{imgBase64 === "" ? <Memory src={emoji}></Memory> : <Memory src={imgBase64}></Memory>}</MemoryBox>
                    <NextButton onClick={() => movePage("Result")}>사진 저장하러 가기 -></NextButton>
                </>
            ) : (
                <>
                    <ChooseBtn onClick={() => setOption("picture")}>사진 선택</ChooseBtn>
                    <ChooseBtn onClick={() => setOption("emoji")}>이모지 선택</ChooseBtn>
                </>
            )}
        </Wrapper>
    );
};

export default AddPicture;

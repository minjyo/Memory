import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import FileSaver from "file-saver";
import html2canvas from "html2canvas";
import { useScreenshot, createFileName } from "use-react-screenshot";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const Content = styled.div``;
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
const MemoryText = styled.div`
    font-size: 25px;
    font-weight: bold;
`;
const MemoryPictureBox = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 300px;
    overflow: hidden;
    margin: 3rem auto;
`;
const MemoryPicture = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;
const DownloadBtn = styled.button`
    font-size: 15px;
    float: right;
    margin-right: 1rem;
    background: none;
    width: 150px;
`;

const Result = ({ history }) => {
    const text = useSelector((state) => state.memory.text);
    const img = useSelector((state) => state.memory.img);

    const movePage = (page) => {
        history.push(`/${page}`);
    };

    const ref = useRef();
    console.log(ref);
    const [screen, takeScreenshot] = useScreenshot({
        type: "image/png",
        quality: 1.0,
    });
    const download = (screen, { name = "memory", extension = "png" } = {}) => {
        const a = document.createElement("a");
        a.href = screen;
        a.download = createFileName(extension, name);
        a.click();
    };
    const getImage = () => takeScreenshot(ref.current).then(download);
    // const download = () => {
    //     // html2canvas(document.body).then(function (canvas) {
    //     //     document.body.appendChild(canvas);
    //     // });
    //     FileSaver.saveAs(screen, "memory.png");
    // };

    return (
        <Wrapper>
            <Content ref={ref}>
                <TitleBox>
                    <TitleText>내 인생에서</TitleText>
                    <TitleText>가장 찬란했던</TitleText>
                    <TitleText>순간은</TitleText>
                    <MemoryText>{text}</MemoryText>
                </TitleBox>
                <MemoryPictureBox>
                    <MemoryPicture src={img}></MemoryPicture>
                </MemoryPictureBox>
            </Content>

            <DownloadBtn
                onClick={() => {
                    ref.current && ref.current.focus();
                    getImage();
                    download();
                }}
            >
                이미지 다운로드
            </DownloadBtn>
        </Wrapper>
    );
};

export default Result;

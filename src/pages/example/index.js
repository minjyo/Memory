import { useEffect } from "react";
import useSound from "./useSound";
import effectSound from "./effectSound";
import BGM from "../../sound/bgm.mp3";

const Example = () => {
    // BGM 재생
    useSound(BGM, 1, 2000);

    // 효과음 할당
    // 재생이 필요한 시점에 es.play();
    const es = effectSound(BGM, 1);

    // return <button onClick={() => es1.play()}>재생</button>;
};

export default Example;

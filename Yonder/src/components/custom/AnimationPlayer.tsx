import { useState, useEffect } from "react";
import YonderImage, { YonderImageScale } from "../base/YonderImage";

interface Props {
    frames: string[];
    frameDuration?: number;
    width?: number | string;
    height?: number | string;
    scale?: YonderImageScale;
    style?: React.CSSProperties;
}

const AnimationPlayer: React.FC<Props> = ({
    frames,
    frameDuration = 200,
    width = undefined,
    height = undefined,
    scale = YonderImageScale.scaleToFit,
    style,
}) => {
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
        }, frameDuration);

        return () => clearInterval(intervalId);
    }, [frameDuration, frames.length]);

    return (
        <YonderImage
            fileName={frames.length === 1 ? frames[0] : frames[frameIndex]}
            width={width}
            height={height}
            style={style}
            scale={scale}
        />
    );
};

export default AnimationPlayer;

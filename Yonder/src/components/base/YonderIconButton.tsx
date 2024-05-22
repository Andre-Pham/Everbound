import React, { useState } from "react";
import YonderColor from "../styling/color/YonderColor";
import YonderImage, { YonderImageScale } from "./YonderImage";
import YonderIcon from "./YonderIcon";
import YonderCSS from "../styling/YonderCSS";

interface Props {
    color: YonderColor;
    iconPath?: string; // https://pictogrammers.com/library/mdi/
    iconColor?: YonderColor;
    fileName?: string;
    size: number;
    onlyIcon?: boolean;
    style?: React.CSSProperties;
    onPress?: () => void;
}

const YonderIconButton: React.FC<Props> = ({
    color,
    iconPath = undefined,
    iconColor = undefined,
    fileName = undefined,
    size,
    onlyIcon = false,
    style,
    onPress,
}) => {
    const [pressed, setPressed] = useState(false);
    const [touched, setTouched] = useState(false);

    const handleMouseDown = () => {
        setPressed(true);
    };

    const handleMouseExit = () => {
        setPressed(false);
    };

    const handleTouched = () => {
        setTouched(true);
    };

    const handleUntouched = () => {
        setTouched(false);
    };

    return (
        <button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseExit}
            onMouseLeave={handleMouseExit}
            onTouchStart={handleTouched}
            onTouchEnd={handleUntouched}
            onTouchCancel={handleUntouched}
            onClick={onPress}
            style={{
                padding: 0,
                borderRadius: "50px",
                backgroundColor: color.getColor(),
                width: onlyIcon ? 0 : size,
                height: onlyIcon ? 0 : size,
                justifyContent: "center",
                display: "flex",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.1s",
                transform: pressed || touched ? "scale(0.95)" : "scale(1)",
                ...YonderCSS.diableSelection,
                ...style,
            }}
        >
            {fileName != undefined ? (
                <YonderImage
                    fileName={fileName}
                    width={(size * 1.8) / 3.0}
                    height={(size * 1.8) / 3.0}
                    scale={YonderImageScale.scaleToFit}
                    style={{
                        alignSelf: "center",
                        minHeight: size,
                    }}
                />
            ) : undefined}

            {iconPath != undefined ? (
                <YonderIcon
                    iconPath={iconPath}
                    size={(size * 2.2) / 3.0}
                    color={iconColor ?? new YonderColor("#ffffff")}
                    style={{
                        alignSelf: "center",
                        minHeight: size,
                    }}
                />
            ) : undefined}
        </button>
    );
};

export default YonderIconButton;

import React from "react";
import YonderColor from "../styling/color/YonderColor";
import Icon from "@mdi/react";

interface Props {
    // Icon path (https://pictogrammers.com/library/mdi/)
    iconPath: string;
    // Icon fill color
    color?: YonderColor;
    // Icon size
    size: number;
    // Custom style
    style?: React.CSSProperties;
}

const YonderIcon: React.FC<Props> = ({ iconPath, color, size, style }) => {
    return <Icon path={iconPath} color={color?.getColor()} style={{ width: size, height: size, ...style }} />;
};

export default YonderIcon;

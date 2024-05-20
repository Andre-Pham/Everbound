import React from "react";

interface Props {
    fileName: string;
    flexVertical: boolean;
    draggable?: boolean;
    style?: React.CSSProperties;
}

const YonderFlexImage: React.FC<Props> = ({ fileName, flexVertical, draggable = false, style }) => {
    return (
        <img
            src={`${import.meta.env.BASE_URL}images/${fileName}`}
            alt={fileName}
            draggable={draggable}
            style={{
                height: flexVertical ? "100%" : "auto",
                width: flexVertical ? "auto" : "100%",
                aspectRatio: "1",
                objectFit: "contain",
                ...style,
            }}
        />
    );
};

export default YonderFlexImage;

import React, { useEffect, useState } from "react";
import { UnreachableCaseError } from "../../language/errors/UnreachableCaseError";

export enum YonderImageScale {
    none,
    scaleToFit,
    scaleToFill,
    scaleToFillCrop,
}

interface Props {
    fileName: string;
    width?: number | string;
    height?: number | string;
    scale?: YonderImageScale;
    draggable?: boolean;
    style?: React.CSSProperties;
}

const YonderImage: React.FC<Props> = ({
    fileName,
    width = "auto",
    height = "auto",
    scale = YonderImageScale.none,
    draggable = false,
    style,
}) => {
    const [size, setSize] = useState<{ width?: number | string; height?: number | string }>({
        width: width,
        height: height,
    });
    const [resizeMode, setResizeMode] = useState<"fill" | "contain" | "cover" | "none" | "scale-down" | undefined>(
        undefined,
    );

    const handleImageLoaded = (event: any) => {
        if (scale == YonderImageScale.scaleToFill && typeof width == "number" && typeof height == "number") {
            if (width > height) {
                setSize({ width: width, height: undefined });
            } else {
                setSize({
                    width: (event.target.naturalWidth * height) / event.target.naturalHeight,
                    height: undefined,
                });
            }
        }
    };

    // NOTE: Don't assign these values to the enum, since there are duplicates
    useEffect(() => {
        switch (scale) {
            case YonderImageScale.none:
                setResizeMode("fill");
                break;
            case YonderImageScale.scaleToFit:
                setResizeMode("contain");
                break;
            case YonderImageScale.scaleToFill:
                setResizeMode("cover");
                break;
            case YonderImageScale.scaleToFillCrop:
                setResizeMode("cover");
                break;
            default:
                throw new UnreachableCaseError(scale);
        }
    }, []);

    return (
        <img
            src={`${import.meta.env.BASE_URL}images/${fileName}`}
            alt={fileName}
            onLoad={handleImageLoaded}
            draggable={draggable}
            style={{
                objectFit: resizeMode,
                width: size.width,
                height: size.height,
                ...style,
            }}
        />
    );
};

export default YonderImage;

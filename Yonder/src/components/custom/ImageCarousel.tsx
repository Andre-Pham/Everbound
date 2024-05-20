import React, { useState, CSSProperties, useEffect } from "react";
import Yonder from "../../language/Functions";

interface Props {
    imagePaths: string[];
    visibleImagesCount?: number;
    imageSpacing?: number;
    style?: React.CSSProperties;
}

const ImageCarousel: React.FC<Props> = ({ imagePaths, visibleImagesCount = 3, imageSpacing = 10, style }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const handlePrevClick = () => {
        setTransitionEnabled(true);
        setCurrentIndex((prevIndex) => Math.max(prevIndex - visibleImagesCount, 0));
    };

    const handleNextClick = () => {
        setTransitionEnabled(true);
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + visibleImagesCount, imagePaths.length - visibleImagesCount),
        );
    };

    useEffect(() => {
        setTransitionEnabled(false);
        setCurrentIndex((prevIndex) => Yonder.boundToRange(prevIndex, 0, imagePaths.length - visibleImagesCount));
    }, [visibleImagesCount, imagePaths]);

    const calculateTransformOffset = (): number => {
        if (visibleImagesCount <= 1) {
            return imageSpacing * currentIndex;
        } else {
            return (
                currentIndex *
                ((imageSpacing * (visibleImagesCount - 1)) / visibleImagesCount / (visibleImagesCount - 1))
            );
        }
    };

    const carouselButtonStyle: CSSProperties = {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        border: "none",
        color: "white",
        cursor: "pointer",
        fontSize: "2rem",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                position: "relative",
                ...style,
            }}
        >
            <button style={{ ...carouselButtonStyle, left: "10px" }} onClick={handlePrevClick}>
                ◀
            </button>
            <div
                style={{
                    overflow: "hidden",
                    width: "100%",
                    borderRadius: 8,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        transition: transitionEnabled ? "transform 0.55s cubic-bezier(0.5, 0.1, 0.1, 1.0)" : "none",
                        transform: `translateX(calc(-${(currentIndex / visibleImagesCount) * 100}% - ${calculateTransformOffset()}px))`,
                    }}
                >
                    {imagePaths.map((imagePath, index) => (
                        <img
                            key={index}
                            src={`${import.meta.env.BASE_URL}images/${imagePath}`}
                            alt={`Screenshot ${index + 1}`}
                            draggable={false}
                            style={{
                                minWidth: `calc(${100 / visibleImagesCount}% - ${(imageSpacing * (visibleImagesCount - 1)) / visibleImagesCount}px)`,
                                maxWidth: `calc(${100 / visibleImagesCount}% - ${(imageSpacing * (visibleImagesCount - 1)) / visibleImagesCount}px)`,
                                flexShrink: 0,
                                borderRadius: 8,
                                marginRight: imageSpacing,
                            }}
                        />
                    ))}
                </div>
            </div>
            <button style={{ ...carouselButtonStyle, right: "10px" }} onClick={handleNextClick}>
                ▶
            </button>
        </div>
    );
};

export default ImageCarousel;

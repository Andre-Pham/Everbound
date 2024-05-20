import React, { useState, useEffect } from "react";
import { useDrag } from "@use-gesture/react";
import Yonder from "../../language/Functions";
import HStack from "../containers/Stacks/HStack";
import YonderTypography from "../styling/YonderTypography";
import YonderStyledButton from "../base/YonderStyledButton";
import HGap from "../containers/Spacing/HGap";
import { isMobile } from "react-device-detect";
import VStack from "../containers/Stacks/VStack";
import Spacer from "../containers/Spacing/Spacer";
import YonderText from "../base/YonderText";
import useWindowResize from "../hooks/useWindowResize";

interface Props {
    imagePaths: string[];
    visibleImagesCount?: number;
    imageSpacing?: number;
    style?: React.CSSProperties;
}

const ImageCarousel: React.FC<Props> = ({ imagePaths, visibleImagesCount = 3, imageSpacing = 10, style }) => {
    const shouldRenderVertically = (): boolean => {
        return window.innerWidth <= 500;
    };

    const pressTransition = "transform 0.55s cubic-bezier(0.5, 0.1, 0.1, 1.0)";
    const noTransition = "none";
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, setTransition] = useState(pressTransition);
    const [dragOffset, setDragOffset] = useState(0);
    const [renderVertically, setRenderVertically] = useState(shouldRenderVertically());

    useWindowResize(() => {
        setRenderVertically(shouldRenderVertically());
    });

    const handlePrevClick = (transition: string) => {
        setTransition(transition);
        setCurrentIndex((prevIndex) => Math.max(prevIndex - visibleImagesCount, 0));
    };

    const handleNextClick = (transition: string) => {
        setTransition(transition);
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + visibleImagesCount, imagePaths.length - visibleImagesCount),
        );
    };

    useEffect(() => {
        setTransition(noTransition);
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

    const generateDragTransition = (velocity: number): string => {
        const time = -0.5 * velocity + 1.2;
        const boundedTime = Yonder.boundToRange(time, 0.2, 1.2);
        return `transform ${boundedTime}s cubic-bezier(0.1, 0.1, 0.1, 1.0)`;
    };

    const prevClickDisabled = (): boolean => {
        return currentIndex <= 0;
    };

    const nextClickDisabled = (): boolean => {
        return currentIndex >= imagePaths.length - visibleImagesCount;
    };

    const bind = useDrag(({ movement: [mx], distance, cancel, active, velocity }) => {
        // Note: use argument `down` to check if the finger is down, irrespective of the drag being cancelled
        if (active) {
            setTransition(noTransition);
            setDragOffset(mx);
            const draggedLeft = mx < 0;
            const draggedRight = mx > 0;
            if (distance[0] > 120 || velocity[0] * distance[0] > 40) {
                if (draggedRight && !prevClickDisabled()) {
                    cancel();
                    handlePrevClick(generateDragTransition(velocity[0]));
                } else if (draggedLeft && !nextClickDisabled()) {
                    cancel();
                    handleNextClick(generateDragTransition(velocity[0]));
                }
            }
        } else {
            setTransition(generateDragTransition(velocity[0]));
            setDragOffset(0);
        }
    });

    if (renderVertically) {
        return (
            <VStack spacing={24} style={{ width: "90%" }}>
                <div
                    style={{
                        overflow: "hidden",
                        width: "100%",
                        borderRadius: 8,
                    }}
                >
                    <div
                        {...(isMobile ? bind() : {})}
                        style={{
                            display: "flex",
                            transition: transition,
                            transform: `translateX(calc(-${(currentIndex / visibleImagesCount) * 100}% - ${calculateTransformOffset()}px + ${dragOffset}px))`,
                            touchAction: "none",
                        }}
                    >
                        {imagePaths.map((imagePath, index) => (
                            <img
                                key={index}
                                src={`${import.meta.env.BASE_URL}images/${imagePath}`}
                                alt={imagePath}
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

                <HStack style={{ alignItems: "center" }}>
                    <YonderStyledButton
                        label="<"
                        typography={YonderTypography.button}
                        onPress={() => {
                            handlePrevClick(pressTransition);
                        }}
                        width={100}
                        disabled={prevClickDisabled()}
                    />

                    <Spacer />

                    <YonderText typography={YonderTypography.subscript} wide={false}>
                        {`${currentIndex + 1} of ${imagePaths.length}`}
                    </YonderText>

                    <Spacer />

                    <YonderStyledButton
                        label=">"
                        typography={YonderTypography.button}
                        onPress={() => {
                            handleNextClick(pressTransition);
                        }}
                        width={100}
                        disabled={nextClickDisabled()}
                    />
                </HStack>
            </VStack>
        );
    } else {
        return (
            <HStack
                style={{
                    alignItems: "center",
                    ...style,
                }}
            >
                <YonderStyledButton
                    label="<"
                    typography={YonderTypography.button}
                    onPress={() => {
                        handlePrevClick(pressTransition);
                    }}
                    width={60}
                    disabled={prevClickDisabled()}
                />

                <HGap size={12} />

                <div
                    style={{
                        overflow: "hidden",
                        width: "calc(100% - 60px - 60px - 12px - 12px)",
                        borderRadius: 8,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            transition: transition,
                            transform: `translateX(calc(-${(currentIndex / visibleImagesCount) * 100}% - ${calculateTransformOffset()}px + ${dragOffset}px))`,
                            touchAction: "none",
                        }}
                    >
                        {imagePaths.map((imagePath, index) => (
                            <img
                                key={index}
                                src={`${import.meta.env.BASE_URL}images/${imagePath}`}
                                alt={imagePath}
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

                <HGap size={12} />

                <YonderStyledButton
                    label=">"
                    typography={YonderTypography.button}
                    onPress={() => {
                        handleNextClick(pressTransition);
                    }}
                    width={60}
                    disabled={nextClickDisabled()}
                />
            </HStack>
        );
    }
};

export default ImageCarousel;

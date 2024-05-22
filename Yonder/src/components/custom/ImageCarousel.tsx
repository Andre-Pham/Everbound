import React, { useState, useEffect, useRef } from "react";
import Yonder from "../../language/Functions";
import HStack from "../containers/Stacks/HStack";
import YonderTypography from "../styling/YonderTypography";
import YonderStyledButton from "../base/YonderStyledButton";
import HGap from "../containers/Spacing/HGap";
import { isMobile, isMobileOnly } from "react-device-detect";
import VStack from "../containers/Stacks/VStack";
import Spacer from "../containers/Spacing/Spacer";
import YonderText from "../base/YonderText";
import useWindowResize from "../hooks/useWindowResize";
import styled from "styled-components";

interface Props {
    imagePaths: string[];
    visibleImagesCount?: number;
    imageSpacing?: number;
    style?: React.CSSProperties;
}

const DivWithoutScrollBar = styled.div`
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
        display: none;
    }

    /* Hide scrollbar for IE, Edge */
    -ms-overflow-style: none;

    /* Hide scrollbar for Firefox */
    scrollbar-width: none;
`;

const ImageCarousel: React.FC<Props> = ({ imagePaths, visibleImagesCount = 3, imageSpacing = 10, style }) => {
    const shouldRenderMobile = (): boolean => {
        return isMobileOnly || (isMobile && visibleImagesCount === 1);
    };
    const shouldRenderPortrait = (): boolean => {
        return window.innerWidth <= 500;
    };
    const pressTransition = "transform 0.55s cubic-bezier(0.5, 0.1, 0.1, 1.0)";
    const noTransition = "none";
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, setTransition] = useState(pressTransition);
    const [renderMobile, setRenderMobile] = useState(shouldRenderMobile());
    const [renderPortrait, setRenderPortrait] = useState(shouldRenderPortrait());
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useWindowResize(() => {
        setRenderMobile(shouldRenderMobile());
        setRenderPortrait(shouldRenderPortrait());
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

    const prevClickDisabled = (): boolean => {
        return currentIndex <= 0;
    };

    const nextClickDisabled = (): boolean => {
        return currentIndex >= imagePaths.length - visibleImagesCount;
    };

    const scrollToNext = () => {
        if (scrollContainerRef.current) {
            const nextIndex = (currentIndex + 1) % imagePaths.length;
            const nextImage = scrollContainerRef.current.children[nextIndex] as HTMLElement;
            if (nextImage) {
                const parentContainer = scrollContainerRef.current;
                const nextImageLeftPosition = nextImage.offsetLeft;
                parentContainer.scrollTo({
                    left: nextImageLeftPosition,
                    behavior: "smooth",
                });
            }
        }
    };

    const scrollToPrevious = () => {
        if (scrollContainerRef.current) {
            const previousIndex = Math.max(0, currentIndex - 1);
            const nextImage = scrollContainerRef.current.children[previousIndex] as HTMLElement;
            if (nextImage) {
                const parentContainer = scrollContainerRef.current;
                const nextImageLeftPosition = nextImage.offsetLeft;
                parentContainer.scrollTo({
                    left: nextImageLeftPosition,
                    behavior: "smooth",
                });
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const newIndex = Math.round((container.scrollLeft / container.clientWidth) * visibleImagesCount);
                setCurrentIndex(Yonder.boundToRange(newIndex, 0, imagePaths.length - 1));
            }
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, [visibleImagesCount]);

    if (renderMobile) {
        return (
            <VStack
                spacing={24}
                style={{
                    width: "90%",
                    ...style,
                }}
            >
                <DivWithoutScrollBar
                    ref={scrollContainerRef}
                    style={{
                        overflow: "auto",
                        display: "flex",
                        scrollSnapType: "x mandatory",
                        borderRadius: 8,
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
                                scrollSnapAlign: "start",
                            }}
                        />
                    ))}
                </DivWithoutScrollBar>

                <HStack style={{ alignItems: "center" }}>
                    <YonderStyledButton
                        label="<"
                        typography={YonderTypography.button}
                        onPress={scrollToPrevious}
                        width={100}
                        disabled={prevClickDisabled()}
                    />

                    <Spacer />

                    <YonderText typography={YonderTypography.subscript} wide={false}>
                        {`${Yonder.boundToRange(currentIndex + 1, 1, imagePaths.length)} of ${imagePaths.length}`}
                    </YonderText>

                    <Spacer />

                    <YonderStyledButton
                        label=">"
                        typography={YonderTypography.button}
                        onPress={scrollToNext}
                        width={100}
                        disabled={nextClickDisabled()}
                    />
                </HStack>
            </VStack>
        );
    } else if (renderPortrait) {
        return (
            <VStack
                spacing={24}
                style={{
                    width: "90%",
                    ...style,
                }}
            >
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
                            transition: transition,
                            transform: `translateX(calc(-${(currentIndex / visibleImagesCount) * 100}% - ${calculateTransformOffset()}px))`,
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

                <HStack style={{ alignItems: "center", width: "100%" }}>
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
                        {visibleImagesCount <= 1
                            ? `${currentIndex + 1} of ${imagePaths.length}`
                            : `${currentIndex + 1}-${currentIndex + visibleImagesCount} of ${imagePaths.length}`}
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
            <VStack
                spacing={20}
                style={{
                    alignItems: "center",
                    ...style,
                }}
            >
                <HStack
                    style={{
                        alignItems: "center",
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
                                transform: `translateX(calc(-${(currentIndex / visibleImagesCount) * 100}% - ${calculateTransformOffset()}px))`,
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

                <YonderText typography={YonderTypography.subscript} wide={false}>
                    {visibleImagesCount <= 1
                        ? `${currentIndex + 1} of ${imagePaths.length}`
                        : `${currentIndex + 1}-${currentIndex + visibleImagesCount} of ${imagePaths.length}`}
                </YonderText>
            </VStack>
        );
    }
};

export default ImageCarousel;

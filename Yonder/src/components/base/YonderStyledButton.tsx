import React, { useState } from "react";
import YonderTypographyConfig from "../styling/typography/YonderTypographyConfig";
import YonderText from "./YonderText";
import Icon from "@mdi/react";
import YonderCSS from "../styling/YonderCSS";
import YonderColors from "../styling/YonderColors";
import VStack from "../containers/Stacks/VStack";

interface Props {
    label: string;
    typography: YonderTypographyConfig;
    iconPath?: string; // https://pictogrammers.com/library/mdi/
    disabled?: boolean;
    width?: number;
    style?: React.CSSProperties;
    iconStyle?: React.CSSProperties;
    onPress: () => void;
}

const YonderStyledButton: React.FC<Props> = ({
    label,
    typography,
    iconPath = undefined,
    disabled = false,
    width,
    style,
    iconStyle,
    onPress,
}) => {
    const [pressed, setPressed] = useState(false);
    const [touched, setTouched] = useState(false);

    const handleMouseDown = () => {
        if (!disabled) {
            setPressed(true);
        }
    };

    const handleMouseUp = () => {
        setPressed(false);
    };

    const handleMouseLeave = () => {
        setPressed(false);
    };

    const handleTouched = () => {
        if (!disabled) {
            setTouched(true);
        }
    };

    const handleTouchEnd = () => {
        setTouched(false);
    };

    const handleTouchCancel = () => {
        setTouched(false);
    };

    const handleOnClick = () => {
        if (!disabled) {
            onPress();
        }
    };

    return (
        <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouched}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            onClick={handleOnClick}
            style={{
                width: width ?? "100%",
                height: 64,
                position: "relative",
                ...style,
            }}
        >
            <div
                style={{
                    opacity: disabled ? 0.5 : 1,
                    width: "100%",
                    cursor: disabled ? "default" : "pointer",
                    position: "absolute",
                    bottom: 0,
                }}
            >
                <VStack
                    style={{
                        width: "calc(100% - 8px)",
                        height: "100%",
                        border: `4px solid ${YonderColors.buttonOutline.getColor()}`,
                    }}
                >
                    <button
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "44px",
                            backgroundColor: YonderColors.buttonFill.getColor(),
                            cursor: disabled ? "default" : "pointer",
                            border: "none",
                            ...YonderCSS.diableSelection,
                        }}
                    >
                        {iconPath && (
                            <Icon
                                path={iconPath}
                                color={typography.color}
                                size={1.0}
                                style={{ paddingRight: "8px", ...iconStyle }}
                            />
                        )}

                        <YonderText typography={typography} wide={false}>
                            {label}
                        </YonderText>
                    </button>

                    <div
                        style={{
                            transition: "height 0.1s",
                            height: pressed || touched ? "0px" : "12px",
                            width: "100%",
                            backgroundColor: YonderColors.buttonRise.getColor(),
                        }}
                    />
                </VStack>
            </div>
        </div>
    );
};

export default YonderStyledButton;

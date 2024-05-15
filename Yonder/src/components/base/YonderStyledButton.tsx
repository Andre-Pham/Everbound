import React, { useState } from "react";
import YonderTypographyConfig from "../styling/typography/YonderTypographyConfig";
import YonderText from "./YonderText";
import Icon from "@mdi/react";
import YonderCSS from "../styling/YonderCSS";
import YonderColors from "../styling/YonderColors";
import VStack from "../containers/Stacks/VStack";
import HStack from "../containers/Stacks/HStack";

interface Props {
    label: string;
    typography: YonderTypographyConfig;
    iconPath?: string; // https://pictogrammers.com/library/mdi/
    disabled?: boolean;
    wide?: boolean;
    style?: React.CSSProperties;
    onPress: () => void;
}

const YonderStyledButton: React.FC<Props> = ({
    label,
    typography,
    iconPath = undefined,
    disabled = false,
    wide = true,
    style,
    onPress,
}) => {
    const [pressed, setPressed] = useState(false);
    const [touched, setTouched] = useState(false);

    const handleMouseDown = () => {
        setPressed(true);
    };

    const handleMouseUp = () => {
        onPress && onPress();
        setPressed(false);
    };

    const handleMouseLeave = () => {
        setPressed(false);
    };

    const handleTouched = () => {
        setTouched(true);
    };

    const handleTouchEnd = () => {
        onPress && onPress();
        setTouched(false);
    };

    const handleTouchCancel = () => {
        setTouched(false);
    };

    return (
        <div
            style={{
                width: "100%",
                height: 64,
                position: "relative",
            }}
        >
            <div
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouched}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchCancel}
                style={{
                    opacity: disabled ? 0.5 : 1,
                    width: wide ? "100%" : undefined,
                    alignSelf: wide ? undefined : "center",
                    cursor: disabled ? "default" : "pointer",
                    transition: "transform 0.1s",
                    position: "absolute",
                    bottom: 0,
                    // transform: pressed || touched ? "translateY(12px)" : "translateY(0px)",
                    ...style,
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
                        onClick={!disabled ? onPress : undefined}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "44px",
                            padding: "0px 22px",
                            backgroundColor: YonderColors.buttonFill.getColor(),
                            cursor: disabled ? "default" : "pointer",
                            border: "none",
                            // transition: "transform 0.1s",
                            // transform: pressed || touched ? "translateY(12px)" : "translateY(0px)",
                            ...YonderCSS.diableSelection,
                        }}
                        disabled={disabled}
                    >
                        {iconPath && (
                            <Icon path={iconPath} color={typography.color} size={0.8} style={{ paddingRight: "6px" }} />
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

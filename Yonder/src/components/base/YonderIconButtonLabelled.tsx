import React from "react";
import YonderColor from "../styling/color/YonderColor";
import VStack from "../containers/Stacks/VStack";
import YonderIconButton from "./YonderIconButton";
import YonderText from "./YonderText";
import YonderTypography from "../styling/YonderTypography";

interface Props {
    color: YonderColor;
    iconPath?: string; // https://pictogrammers.com/library/mdi/
    iconColor?: YonderColor;
    fileName?: string;
    label: string;
    size: number;
    style?: React.CSSProperties;
    onPress: () => void;
}

const YonderIconButtonLabelled: React.FC<Props> = ({
    color,
    iconPath = undefined,
    iconColor = undefined,
    fileName = undefined,
    label,
    size,
    style,
    onPress,
}) => {
    return (
        <VStack
            spacing={5}
            style={{
                alignItems: "center",
                alignSelf: "flex-start",
                // Adjsuts frame to match label (positioned aboslute)
                // Tested - it does scale (both the padding and the absolute positioning)
                paddingBottom: 16,
                ...style,
            }}
        >
            <YonderIconButton
                iconPath={iconPath}
                iconColor={iconColor}
                fileName={fileName}
                color={color}
                size={size}
                onPress={onPress}
            />

            <div
                style={{
                    position: "absolute",
                    marginTop: size + 2,
                    flex: 1,
                    textAlign: "center",
                }}
            >
                <YonderText
                    typography={YonderTypography.subscriptLabel}
                    style={{ alignSelf: "center", textAlign: "center" }}
                >
                    {label}
                </YonderText>
            </div>
        </VStack>
    );
};

export default YonderIconButtonLabelled;

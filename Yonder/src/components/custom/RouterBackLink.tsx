import React, { useState } from "react";
import YonderTypographyConfig from "../styling/typography/YonderTypographyConfig";
import { YonderFontWeight } from "../styling/typography/YonderFontWeight";
import { useNavigate } from "react-router-dom";
import RouterNavigator from "../../services/RouterNavigator";

interface Props {
    // Text or other components to be embedded
    children: React.ReactNode;
    // Typography applied
    typography: YonderTypographyConfig;
    // If the component should expand to take up available horizontal space
    wide?: boolean;
    // If the frame should exactly match the text
    verticalWrap?: boolean;
    // Custom styling
    style?: React.CSSProperties;
}

const RouterBackLink: React.FC<Props> = ({ children, typography, verticalWrap = false, wide = true, style }) => {
    let linkTypography = typography.withWeight(YonderFontWeight.bold).withUnderline(true);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        // Span means the frame doesn't extend past the text (i.e. can be clicked past the text)
        <span
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
            style={{
                opacity: isHovered ? 1.0 : 0.4,
                transition: "opacity 0.3s",
                width: wide ? "100%" : undefined,
                justifyItems: wide == undefined ? undefined : "center",
                lineHeight: verticalWrap ? 1 : undefined,
                overflowWrap: "anywhere", // Overflows to the next line if too long to fit
                ...linkTypography.getStylesheet(),
                cursor: "pointer",
                ...style,
            }}
            onClick={() => {
                RouterNavigator.inst.navigateBack(navigate);
            }}
        >
            {children}
        </span>
    );
};

export default RouterBackLink;

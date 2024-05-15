import React, { useState } from "react";
import YonderTypographyConfig from "../styling/typography/YonderTypographyConfig";
import { YonderFontWeight } from "../styling/typography/YonderFontWeight";
import { Link } from "react-router-dom";

interface Props {
    // Text or other components to be embedded
    children: React.ReactNode;
    // The path to naviagte to
    path: string;
    // Typography applied
    typography: YonderTypographyConfig;
    // If the component should expand to take up available horizontal space
    wide?: boolean;
    // If the frame should exactly match the text
    verticalWrap?: boolean;
    // Custom styling
    style?: React.CSSProperties;
}

const RouterLink: React.FC<Props> = ({ children, path, typography, verticalWrap = false, wide = true, style }) => {
    let linkTypography = typography.withWeight(YonderFontWeight.bold).withUnderline(true);
    const [isHovered, setIsHovered] = useState(false);

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
                ...style,
            }}
        >
            <Link
                to={path}
                style={{
                    width: wide ? "100%" : undefined,
                    justifyItems: wide == undefined ? undefined : "center",
                    lineHeight: verticalWrap ? 1 : undefined,
                    overflowWrap: "anywhere", // Overflows to the next line if too long to fit
                    ...linkTypography.getStylesheet(),
                }}
            >
                {children}
            </Link>
        </span>
    );
};

export default RouterLink;

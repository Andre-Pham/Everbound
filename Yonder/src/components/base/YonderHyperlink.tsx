import React from "react";
import YonderTypographyConfig from "../styling/typography/YonderTypographyConfig";
import { YonderFontWeight } from "../styling/typography/YonderFontWeight";

interface Props {
    // Text or other components to be embedded
    children: React.ReactNode;
    // The URL to open
    url: string;
    // Typography applied
    typography: YonderTypographyConfig;
    // If the component should expand to take up available horizontal space
    wide?: boolean;
    // If the frame should exactly match the text
    verticalWrap?: boolean;
    // Custom styling
    style?: React.CSSProperties;
}

const YonderHyperlink: React.FC<Props> = ({ children, url, typography, verticalWrap = false, wide = true, style }) => {
    let linkTypography = typography.withWeight(YonderFontWeight.bold).withUnderline(true);
    return (
        // Span means the frame doesn't extend past the text (i.e. can be clicked past the text)
        <span style={style}>
            <a
                href={url}
                style={{
                    width: wide ? "100%" : undefined,
                    justifyItems: wide == undefined ? undefined : "center",
                    lineHeight: verticalWrap ? 1 : undefined,
                    overflowWrap: "anywhere", // Overflows to the next line if too long to fit
                    ...linkTypography.getStylesheet(),
                }}
                // Open the link in a new tab or window
                target="_blank"
                // Common practice to ensure that the link is opened securely
                rel="noopener noreferrer"
            >
                {children}
            </a>
        </span>
    );
};

export default YonderHyperlink;

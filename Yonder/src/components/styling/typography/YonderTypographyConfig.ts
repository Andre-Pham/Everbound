import { YonderFontFamily } from "./YonderFontFamily";
import { YonderFontWeight } from "./YonderFontWeight";
import YonderColor from "../color/YonderColor";

class YonderTypographyConfig {
    public size: number;
    public fontFamily: YonderFontFamily;
    // An undefined color allows the component handle the color
    public colorObject: YonderColor | undefined;
    public weight: YonderFontWeight;
    public italic: boolean;
    public underlined: boolean;
    public linedOut: boolean;
    public kerning: number;
    get color(): string | undefined {
        return this.colorObject?.getColor();
    }
    get lineStyle(): "none" | "underline" | "line-through" | "underline line-through" {
        let result = "";
        if (!this.underlined && !this.linedOut) {
            result = "none";
        } else {
            if (this.underlined) {
                result = "underline";
            }
            if (this.linedOut) {
                result = (result + " line-through").trimStart();
            }
        }
        return result as "none" | "underline" | "line-through" | "underline line-through";
    }

    constructor(
        size: number,
        fontFamily: YonderFontFamily,
        color: YonderColor | undefined,
        weight: YonderFontWeight = YonderFontWeight.medium,
        italic: boolean = false,
        underlined: boolean = false,
        linedOut: boolean = false,
        kerning: number = 0,
    ) {
        this.size = size;
        this.fontFamily = fontFamily;
        this.colorObject = color;
        this.weight = weight;
        this.italic = italic;
        this.underlined = underlined;
        this.linedOut = linedOut;
        this.kerning = kerning;
    }

    public withSize(size: number): YonderTypographyConfig {
        this.size = size;
        return this;
    }

    public withColor(color: YonderColor): YonderTypographyConfig {
        this.colorObject = color;
        return this;
    }

    public withWeight(weight: YonderFontWeight): YonderTypographyConfig {
        this.weight = weight;
        return this;
    }

    public withItalic(italic: boolean): YonderTypographyConfig {
        this.italic = italic;
        return this;
    }

    public withUnderline(underline: boolean): YonderTypographyConfig {
        this.underlined = underline;
        return this;
    }

    public withLineOut(lineOut: boolean): YonderTypographyConfig {
        this.linedOut = lineOut;
        return this;
    }

    public getStylesheet(): React.CSSProperties {
        return {
            fontFamily: this.fontFamily,
            fontWeight: this.weight,
            color: this.color || "inherit",
            fontSize: this.size,
            textDecorationLine: this.lineStyle,
            letterSpacing: this.kerning,
            fontStyle: this.italic ? "italic" : "normal",
        };
    }
}

export default YonderTypographyConfig;

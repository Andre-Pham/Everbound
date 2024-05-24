import YonderColors from "./YonderColors";
import { YonderFontFamily } from "./typography/YonderFontFamily";
import { YonderFontWeight } from "./typography/YonderFontWeight";
import YonderTypographyConfig from "./typography/YonderTypographyConfig";

/**
 * Predefined typography to be used application-wide.
 */
class YonderTypography {
    static get title(): YonderTypographyConfig {
        return new YonderTypographyConfig(22, YonderFontFamily.Mx437, YonderColors.textDark, YonderFontWeight.regular);
    }

    static get subheader(): YonderTypographyConfig {
        return new YonderTypographyConfig(24, YonderFontFamily.Mx437, YonderColors.textDark, YonderFontWeight.regular);
    }

    static get header(): YonderTypographyConfig {
        return new YonderTypographyConfig(36, YonderFontFamily.Mx437, YonderColors.textDark, YonderFontWeight.regular);
    }

    static get body(): YonderTypographyConfig {
        return new YonderTypographyConfig(20, YonderFontFamily.Mx437, YonderColors.textDark, YonderFontWeight.regular);
    }

    static get subscript(): YonderTypographyConfig {
        return new YonderTypographyConfig(18, YonderFontFamily.Mx437, YonderColors.textDark, YonderFontWeight.regular);
    }

    static get button(): YonderTypographyConfig {
        return new YonderTypographyConfig(20, YonderFontFamily.Mx437, YonderColors.textDark, YonderFontWeight.regular);
    }

    static get navigationLink(): YonderTypographyConfig {
        return new YonderTypographyConfig(18, YonderFontFamily.Mx437, YonderColors.textDark, YonderFontWeight.regular);
    }
}

export default YonderTypography;

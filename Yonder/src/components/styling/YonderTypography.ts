import YonderColors from "./YonderColors";
import { YonderFontFamily } from "./typography/YonderFontFamily";
import { YonderFontWeight } from "./typography/YonderFontWeight";
import YonderTypographyConfig from "./typography/YonderTypographyConfig";

/**
 * Predefined typography to be used application-wide.
 */
class YonderTypography {
    static get test1(): YonderTypographyConfig {
        return new YonderTypographyConfig(32, YonderFontFamily.Mx437, YonderColors.textDark, YonderFontWeight.regular)
    }

    static get test2(): YonderTypographyConfig {
        return new YonderTypographyConfig(32, YonderFontFamily.Mx437, YonderColors.textDark, YonderFontWeight.black)
    }
}

export default YonderTypography;

import YonderColors from "./YonderColors";
import { YonderFontFamily } from "./typography/YonderFontFamily";
import { YonderFontWeight } from "./typography/YonderFontWeight";
import YonderTypographyConfig from "./typography/YonderTypographyConfig";

/**
 * Predefined typography to be used application-wide.
 */
class YonderTypography {
    static get body(): YonderTypographyConfig {
        return new YonderTypographyConfig(22, YonderFontFamily.Mx437, YonderColors.textDark, YonderFontWeight.regular)
    }
}

export default YonderTypography;

import YonderColor from "./color/YonderColor";

/**
 * Predefined colors to be used application-wide.
 * Colors are defined with a light-mode and an optional dark-mode variant.
 * Colors should be named using light-mode convention, that is, colors should be named according to how they should be read in light mode. "Dark text" is text that is dark in light mode, and light in dark mode.
 */
class YonderColors {
    static get background(): YonderColor {
        return new YonderColor("#000000");
    }

    static get textDark(): YonderColor {
        return new YonderColor("#FFFFFF");
    }

    static get textSemiDark(): YonderColor {
        return new YonderColor("#9191a2");
    }

    static get textLight(): YonderColor {
        return new YonderColor("#000000");
    }

    static get buttonFill(): YonderColor {
        return new YonderColor("#364164");
    }

    static get buttonRise(): YonderColor {
        return new YonderColor("#202A47");
    }

    static get buttonOutline(): YonderColor {
        return new YonderColor("#161F3A");
    }

    static get scrollBar(): YonderColor {
        return new YonderColor("#364164");
    }

    static get scrollBarBackground(): YonderColor {
        return new YonderColor("#10182F");
    }
}

export default YonderColors;

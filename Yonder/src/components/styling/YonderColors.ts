import YonderColor from "./color/YonderColor";

/**
 * Predefined colors to be used application-wide.
 * Colors are defined with a light-mode and an optional dark-mode variant.
 * Colors should be named using light-mode convention, that is, colors should be named according to how they should be read in light mode. "Dark text" is text that is dark in light mode, and light in dark mode.
 */
class YonderColors {
    static get accent(): YonderColor {
        return new YonderColor("#1769ff");
    }

    static get textLightPersistent(): YonderColor {
        return new YonderColor("#f8f9fa");
    }

    static get background(): YonderColor {
        return new YonderColor("#ffffff", "#17171c");
    }

    static get textDark(): YonderColor {
        return new YonderColor("#3f4169", "#e5e5f3");
    }

    static get textSemiDark(): YonderColor {
        return new YonderColor("#9193b0", "#9191a2");
    }

    static get textLight(): YonderColor {
        return new YonderColor("#f8f9fa", "#000000");
    }

    static get fillBackgroundLight(): YonderColor {
        return new YonderColor("#f2f3f9", "#27272f");
    }

    static get fillBackgroundDark(): YonderColor {
        return new YonderColor("#3f4169", "#e0e1e7");
    }

    static get chipBackground(): YonderColor {
        return new YonderColor("#3f4169", "#454552");
    }

    static get behance(): YonderColor {
        return new YonderColor("#1769ff");
    }

    static get gitHub(): YonderColor {
        return new YonderColor("#24292f", "#3f4169");
    }

    static get linkedIn(): YonderColor {
        return new YonderColor("#2d64bc");
    }

    static get scrollBar(): YonderColor {
        return new YonderColor("#bdc0d3", "#616176");
    }
}

export default YonderColors;

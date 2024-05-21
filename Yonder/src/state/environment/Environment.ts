import { isMobile, isMobileOnly } from "react-device-detect";
import YonderDimensions from "../../components/styling/YonderDimensions";

class Environment {
    public static get shouldRenderPortrait(): boolean {
        if (isMobile) {
            const isPortrait = window.innerWidth < window.innerHeight;
            if (isPortrait) {
                return true;
            } else {
                // If we're on a mobile device and we're in landscape, just use screen dimensions
                // Note: .width and .height don't change with orientation so we take the max
                const width = Math.max(window.screen.width, window.screen.height);
                const shouldRenderPortrait = width <= YonderDimensions.screenWidthToRenderPortrait;
                return shouldRenderPortrait;
            }
        } else {
            const shouldRenderPortrait = window.innerWidth <= YonderDimensions.screenWidthToRenderPortrait;
            return shouldRenderPortrait;
        }
    }

    public static get carouselVisibleCount(): number {
        if (isMobileOnly) {
            // If we're on a mobile device, just use screen dimensions
            // Note: .width and .height don't change with orientation so we use .max/.min
            const isPortrait = window.innerWidth < window.innerHeight;
            const width = isPortrait
                ? Math.min(window.screen.width, window.screen.height)
                : Math.max(window.screen.width, window.screen.height);
            if (width <= 500) {
                return 1;
            } else {
                const remainder = width - 500;
                return Math.min(1 + Math.floor(remainder / 250.0), 3);
            }
        } else {
            const width = window.innerWidth;
            if (width <= 500) {
                return 1;
            } else {
                const remainder = width - 500;
                return Math.min(1 + Math.floor(remainder / 250.0), 3);
            }
        }
    }
}

export default Environment;

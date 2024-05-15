import { useEffect } from "react";
import Environment from "../../state/environment/Environment";

function usePortraitRendering(callback: (shouldRenderPortrait: boolean) => void) {
    useEffect(() => {
        const handleResize = () => {
            callback(Environment.shouldRenderPortrait);
        };
        handleResize();
        // Note: on mobile devices, we don't want to re-render unless they change the orientation of the device
        // This is because you don't change the window size on mobile devices (so there's no need to react)
        // AND pinch to zoom occurs on mobile, which we don't want to trigger re-renders (it's intrusive)
        window.addEventListener("orientationchange", handleResize);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("orientationchange", handleResize);
            window.removeEventListener("resize", handleResize);
        };
    }, []);
}

export default usePortraitRendering;

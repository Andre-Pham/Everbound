import { useEffect } from "react";

function useWindowResize(callback: (width: number, height: number) => void) {
    useEffect(() => {
        const handleResize = () => {
            callback(window.innerWidth, window.innerHeight);
        };
        handleResize();
        window.addEventListener("orientationchange", handleResize);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("orientationchange", handleResize);
            window.removeEventListener("resize", handleResize);
        };
    }, []);
}

export default useWindowResize;

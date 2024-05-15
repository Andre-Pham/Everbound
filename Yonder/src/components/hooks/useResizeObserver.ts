import { useRef, useState, useEffect, RefObject } from "react";

interface Size {
    width: number;
    height: number;
}

/**
 * Monitors the size of a referenced HTML element.
 * It returns a ref to attach to the target element and an object with the element's width and height.
 *
 * Example:
 *
 * const ResizableComponent = () => {
 *     const [ref, size] = useResizeObserver();
 *
 *     return (
 *         <div>
 *             <div ref={ref} style={{ width: '50%', height: '200px', background: 'lightgray' }}>
 *                 Resize me!
 *             </div>
 *             <p>Width: {size.width}px</p>
 *             <p>Height: {size.height}px</p>
 *         </div>
 *     );
 * };
 *
 * export default ResizableComponent;
 */
function useResizeObserver(): [RefObject<HTMLDivElement>, Size] {
    const [size, setSize] = useState<Size>({ width: 0, height: 0 });
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observeTarget = ref.current;
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                setSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            });
        });

        if (observeTarget) {
            resizeObserver.observe(observeTarget);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return [ref, size];
}

export default useResizeObserver;

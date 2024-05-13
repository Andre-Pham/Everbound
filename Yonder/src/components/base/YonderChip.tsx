import { useState } from "react";
import YonderColor from "../styling/color/YonderColor";
import YonderCSS from "../styling/YonderCSS";

interface Props {
    color: YonderColor;
    onPress?: () => void;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const YonderChip: React.FC<Props> = ({ color, onPress, children, style }) => {
    const [pressed, setPressed] = useState(false);
    const [touched, setTouched] = useState(false);

    const handleMouseDown = () => {
        setPressed(true);
    };

    const handleMouseUp = () => {
        onPress && onPress();
        setPressed(false);
    };

    const handleMouseLeave = () => {
        setPressed(false);
    };

    const handleTouched = () => {
        setTouched(true);
    };

    const handleTouchEnd = () => {
        onPress && onPress();
        setTouched(false);
    };

    const handleTouchCancel = () => {
        setTouched(false);
    };

    return onPress ? (
        <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouched}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            style={{
                borderRadius: "50px",
                padding: "4px 12px",
                alignSelf: "flex-start",
                backgroundColor: color.getColor(),
                cursor: "pointer",
                transition: "transform 0.1s",
                transform: pressed || touched ? "scale(0.95)" : "scale(1)",
                ...YonderCSS.diableSelection,
                ...style,
            }}
        >
            {children}
        </div>
    ) : (
        <div
            style={{
                borderRadius: "50px",
                padding: "4px 12px",
                alignSelf: "flex-start",
                backgroundColor: color.getColor(),
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default YonderChip;

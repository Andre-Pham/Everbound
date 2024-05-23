import React from "react";

interface Props {
    maxSize: number;
    minSize: number;
}

const FlexibleVGap: React.FC<Props> = ({ maxSize, minSize }) => {
    return <div style={{ flex: 1, maxHeight: maxSize, minHeight: minSize }}></div>;
};

export default FlexibleVGap;

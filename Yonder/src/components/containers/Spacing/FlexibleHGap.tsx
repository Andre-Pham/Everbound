import React from "react";

interface Props {
    maxSize: number;
    minSize: number;
}

const FlexibleHGap: React.FC<Props> = ({ maxSize, minSize }) => {
    return <div style={{ flex: 1, maxWidth: maxSize, minWidth: minSize }}></div>;
};

export default FlexibleHGap;

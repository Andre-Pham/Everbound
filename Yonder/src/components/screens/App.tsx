import VStack from "../containers/Stacks/VStack";
import YonderText from "../base/YonderText";
import YonderTypography from "../styling/YonderTypography";
import YonderDimensions from "../styling/YonderDimensions";
import YonderFlexImage from "../base/YonderFlexImage";
import YonderCSS from "../styling/YonderCSS";
import YonderImage, { YonderImageScale } from "../base/YonderImage";
import { useEffect, useState } from "react";
import Yonder from "../../language/Functions";

function HomeScreen() {
    const calculateTitleWidth = (): number => {
        return Yonder.boundToRange(
            window.innerWidth - 2 * YonderDimensions.screenPadding, 
            YonderDimensions.minimumPageWidth - 2 * YonderDimensions.screenPadding, 
            600
        )
    }

    const [titleWidth, setTitleWidth] = useState(calculateTitleWidth());

    useEffect(() => {
        const handleResize = () => {
            setTitleWidth(calculateTitleWidth())
        };
        window.addEventListener("orientationchange", handleResize);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("orientationchange", handleResize);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            style={{
                // padding: YonderDimensions.screenPadding,
                minWidth: YonderDimensions.minimumPageWidth,
                border: "1px solid red",
            }}
        >
            <VStack style={{alignItems: "center",}}>
                <YonderImage
                    fileName="header.png"
                    
                    scale={YonderImageScale.scaleToFill}
                    style={{
                        ...YonderCSS.noInterpolation,
                        width: titleWidth,
                        border: "1px solid blue",
                    }}
                />

                <YonderText typography={YonderTypography.body}>Hello World</YonderText>

                <YonderText
                    typography={YonderTypography.body}
                    style={{
                        border: "1px solid blue",
                    }}
                >
                    {"Hello World 1 2 3 4 5 6 7 8 9 10 11 12 13 14"}
                </YonderText>

                <div
                    style={{
                        height: 100,
                        width: YonderDimensions.minimumPageWidth,
                        background: "red",
                    }}
                />
            </VStack>
        </div>
    );
}

export default HomeScreen;

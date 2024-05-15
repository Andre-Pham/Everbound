import VStack from "../containers/Stacks/VStack";
import YonderText from "../base/YonderText";
import YonderTypography from "../styling/YonderTypography";
import YonderDimensions from "../styling/YonderDimensions";
import YonderCSS from "../styling/YonderCSS";
import YonderImage, { YonderImageScale } from "../base/YonderImage";
import YonderButton from "../base/YonderButton";
import YonderColor from "../styling/color/YonderColor";
import YonderColors from "../styling/YonderColors";
import VGap from "../containers/Spacing/VGap";
import YonderStyledButton from "../base/YonderStyledButton";
import { mdiPacMan } from "@mdi/js";

function HomeScreen() {
    return (
        <div
            style={{
                padding: YonderDimensions.screenPadding,
                minWidth: YonderDimensions.minimumPageWidth,
            }}
        >
            <VStack style={{ alignItems: "center", border: "1px solid red" }}>
                <YonderImage
                    fileName="header.png"
                    scale={YonderImageScale.scaleToFill}
                    style={{
                        ...YonderCSS.noInterpolation,
                        width: "100%",
                        maxWidth: 600,
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

                <YonderButton
                    label="Download"
                    typography={YonderTypography.body}
                    color={YonderColors.buttonFill}
                    onPress={() => {}}
                />

                <div
                    style={{
                        height: 100,
                        width: YonderDimensions.minimumPageWidth,
                        background: "red",
                    }}
                />

                <VGap size={25} />

                <YonderStyledButton label="Download" typography={YonderTypography.body} onPress={() => {}} />

                <VGap size={25} />

                <YonderStyledButton
                    iconPath={mdiPacMan}
                    label="Download"
                    typography={YonderTypography.body}
                    onPress={() => {}}
                />

                <VGap size={25} />

                <YonderText typography={YonderTypography.body}>Hello World</YonderText>
            </VStack>
        </div>
    );
}

export default HomeScreen;

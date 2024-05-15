import VStack from "../containers/Stacks/VStack";
import YonderText from "../base/YonderText";
import YonderTypography from "../styling/YonderTypography";
import YonderDimensions from "../styling/YonderDimensions";
import YonderCSS from "../styling/YonderCSS";
import YonderImage, { YonderImageScale } from "../base/YonderImage";
import VGap from "../containers/Spacing/VGap";
import Spacer from "../containers/Spacing/Spacer";
import useWindowResize from "../hooks/useWindowResize";
import { useState } from "react";
import YonderStyledButton from "../base/YonderStyledButton";
import HStack from "../containers/Stacks/HStack";
import { mdiApple, mdiCellphone, mdiPlay, mdiPlayBox, mdiPlayCircle, mdiYoutube } from "@mdi/js";
import AnimationPlayer from "../custom/AnimationPlayer";

function HomeScreen() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    useWindowResize((_: number, height: number) => {
        setWindowHeight(height);
    });

    return (
        <div
            style={{
                padding: YonderDimensions.screenPadding,
                minWidth: YonderDimensions.minimumPageWidth,
                minHeight: 500,
                height: windowHeight - YonderDimensions.screenPadding * 2 - 16,
            }}
        >
            <VStack style={{ alignItems: "center", justifyContent: "center", height: "100%", flexWrap: "nowrap" }}>
                <YonderImage
                    fileName="header.png"
                    scale={YonderImageScale.scaleToFill}
                    style={{
                        ...YonderCSS.noInterpolation,
                        width: "100%",
                        maxWidth: 500,
                    }}
                />

                <VGap size={16} />

                <YonderText
                    typography={YonderTypography.subheader}
                    wide={false}
                    style={{ textAlign: "center", opacity: 0.4 }}
                >
                    {"An iOS RPG Roguelike"}
                </YonderText>

                <VGap size={100} />

                <YonderText
                    typography={YonderTypography.body}
                    wide={false}
                    style={{ maxWidth: 400, textAlign: "center" }}
                >
                    {"Fight hostiles, collect loot, fight bosses, meet NPCs, and more!"}
                </YonderText>

                <VGap size={24} />

                <HStack spacing={24} verticalSpacing={12} style={{ justifyContent: "center" }}>
                    <YonderStyledButton
                        label="App Store"
                        typography={YonderTypography.button}
                        onPress={() => {}}
                        width={220}
                        iconPath={mdiApple}
                    />

                    <YonderStyledButton
                        label="Trailer"
                        typography={YonderTypography.button}
                        onPress={() => {
                            console.log("trialer");
                        }}
                        width={220}
                        iconPath={mdiYoutube}
                    />
                </HStack>

                <VGap size={100} />

                <AnimationPlayer
                    frames={[
                        "firepit1.png",
                        "firepit2.png",
                        "firepit3.png",
                        "firepit4.png",
                        "firepit5.png",
                        "firepit6.png",
                        "firepit7.png",
                    ]}
                    // width={250}
                    scale={YonderImageScale.scaleToFill}
                    style={{
                        ...YonderCSS.noInterpolation,
                        width: "80%",
                        maxWidth: 300,
                    }}
                />
            </VStack>
        </div>
    );
}

export default HomeScreen;

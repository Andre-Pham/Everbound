import VStack from "../containers/Stacks/VStack";
import YonderText from "../base/YonderText";
import YonderTypography from "../styling/YonderTypography";
import YonderDimensions from "../styling/YonderDimensions";
import VGap from "../containers/Spacing/VGap";
import useWindowResize from "../hooks/useWindowResize";
import { useState } from "react";
import RouterBackLink from "../custom/RouterBackLink";

function ContactScreen() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    useWindowResize((_: number, height: number) => {
        setWindowHeight(height);
    });

    return (
        <div
            style={{
                padding: YonderDimensions.screenPadding,
                minWidth: YonderDimensions.minimumPageWidth,
                minHeight: 250,
                height: windowHeight - YonderDimensions.screenPadding * 2 - 16,
            }}
        >
            <VStack style={{ alignItems: "center", justifyContent: "center", height: "100%", flexWrap: "nowrap" }}>
                <YonderText
                    typography={YonderTypography.body}
                    wide={false}
                    style={{ maxWidth: 300, textAlign: "center" }}
                >
                    {"For game related enquires, questions, and feedback:"}
                </YonderText>

                <VGap size={24} />

                <YonderText
                    typography={YonderTypography.subheader.withUnderline(true)}
                    wide={false}
                    style={{ maxWidth: 400, textAlign: "center" }}
                >
                    {"everboundrpg@gmail.com"}
                </YonderText>

                <VGap size={30} />

                <RouterBackLink typography={YonderTypography.navigationLink} wide={false}>
                    {"Back"}
                </RouterBackLink>
            </VStack>
        </div>
    );
}

export default ContactScreen;

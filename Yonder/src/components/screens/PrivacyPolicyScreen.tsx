import VStack from "../containers/Stacks/VStack";
import YonderText from "../base/YonderText";
import YonderTypography from "../styling/YonderTypography";
import YonderDimensions from "../styling/YonderDimensions";
import VGap from "../containers/Spacing/VGap";
import RouterBackLink from "../custom/RouterBackLink";
import RouterLink from "../custom/RouterLink";
import RouterNavigator from "../../services/RouterNavigator";
import usePageBlur from "../hooks/usePageBlur";
import { isMobile } from "react-device-detect";

function PrivacyPolicyScreen() {
    usePageBlur(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div
            style={{
                minWidth: YonderDimensions.minimumPageWidth,
                height: "100vh",
                alignContent: "center",
            }}
        >
            <VStack
                style={{
                    padding: YonderDimensions.screenPadding,
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "nowrap",
                }}
            >
                {isMobile && <VGap size={48} />}

                <RouterLink path={RouterNavigator.HOME_PATH} typography={YonderTypography.navigationLink} wide={false}>
                    {"Home"}
                </RouterLink>

                <VGap size={30} />

                <YonderText
                    typography={YonderTypography.title}
                    wide={false}
                    style={{ maxWidth: 500, textAlign: "center" }}
                >
                    {"- PRIVACY POLICY -"}
                </YonderText>

                <VGap size={24} />

                <YonderText
                    typography={YonderTypography.header}
                    wide={false}
                    style={{ maxWidth: 500, textAlign: "center" }}
                >
                    {"Information Collected"}
                </YonderText>

                <VGap size={12} />

                <YonderText
                    typography={YonderTypography.body}
                    wide={false}
                    style={{ maxWidth: 500, textAlign: "center" }}
                >
                    {
                        "No user information is collected. There are no user accounts, no tracking, and no user data collection of any kind."
                    }
                </YonderText>

                <VGap size={24} />

                <YonderText
                    typography={YonderTypography.header}
                    wide={false}
                    style={{ maxWidth: 500, textAlign: "center" }}
                >
                    {"Use of Information"}
                </YonderText>

                <VGap size={12} />

                <YonderText
                    typography={YonderTypography.body}
                    wide={false}
                    style={{ maxWidth: 500, textAlign: "center" }}
                >
                    {"Since no personal information is collected, no personal information is used for any purpose."}
                </YonderText>

                <VGap size={24} />

                <YonderText
                    typography={YonderTypography.header}
                    wide={false}
                    style={{ maxWidth: 500, textAlign: "center" }}
                >
                    {"Data Storage"}
                </YonderText>

                <VGap size={12} />

                <YonderText
                    typography={YonderTypography.body}
                    wide={false}
                    style={{ maxWidth: 500, textAlign: "center" }}
                >
                    {
                        "Your games' data and progression is saved locally on-device and never leaves your device. It is 100% offline and is not shared nor accessible by me or any third parties."
                    }
                </YonderText>

                <VGap size={24} />

                <YonderText
                    typography={YonderTypography.header}
                    wide={false}
                    style={{ maxWidth: 500, textAlign: "center" }}
                >
                    {"Contact"}
                </YonderText>

                <VGap size={12} />

                <YonderText
                    typography={YonderTypography.body}
                    wide={false}
                    style={{ maxWidth: 500, textAlign: "center" }}
                >
                    {"If you have any questions or concerns about this Privacy Policy, please contact me at"}

                    <YonderText
                        typography={YonderTypography.body.withUnderline(true)}
                        wide={false}
                        style={{ maxWidth: 500, textAlign: "center" }}
                    >
                        {" contact@everbound.net"}
                    </YonderText>

                    {"."}
                </YonderText>

                <VGap size={24} />

                <YonderText
                    typography={YonderTypography.header}
                    wide={false}
                    style={{ maxWidth: 500, textAlign: "center" }}
                >
                    {"Agreement and Updates"}
                </YonderText>

                <VGap size={12} />

                <YonderText
                    typography={YonderTypography.body}
                    wide={false}
                    style={{ maxWidth: 500, textAlign: "center" }}
                >
                    {"By playing the game, you agree to the terms of this Privacy Policy."}

                    <br />

                    <br />

                    {
                        "This Privacy Policy is effective as of 24th May, 2024. Any changes will be posted on this page - for any updates, please review this Privacy Policy page."
                    }
                </YonderText>

                <VGap size={30} />

                <RouterBackLink typography={YonderTypography.navigationLink} wide={false}>
                    {"Back"}
                </RouterBackLink>

                {isMobile && <VGap size={48} />}
            </VStack>
        </div>
    );
}

export default PrivacyPolicyScreen;

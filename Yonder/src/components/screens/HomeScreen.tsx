import VStack from "../containers/Stacks/VStack";
import YonderText from "../base/YonderText";
import YonderTypography from "../styling/YonderTypography";
import YonderDimensions from "../styling/YonderDimensions";
import YonderImage, { YonderImageScale } from "../base/YonderImage";
import VGap from "../containers/Spacing/VGap";
import { useRef } from "react";
import YonderStyledButton from "../base/YonderStyledButton";
import HStack from "../containers/Stacks/HStack";
import { mdiApple, mdiChevronDown, mdiYoutube } from "@mdi/js";
import AnimationPlayer from "../custom/AnimationPlayer";
import Spacer from "../containers/Spacing/Spacer";
import ImageCarousel from "../custom/ImageCarousel";
import YonderIconButton from "../base/YonderIconButton";
import YonderColors from "../styling/YonderColors";
import LinksManager from "../../services/LinksManager";
import RouterLink from "../custom/RouterLink";
import RouterNavigator from "../../services/RouterNavigator";
import FlexibleVGap from "../containers/Spacing/FlexibleVGap";
import { isMobile } from "react-device-detect";
import usePageBlur from "../hooks/usePageBlur";
import useMediaQuery from "../hooks/useMediaQuery";

function HomeScreen() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const isLessThan750 = useMediaQuery("(max-width: 749px)");
    const isLessThan1000 = useMediaQuery("(max-width: 999px)");
    let carouselCount;
    if (isLessThan750) {
        carouselCount = 1;
    } else if (isLessThan1000) {
        carouselCount = 2;
    } else {
        carouselCount = 3;
    }

    usePageBlur(() => {
        window.scrollTo(0, 0);
    });

    const scrollToGallery = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const openTrailer = () => {
        LinksManager.inst.openLink(LinksManager.TRAILER_LINK);
    };

    const openAppStore = () => {
        LinksManager.inst.openLink(LinksManager.APP_STORE);
    };

    return (
        <div
            style={{
                padding: YonderDimensions.screenPadding,
                minWidth: YonderDimensions.minimumPageWidth,
                minHeight: 500,
            }}
        >
            <VStack
                style={{
                    flexWrap: "nowrap",
                }}
            >
                <VStack
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: `calc(100svh - ${YonderDimensions.screenPadding * 2 + (isMobile ? 16 : 0)}px)`,
                        flexWrap: "nowrap",
                    }}
                >
                    <Spacer />

                    <YonderImage
                        fileName="header.png"
                        scale={YonderImageScale.scaleToFill}
                        pixelArt={true}
                        style={{
                            width: "100%",
                            maxWidth: 500,
                        }}
                    />

                    <VGap size={16} />

                    <YonderText
                        typography={YonderTypography.subheader.withColor(YonderColors.textSemiDark)}
                        wide={false}
                        style={{ textAlign: "center" }}
                    >
                        {"An iOS RPG Roguelike"}
                    </YonderText>

                    <FlexibleVGap maxSize={100} minSize={30} />

                    <YonderText
                        typography={YonderTypography.body}
                        wide={false}
                        style={{ maxWidth: 400, textAlign: "center" }}
                    >
                        {"Battle hostiles, conquer bosses, collect loot, meet NPCs, and more!"}
                    </YonderText>

                    <VGap size={24} />

                    <HStack spacing={24} verticalSpacing={12} style={{ justifyContent: "center" }}>
                        <YonderStyledButton
                            label="App Store"
                            typography={YonderTypography.button}
                            onPress={openAppStore}
                            width={220}
                            iconPath={mdiApple}
                            iconStyle={{
                                paddingBottom: 2.5,
                            }}
                        />

                        <YonderStyledButton
                            label="Trailer"
                            typography={YonderTypography.button}
                            onPress={openTrailer}
                            width={220}
                            iconPath={mdiYoutube}
                        />
                    </HStack>

                    <FlexibleVGap maxSize={100} minSize={30} />

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
                        scale={YonderImageScale.scaleToFill}
                        pixelArt={true}
                        style={{
                            width: "70%",
                            maxWidth: 300,
                        }}
                    />

                    <Spacer />

                    <VGap size={24} />

                    <YonderIconButton
                        color={YonderColors.buttonOutline}
                        size={36}
                        iconPath={mdiChevronDown}
                        onPress={scrollToGallery}
                    />
                </VStack>

                <VGap size={YonderDimensions.screenPadding + 16} />

                <VStack
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "nowrap",
                    }}
                >
                    <div ref={scrollRef} style={{ marginTop: -20, marginBottom: 20 }} />

                    <YonderText typography={YonderTypography.header} wide={false} style={{ textAlign: "center" }}>
                        {"Gallery"}
                    </YonderText>

                    <VGap size={32} />

                    <ImageCarousel
                        imagePaths={[
                            "preview1.png",
                            "preview2.png",
                            "preview3.png",
                            "preview4.png",
                            "preview5.png",
                            "preview6.png",
                            "preview7.png",
                            "preview8.png",
                            "preview9.png",
                        ]}
                        visibleImagesCount={carouselCount}
                        imageSpacing={20}
                        style={{
                            maxWidth: 150 + 300 * carouselCount,
                        }}
                    />

                    <VGap size={60} />

                    <YonderText
                        typography={YonderTypography.subscript}
                        wide={false}
                        style={{ maxWidth: 300, textAlign: "center" }}
                    >
                        {"For game related enquires, questions, and feedback:"}
                    </YonderText>

                    <VGap size={12} />

                    <YonderText
                        typography={YonderTypography.body.withUnderline(true)}
                        wide={false}
                        style={{ maxWidth: 400, textAlign: "center" }}
                    >
                        {"contact@everbound.net"}
                    </YonderText>

                    <VGap size={60} />

                    <RouterLink path={RouterNavigator.PRIVACY_POLICY_PATH} typography={YonderTypography.navigationLink}>
                        {"Privacy Policy"}
                    </RouterLink>

                    <VGap size={32} />
                </VStack>
            </VStack>
        </div>
    );
}

export default HomeScreen;

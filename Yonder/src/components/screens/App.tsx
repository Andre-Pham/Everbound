import VStack from "../containers/Stacks/VStack";
import YonderText from "../base/YonderText";
import YonderTypography from "../styling/YonderTypography";

function HomeScreen() {
    return (
        <>
            <VStack>
                <YonderText
                    typography={YonderTypography.body}
                >
                    Hello World
                </YonderText>

                <YonderText
                    typography={YonderTypography.body}
                >
                    Hello World asdf
                </YonderText>
            </VStack>
        </>
    );
}

export default HomeScreen;

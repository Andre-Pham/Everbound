import VStack from "../containers/Stacks/VStack";
import YonderText from "../base/YonderText";
import YonderTypography from "../styling/YonderTypography";

function HomeScreen() {
    return (
        <>
            <VStack>
                <YonderText
                    typography={YonderTypography.test1}
                >
                    Hello World
                </YonderText>

                <YonderText
                    typography={YonderTypography.test2}
                >
                    Hello World
                </YonderText>
            </VStack>
        </>
    );
}

export default HomeScreen;

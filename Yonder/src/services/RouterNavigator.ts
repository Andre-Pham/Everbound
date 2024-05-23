import { NavigateFunction } from "react-router-dom";

class RouterNavigator {
    public static readonly inst = new RouterNavigator();

    public static readonly HOME_PATH = "/";
    public static readonly PRIVACY_POLICY_PATH = "/privacy-policy";
    public static readonly TITLES: { [key: string]: string } = {
        [RouterNavigator.HOME_PATH]: "Everbound",
        [RouterNavigator.PRIVACY_POLICY_PATH]: "Everbound | Privacy Policy",
    };

    private constructor() {}

    public navigatePrivacyPolicy(navigate: NavigateFunction) {
        navigate(RouterNavigator.PRIVACY_POLICY_PATH);
    }

    public navigateBack(navigate: NavigateFunction) {
        navigate(-1);
    }
}

export default RouterNavigator;

import { NavigateFunction } from "react-router-dom";

class RouterNavigator {
    public static readonly inst = new RouterNavigator();

    public static readonly HOME_PATH = "/";
    public static readonly CONTACT_PATH = "/contact";
    public static readonly TITLES: { [key: string]: string } = {
        [RouterNavigator.HOME_PATH]: "Everbound",
        [RouterNavigator.CONTACT_PATH]: "Everbound | Contact",
    };

    private constructor() {}

    public navigateContact(navigate: NavigateFunction) {
        navigate(RouterNavigator.CONTACT_PATH);
    }

    public navigateBack(navigate: NavigateFunction) {
        navigate(-1);
    }
}

export default RouterNavigator;

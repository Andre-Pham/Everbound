import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import RouterNavigator from "../../services/RouterNavigator";

interface Props {
    children: React.ReactNode;
}

const TitleProvider: React.FC<Props> = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        document.title =
            RouterNavigator.TITLES[location.pathname] || RouterNavigator.TITLES[RouterNavigator.HOME_PATH]!;
    }, [location]);
    return <>{children}</>;
};

export default TitleProvider;

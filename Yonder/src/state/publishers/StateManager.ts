import LocalStorageManager from "../../services/LocalStorageManager";
import YonderValuePublisher from "./impl/YonderValuePublisher";
import { ColorScheme } from "./types/ColorScheme";

/**
 * Stores application-level state to avoid having to pass state to different components, and reduces component coupling. Uses the publisher-subscriber pattern.
 *
 * To define value-less state, statically instantiate a YonderPublisher.
 * ``` public static readonly myState = new YonderPublisher(); ```
 * To publish to that state, call the publish method. This would be done in a component.
 * ``` StateManager.myState.publish(); ```
 * Any component can subscribe. Every time the state is published, a callback is called.
 * ```
 * const unsubscribe = StateManager.myState.subscribe(() => {
 *     // React to the state change, e.g. update hooks or call forceUpdate()
 * });
 *
 * // Note: call unsubscribe() when component is unmounted
 * ```
 * All subscriptions should occur in useEffect hooks, since we only want the the component to subscribe on mount.
 *
 * To define a state with value, statically instantiate a YonderValuePublisher.
 * ``` public static readonly loginStatus = new YonderValuePublisher(LoginStatus.loggedOut); ```
 * To publish to that state, a value must be passed to the publish method. This would be done in a component.
 * ``` StateManager.loginStatus.publish(LoginStatus.worker); ```
 * Any component can subscribe. Every time the state is published, a callback is called.
 * ```
 * StateManager.loginStatus.subscribe(() => {
 *     // We can read the state value
 *     let stateValue: LoginStatus = StateManager.loginStatus.read();
 *
 *     // React to the state change, e.g. update hooks or call forceUpdate()
 * });
 *
 * // Note: call unsubscribe() when component is unmounted
 * ```
 */
class StateManager {
    public static readonly colorScheme = new YonderValuePublisher(ColorScheme.light);

    public static setup() {
        StateManager.colorScheme.publish(LocalStorageManager.inst.readColorTheme());
    }
}

export default StateManager;

// Setup after export, otherwise circular depenencies occur
StateManager.setup();

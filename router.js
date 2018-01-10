import { StackNavigator } from "react-navigation";

import SignUp from "./screens/SignUp.js";
import SignIn from "./screens/SignIn.js";
import Things from "./screens/Things.js";
import Settings from "./screens/Settings.js";
import AddThing from "./screens/AddThing.js";


export const SignedOut = StackNavigator(
  {
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        headerBackTitle: null,
        gesturesEnabled: false,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: 'transparent',
          borderBottomWidth: 0,
        }
      }
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        headerBackTitle: null,
        gesturesEnabled: false,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: 'transparent',
          borderBottomWidth: 0,
        }
      }
    },
  },

  {
    headerMode: "screen"
  }
);

export const SignedIn = StackNavigator(
  {
    Things: {
      screen: Things,
      navigationOptions: {
        title: "Needful",
        headerBackTitle: null,
        gesturesEnabled: false
      }
    },

    Settings: {
      screen: Settings,
      navigationOptions: {
        title: "Settings",
        headerBackTitle: null,
        gesturesEnabled: false,

      }
    },

    AddThing: {
      screen: AddThing,
      navigationOptions: {
        title: "Add Thing",
        headerBackTitle: null,
        gesturesEnabled: false,

      }
    },

  },

  {
    mode: "modal",
    initialRouteName: "Things"
  }

);

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

import React from "react";
import { Provider } from "react-redux";
import { AppNavigator } from "./navigation/AppNavigator";
import store from "./store";

// type Props = {
//   imageUrl: string;
//   title: string;
//   author: string;
// };

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

import React from "react";
import UserNav from "./";
import UserNavWithData from "./withData";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withState } from "recompose";

import generalDecorator from "../../stories.decorator.js";

import theme from "../styled.theme";
import readme from "./README.md";
import reducer from "../../global/User/reducer";

const mockUserData = {
  email: "test@test.com",
  name: "Probando nombre largo",
  urlImage: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14448937_1288198261204638_226642860352339525_n.jpg?oh=1ae6547af59ae0a0de67ab4dcb1b231b&oe=5A7C7B04"
};

const enhace = withState("userData", "logout", mockUserData);
const UserNavWithState = enhace(props => {
  const { logout, userData } = props;

  const logoutHandler = () => {
    logout({});
    action("close")();
  };

  return <UserNav {...props} data={userData} logout={logoutHandler} />;
});

storiesOf("avantrip/UserNav", module)
  .addDecorator(
    generalDecorator({
      readme,
      theme,
      reducer: {
        user: reducer
      }
    })
  )
  .add("Default", () => <UserNavWithState />)
  .add("WithData", () => <UserNavWithData />);

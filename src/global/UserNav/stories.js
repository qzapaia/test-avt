import React from "react";
import UserNav from "./";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withState } from "recompose";

import generalDecorator from "../../stories.decorator.js";

import theme from "../styled.theme";
import readme from "./README.md";

const mockUserData = {
  email: 'test@test.com',
  name: 'Probando nombre largo',
  image: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14448937_1288198261204638_226642860352339525_n.jpg?oh=1ae6547af59ae0a0de67ab4dcb1b231b&oe=5A7C7B04',
}

const enhace = withState("userData", "onClose", mockUserData);
const UserNavWithState = enhace(props => {
  const { onClose, userData } = props;

  const closeHandler = () => {
    onClose({});
    action("close")();
  };

  return <UserNav
    {...props}
    data={userData}
    onClose={closeHandler} />;
});

storiesOf("global/UserNav", module)
  .addDecorator(
    generalDecorator({
      readme,
      theme
    })
  )
  .add("Default", () => (
    <UserNavWithState
    />
  ))

import React from "react";
import PropTypes from "prop-types";

import { Container, UserLogo, UserData, UserMenu } from "./styled";

import Icon from "../Icon";
import Text from "../Text";

import { withState } from "recompose";

const UserNav = ({ data, onClick, logout, showMenu }) => (
  <Container>
    <UserData onClick={e => onClick(!showMenu)}>
      {data.urlImage &&
      <UserLogo>
        <img src={data.urlImage} />
      </UserLogo>}
      <Text type="s">{data.name || data.email}</Text>
    </UserData>
    {showMenu && (
      <UserMenu
        onClick={e => {
          onClick(!showMenu);
          logout();
        }}>
        <Text color="primary">Cerrar sesión</Text>
        <Icon id="Close" color="primary" />
      </UserMenu>
    )}
  </Container>
);

const enhace = withState("state", "changeState", false);
const UserNavWithState = enhace(props => {
  const { state, changeState } = props;

  const clickHandler = currentState => {
    changeState(currentState);
  };

  return <UserNav {...props} showMenu={state} onClick={clickHandler} />;
});

UserNavWithState.propTypes = {
  data: PropTypes.object,
  logout: PropTypes.func
};

UserNavWithState.defaultProps = {
  data:{}
};

export default UserNavWithState;

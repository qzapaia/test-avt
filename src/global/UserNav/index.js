import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styled";
import { UserLogo } from "./UserLogo.styled";

import Icon from "../Icon";
import Text from "../Text";

import { withState } from "recompose";

const UserNav = ({ data, onClick, onClose, showMenu }) => (
  <Container>
    <div>
      <div onClick={e => onClick(!showMenu)}>
        <UserLogo>
          <img src={data.image} />
        </UserLogo>
        <Text type="s">{data.name || data.email}</Text>
      </div>
      { showMenu &&
        <div onClick={e => {
          onClick(!showMenu);
          onClose();
        }}>
          <Text color="primary">Cerrar sesión</Text>
          <Icon id="Close" color="primary" />
        </div>
      }
    </div>
  </Container>
);

const enhace = withState("state", "changeState", false);
const UserNavWithState = enhace(props => {
  const { state, changeState } = props;

  const clickHandler = (currentState) => {
    changeState(currentState);
  };

  return <UserNav
    {...props}
    showMenu={state}
    onClick={clickHandler} />;
});


UserNavWithState.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func
};

UserNavWithState.defaultProps = {};

export default UserNavWithState;

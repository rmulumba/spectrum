// @flow
import theme from 'shared/theme';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from 'src/components/dropdown';
import { SERVER_URL } from 'src/api/constants';
import type { UserInfoType } from 'shared/graphql/fragments/user/userInfo';
import { isMac } from 'src/helpers/is-os';
import { isDesktopApp } from 'src/helpers/desktop-app-utils';

const UserProfileDropdown = styled(Dropdown)`
  width: 200px;
`;

const UserProfileDropdownList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const UserProfileDropdownListItem = styled.li`
  font-size: 14px;
  padding: 16px;
  text-align: center;
  display: flex;
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.text.alt};
  border-bottom: 2px solid ${theme.bg.border};
  background: ${theme.bg.default};
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: ${theme.text.default};
    background: ${theme.bg.wash};
  }
`;

type ProfileProps = {
  user: UserInfoType,
  dispatch: Function,
};

type State = {
  didMount: boolean,
};

class ProfileDropdown extends React.Component<ProfileProps, State> {
  state = { didMount: false };

  componentDidMount() {
    return this.setState({ didMount: true });
  }

  render() {
    const { props } = this;
    const { didMount } = this.state;
    return (
      <UserProfileDropdown className={'dropdown'}>
        <UserProfileDropdownList>
          {props.user.username && (
            <Link rel="nofollow" to={`/users/${props.user.username}/settings`}>
              <UserProfileDropdownListItem>
                My Settings
              </UserProfileDropdownListItem>
            </Link>
          )}

          {/*didMount && isMac() && !isDesktopApp() && (
            <Link to={`/apps`}>
              <UserProfileDropdownListItem>
                Desktop App
              </UserProfileDropdownListItem>
            </Link>
          )*/}
            <Link to={`/WhatIsKeyyCoin`}>
                <UserProfileDropdownListItem>
                    What is Keyy Coin?
                </UserProfileDropdownListItem>
            </Link>
            <Link to={`/earningBadges`}>
                <UserProfileDropdownListItem>
                    Earning Badges
                </UserProfileDropdownListItem>
            </Link>
            <Link to={`/earningLevels`}>
                <UserProfileDropdownListItem>
                    Earning Levels
                </UserProfileDropdownListItem>
            </Link>
            <UserProfileDropdownListItem>
                <a href="https://www.keyy.org/become-a-coach?utm_campaign=In%20App%20Usage%20-%20Learn.Keyy.org&utm_source=in%20app%20user%20menu&utm_content=Become%20a%20Coach" target="_blank">Become a Coach</a>
            </UserProfileDropdownListItem>
            <UserProfileDropdownListItem>
                <a href="https://www.keyy.org/about" target="_blank">About Keyy</a>
            </UserProfileDropdownListItem>

          <Link to={`/support`}>
            <UserProfileDropdownListItem>Support</UserProfileDropdownListItem>
          </Link>

          <a href={`${SERVER_URL}/auth/logout`}>
            <UserProfileDropdownListItem>Log Out</UserProfileDropdownListItem>
          </a>
        </UserProfileDropdownList>
      </UserProfileDropdown>
    );
  }
}

export default connect()(ProfileDropdown);

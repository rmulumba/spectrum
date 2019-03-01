// @flow
import * as React from 'react';
import compose from 'recompose/compose';
import FullscreenView from 'src/components/fullscreenView';
import LoginButtonSet from 'src/components/loginButtonSet';
import { Loading } from 'src/components/loading';
import { CommunityAvatar } from 'src/components/avatar';
import { CLIENT_URL } from 'src/api/constants';
import {
  Title,
  Subtitle,
  LoginImageContainer,
  FullscreenContent,
  CodeOfConduct,
} from './style';
import viewNetworkHandler, {
  type ViewNetworkHandlerType,
} from 'src/components/viewNetworkHandler';
import {
  getCommunityByMatch,
  type GetCommunityType,
} from 'shared/graphql/queries/community/getCommunity';
import ViewError from 'src/components/viewError';
import queryString from 'query-string';
import { track, events } from 'src/helpers/analytics';

type Props = {
  data: {
    community: GetCommunityType,
  },
  ...$Exact<ViewNetworkHandlerType>,
  history: Object,
  location: Object,
  match: Object,
  redirectPath: ?string,
};

export class Login extends React.Component<Props> {
  redirectPath = null;

  escape = () => {
    this.props.history.push(`/${this.props.match.params.communitySlug}`);
  };

  componentDidMount() {
    const { location, redirectPath } = this.props;

    if (redirectPath) {
      this.redirectPath = redirectPath;
    }

    if (location && !redirectPath) {
      const searchObj = queryString.parse(this.props.location.search);
      this.redirectPath = searchObj.r;
    }

    track(events.LOGIN_PAGE_VIEWED, { redirectPath: this.redirectPath });
  }

  render() {
    const {
      data: { community },
      isLoading,
      match,
    } = this.props;

    if (community && community.id) {
      const { brandedLogin } = community;

      return (
        <FullscreenView hasBackground noCloseButton={true} close={null}>
          <FullscreenContent
            data-cy="community-login-page"
            style={{ justifyContent: 'center' }}
          >
            <LoginImageContainer>
              <CommunityAvatar
                community={community}
                showHoverProfile={false}
                size={88}
              />
            </LoginImageContainer>
            <Title>Sign in to the {community.name} community</Title>
            <Subtitle>
              {brandedLogin.message && brandedLogin.message.length > 0
                ? brandedLogin.message
                : 'Keyy is a place where communities can share, discuss, and grow together. Sign in below to get in on the conversation.'}
            </Subtitle>

            <LoginButtonSet
              redirectPath={
                this.redirectPath ||
                `${CLIENT_URL}/${match.params.communitySlug}`
              }
              signinType={'signin'}
            />

            <CodeOfConduct>
              By using Keyy, you agree to our{' '}
              <a
                href="https://learn.keyy.org/keyy-support/getting-started/keyys-code-of-conduct~87204628-d977-4945-af9d-2f60d3e38c9f"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track(events.CODE_OF_CONDUCT_CLICKED, {
                    location: 'branded login',
                  })
                }
              >
                Code of Conduct
              </a>
            </CodeOfConduct>
          </FullscreenContent>
        </FullscreenView>
      );
    }

    if (isLoading) {
      return (
        <FullscreenView>
          <Loading />
        </FullscreenView>
      );
    }

    return (
      <FullscreenView close={this.escape}>
        <ViewError
          refresh
          heading={'We had trouble finding this community'}
          subheading={
            'Double check that this community exists or refresh to try again'
          }
        />
      </FullscreenView>
    );
  }
}

export default compose(
  getCommunityByMatch,
  viewNetworkHandler
)(Login);

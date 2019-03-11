// @flow
import * as React from 'react';
import compose from 'recompose/compose';
import { Route, Switch, Redirect } from 'react-router';
import styled, { ThemeProvider } from 'styled-components';
import Loadable from 'react-loadable';
import { ErrorBoundary } from 'src/components/error';
import { CLIENT_URL, CLIENT_MAIN_DOMAIN } from './api/constants';
import generateMetaInfo from 'shared/generate-meta-info';
import './reset.css.js';
import { theme } from 'shared/theme';
import { FlexCol } from './components/globals';
import ScrollManager from 'src/components/scrollManager';
import Head from 'src/components/head';
import ModalRoot from 'src/components/modals/modalRoot';
import Gallery from 'src/components/gallery';
import Toasts from 'src/components/toasts';
import { Loading, LoadingScreen } from 'src/components/loading';
import Composer from 'src/components/composer';
import AuthViewHandler from 'src/views/authViewHandler';
import signedOutFallback from 'src/helpers/signed-out-fallback';
import PrivateChannelJoin from 'src/views/privateChannelJoin';
import PrivateCommunityJoin from 'src/views/privateCommunityJoin';
import ThreadSlider from 'src/views/threadSlider';
import Navbar from 'src/views/navbar';
import Status from 'src/views/status';
import Login from 'src/views/login';
import DirectMessages from 'src/views/directMessages';
import { FullscreenThreadView } from 'src/views/thread';
import ThirdPartyContext from 'src/components/thirdPartyContextSetting';
import { withCurrentUser } from 'src/components/withCurrentUser';
import Maintenance from 'src/components/maintenance';
import type { GetUserType } from 'shared/graphql/queries/user/getUser';
import RedirectOldThreadRoute from './views/thread/redirect-old-route';

/* prettier-ignore */
const Explore = Loadable({
  loader: () => import('./views/explore'/* webpackChunkName: "Explore" */),
  loading: ({ isLoading }) => isLoading && <Loading />,
});

/* prettier-ignore */
const UserView = Loadable({
  loader: () => import('./views/user'/* webpackChunkName: "UserView" */),
  loading: ({ isLoading }) => isLoading && <LoadingScreen />,
});

/* prettier-ignore */
const CommunityView = Loadable({
  loader: () => import('./views/community'/* webpackChunkName: "CommunityView" */),
  loading: ({ isLoading }) => isLoading && <LoadingScreen />,
});

/* prettier-ignore */
const CommunityLoginView = Loadable({
  loader: () => import('./views/communityLogin'/* webpackChunkName: "CommunityView" */),
  loading: ({ isLoading }) => isLoading && <LoadingScreen />,
});

/* prettier-ignore */
const ChannelView = Loadable({
  loader: () => import('./views/channel'/* webpackChunkName: "ChannelView" */),
  loading: ({ isLoading }) => isLoading && <LoadingScreen />,
});

/* prettier-ignore */
const Dashboard = Loadable({
  loader: () => import('./views/dashboard'/* webpackChunkName: "Dashboard" */),
  loading: ({ isLoading }) => isLoading && null,
});

/* prettier-ignore */
const Notifications = Loadable({
  loader: () => import('./views/notifications'/* webpackChunkName: "Notifications" */),
  loading: ({ isLoading }) => isLoading && <LoadingScreen />,
});

/* prettier-ignore */
const UserSettings = Loadable({
  loader: () => import('./views/userSettings'/* webpackChunkName: "UserSettings" */),
  loading: ({ isLoading }) => isLoading && <Loading />,
});

/* prettier-ignore */
const CommunitySettings = Loadable({
  loader: () => import('./views/communitySettings'/* webpackChunkName: "communitySettings" */),
  loading: ({ isLoading }) => isLoading && <Loading />,
});

/* prettier-ignore */
const ChannelSettings = Loadable({
  loader: () => import('./views/channelSettings'/* webpackChunkName: "channelSettings" */),
  loading: ({ isLoading }) => isLoading && <LoadingScreen />,
});

/* prettier-ignore */
const NewCommunity = Loadable({
  loader: () => import('./views/newCommunity'/* webpackChunkName: "NewCommunity" */),
  loading: ({ isLoading }) => isLoading && <Loading />,
});

/* prettier-ignore */
const Pages = Loadable({
  loader: () => import('./views/pages'/* webpackChunkName: "Splash" */),
  loading: ({ isLoading }) => isLoading && null,
});

/* prettier-ignore */
const Search = Loadable({
  loader: () => import('./views/search'/* webpackChunkName: "Search" */),
  loading: ({ isLoading }) => isLoading && <LoadingScreen />,
});

/* prettier-ignore */
const ErrorFallback = Loadable({
  loader: () => import('./components/error'/* webpackChunkName: "Error" */),
  loading: ({ isLoading }) => isLoading && <Loading />
});

const Body = styled(FlexCol)`
  display: flex;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background: ${theme.bg.wash};
`;

const DashboardFallback = signedOutFallback(Dashboard, () => (
  <Redirect to="/login" />
));
const HomeFallback = signedOutFallback(Dashboard, () => (
  <Redirect to="/login" />
));
const LoginFallback = signedOutFallback(() => <Redirect to="/" />, Login);
const CommunityLoginFallback = signedOutFallback(
  props => <Redirect to={`/${props.match.params.communitySlug}`} />,
  CommunityLoginView
);
const NewCommunityFallback = signedOutFallback(NewCommunity, () => (
  <Login redirectPath={`${CLIENT_URL}/new/community`} />
));
const MessagesFallback = signedOutFallback(DirectMessages, () => (
  <Login redirectPath={`${CLIENT_URL}/messages`} />
));
const UserSettingsFallback = signedOutFallback(UserSettings, () => (
  <Login redirectPath={`${CLIENT_URL}/me/settings`} />
));
const CommunitySettingsFallback = signedOutFallback(CommunitySettings, () => (
  <Login />
));
const ChannelSettingsFallback = signedOutFallback(ChannelSettings, () => (
  <Login />
));
const NotificationsFallback = signedOutFallback(Notifications, () => (
  <Login redirectPath={`${CLIENT_URL}/notifications`} />
));
const ComposerFallback = signedOutFallback(Composer, () => (
  <Login redirectPath={`${CLIENT_URL}/new/thread`} />
));

type Props = {
  currentUser: ?GetUserType,
  isLoadingCurrentUser: boolean,
  maintenanceMode?: boolean,
};

const externalRedirect = url => () => {
  location.replace(url);
  return '';
};

// Key can be a slug or a domain name. Must be all lowercased.
// If slug is used, the final domain will be SLUG.learn.keyy.org
// No need to add alias if desired slug is the same as community slug,
// like `startup-framework`
const COMMUNITY_DOMAIN_ALIASES = {
  suf: 'startup-framework',
  'suf.inboundlabs.co': 'startup-framework',
};

class CommunityHostHelper {
  constructor(ssrHost) {
    this.ssrHost = ssrHost;
  }
  getDomainCommunitySlug() {
    const currentHost = global.location
      ? global.location.host.toLowerCase()
      : this.ssrHost;
    if (currentHost in COMMUNITY_DOMAIN_ALIASES) {
      return COMMUNITY_DOMAIN_ALIASES[currentHost];
    }
    if (
      !currentHost ||
      !currentHost.endsWith(CLIENT_MAIN_DOMAIN) ||
      currentHost === CLIENT_MAIN_DOMAIN
    ) {
      // On main domain or test domain
      return '';
    }
    const domainPart = currentHost
      .slice(0, currentHost.length - CLIENT_MAIN_DOMAIN.length - 1)
      .split('.');
    const domainPartLast = domainPart[domainPart.length - 1];
    if (domainPartLast === 'workers') {
      return '';
    }
    return COMMUNITY_DOMAIN_ALIASES[domainPartLast] || domainPartLast;
  }
  adaptCommunityRoutes(routeWrapper) {
    const routes = routeWrapper.props.children || [routeWrapper];
    const communitySlug = this.getDomainCommunitySlug();
    if (!communitySlug) {
      return routes;
    }
    const pathRe = new RegExp(`^\\/${communitySlug}(\\/|$)`);
    const wrapHistory = h => {
      const installHack = (keys, funcFactory) => {
        if (typeof keys === 'string') {
          keys = [keys];
        }
        for (const key of keys) {
          const oldFunc = h[key];
          if (!oldFunc.__hasDomainHack) {
            h[key] = funcFactory(oldFunc);
            h[key].__hasDomainHack = true;
          }
        }
      };
      const patchLocation = location => {
        if (typeof location === 'string') {
          return location.replace(pathRe, '/');
        }
        return {
          ...location,
          pathname: location.pathname.replace(pathRe, '/'),
        };
      };
      installHack(['createHref', 'replace', 'push'], oldFunc => {
        return function(location, ...args) {
          return oldFunc.call(this, patchLocation(location), ...args);
        };
      });
      return h;
    };
    const wrapComponent = Component => {
      if (!Component) {
        return undefined;
      }
      return args => {
        args = {
          ...args,
          history: wrapHistory(args.history),
        };
        args.match.params.communitySlug = communitySlug;
        return <Component {...args} />;
      };
    };
    const ret = routes.map(route => {
      const path = route.props.path.replace(/:communitySlug(\/|$)/, '');
      const component = wrapComponent(route.props.component);
      return <Route {...{ path, component }} />;
    });
    return ret;
  }
}

class Routes extends React.Component<Props> {
  render() {
    const { currentUser, isLoadingCurrentUser } = this.props;
    const { title, description } = generateMetaInfo();

    const communityHostHelper = new CommunityHostHelper(this.props.ssrHost);
    const isCommunityDomain = !!communityHostHelper.getDomainCommunitySlug();
    const adaptCommunityRoutes = communityHostHelper.adaptCommunityRoutes.bind(
      communityHostHelper
    );

    if (this.props.maintenanceMode) {
      return (
        <ThemeProvider theme={theme}>
          <ScrollManager>
            <Body>
              <Head
                title="Ongoing Maintenance - Keyy"
                description="Keyy is currently undergoing scheduled maintenance downtime. Please check https://twitter.com/withkeyy for ongoing updates."
              />
              <Maintenance />
            </Body>
          </ScrollManager>
        </ThemeProvider>
      );
    }

    return (
      <ThemeProvider theme={theme}>
        <ErrorBoundary fallbackComponent={ErrorFallback}>
          <ScrollManager>
            <Body>
              {/* Default meta tags, get overriden by anything further down the tree */}
              <Head title={title} description={description} />
              {/* Global navigation, notifications, message notifications, etc */}
              {/*
                AuthViewHandler often returns null, but is responsible for triggering
                things like the 'set username' prompt when a user auths and doesn't
                have a username set.
              */}
              <AuthViewHandler>{() => null}</AuthViewHandler>
              <ThirdPartyContext />
              <Status />
              {isCommunityDomain ? null : <Route component={Navbar} />}

              <Route component={ModalRoot} />
              <Route component={Toasts} />
              <Route component={Gallery} />
              <Route component={ThreadSlider} />

              {/*
                  Switch only renders the first match. Subrouting happens downstream
                  https://reacttraining.com/react-router/web/api/Switch
                */}
              <Switch>
                {isCommunityDomain ? null : (
                  <Route exact path="/" component={DashboardFallback} />
                )}
                {isCommunityDomain ? null : (
                  <Route exact path="/home" component={HomeFallback} />
                )}
                {/* Public Business Pages */}
                {isCommunityDomain ? null : (
                  <Route
                    path="/about"
                    render={externalRedirect('https://www.Keyy.org/about')}
                  />
                )}
                {isCommunityDomain ? null : (
                  <Route path="/contact" component={Pages} />
                )}
                {isCommunityDomain ? null : (
                  <Route
                    path="/terms"
                    render={externalRedirect('https://www.keyy.org/termsofservice')}
                  />
                )}
                {isCommunityDomain ? null : (
                  <Route
                    path="/privacy"
                    render={externalRedirect('https://www.keyy.org/privacypolicy')}
                  />
                )}
                {isCommunityDomain ? null : (
                  <Route
                    path="/terms.html"
                    render={externalRedirect('https://www.keyy.org/termsofservice')}
                  />
                )}
                {isCommunityDomain ? null : (
                  <Route
                    path="/privacy.html"
                    render={externalRedirect('https://www.keyy.org/privacypolicy')}
                  />
                )}
                {isCommunityDomain ? null : (
                  <Route
                    path="/code-of-conduct"
                    render={externalRedirect(
                      'https://learn.keyy.org/keyy-support/getting-started/keyys-code-of-conduct~87204628-d977-4945-af9d-2f60d3e38c9f'
                    )}
                  />
                )}
                {isCommunityDomain ? null : (
                  <Route
                      path="/support"
                      render={externalRedirect(
                             'https://learn.keyy.org/keyy-support/'
                         )}
                  />
                )}
                {isCommunityDomain ? null : (
                  <Route path="/features" component={Pages} />
                )}
                {isCommunityDomain ? null : (
                  <Route path="/faq" component={Pages} />
                )}
                {isCommunityDomain ? null : (
                  <Route path="/apps" component={Pages} />
                )}

                {/* App Pages */}
                {isCommunityDomain ? null : (
                  <Route
                    path="/new/community"
                    component={NewCommunityFallback}
                  />
                )}
                {isCommunityDomain ? null : (
                  <Route path="/new/thread" component={ComposerFallback} />
                )}
                <Route path="/new/search" component={Search} />

                <Route
                  path="/new"
                  render={() => <Redirect to="/new/community" />}
                />

                {isCommunityDomain ? null : (
                  <Route path="/login" component={LoginFallback} />
                )}
                {isCommunityDomain ? null : (
                  <Route path="/explore" component={Explore} />
                )}
                <Route path="/messages/new" component={MessagesFallback} />
                <Route
                  path="/messages/:threadId"
                  component={MessagesFallback}
                />
                <Route path="/messages" component={MessagesFallback} />
                <Route
                  path="/thread/:threadId"
                  component={RedirectOldThreadRoute}
                />
                <Route path="/thread" render={() => <Redirect to="/" />} />
                <Route exact path="/users" render={() => <Redirect to="/" />} />
                <Route exact path="/users/:username" component={UserView} />
                <Route
                  exact
                  path="/users/:username/settings"
                  component={UserSettingsFallback}
                />
                <Route
                  path="/notifications"
                  component={NotificationsFallback}
                />

                <Route
                  path="/me/settings"
                  render={() =>
                    currentUser && currentUser.username ? (
                      <Redirect
                        to={`/users/${currentUser.username}/settings`}
                      />
                    ) : isLoadingCurrentUser ? null : (
                      <Login redirectPath={`${CLIENT_URL}/me/settings`} />
                    )
                  }
                />
                <Route
                  path="/me"
                  render={() =>
                    currentUser && currentUser.username ? (
                      <Redirect to={`/users/${currentUser.username}`} />
                    ) : isLoadingCurrentUser ? null : (
                      <Login redirectPath={`${CLIENT_URL}/me`} />
                    )
                  }
                />

                {/*
                    We check communitySlug last to ensure none of the above routes
                    pass. We handle null communitySlug values downstream by either
                    redirecting to home or showing a 404
                  */}
                {adaptCommunityRoutes(
                  <Switch>
                    <Route
                      path="/:communitySlug/:channelSlug/settings"
                      component={ChannelSettingsFallback}
                    />
                    <Route
                      path="/:communitySlug/:channelSlug/join/:token"
                      component={PrivateChannelJoin}
                    />
                    <Route
                      path="/:communitySlug/:channelSlug/join"
                      component={PrivateChannelJoin}
                    />
                    <Route
                      path="/:communitySlug/settings"
                      component={CommunitySettingsFallback}
                    />
                    <Route
                      path="/:communitySlug/join/:token"
                      component={PrivateCommunityJoin}
                    />
                    <Route
                      path="/:communitySlug/login"
                      component={CommunityLoginFallback}
                    />
                    <Route
                      // NOTE(@mxstbr): This custom path regexp matches threadId correctly in all cases, no matter if we prepend it with a custom slug or not.
                      // Imagine our threadId is "id-123-id" (similar in shape to an actual UUID)
                      // - /id-123-id => id-123-id, easy start that works
                      // - /some-custom-slug~id-123-id => id-123-id, custom slug also works
                      // - /~id-123-id => id-123-id => id-123-id, empty custom slug also works
                      // - /some~custom~slug~id-123-id => id-123-id, custom slug with delimiter char in it (~) also works! :tada:
                      path="/:communitySlug/:channelSlug/(.*~)?:threadId"
                      component={FullscreenThreadView}
                    />
                    <Route
                      path="/:communitySlug/:channelSlug"
                      component={ChannelView}
                    />
                    <Route path="/:communitySlug" component={CommunityView} />
                  </Switch>
                )}
              </Switch>
            </Body>
          </ScrollManager>
        </ErrorBoundary>
      </ThemeProvider>
    );
  }
}

export default compose(withCurrentUser)(Routes);

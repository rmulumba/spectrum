// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { openModal } from 'src/actions/modals';
import { truncateNumber } from 'src/helpers/utils';
import Icon from 'src/components/icons';
import { ReputationWrapper, ReputationLabel } from './style';
import type { Dispatch } from 'redux';

type Props = {
  size?: 'mini' | 'default' | 'large',
  reputation: number,
  tipText?: string,
  tipLocation?: string,
  dispatch: Dispatch<Object>,
  ignoreClick?: boolean,
};

class Reputation extends React.Component<Props> {
  open = e => {
    const { reputation, ignoreClick, dispatch } = this.props;
    e.preventDefault();
    if (ignoreClick) return;
    return dispatch(openModal('REP_EXPLAINER_MODAL', { reputation }));
  };

  render() {
    const {
      tipText = 'Keyy Coin',
      tipLocation = 'top-right',
      reputation,
    } = this.props;

    if (reputation === undefined || reputation === null) return null;

    const renderedReputation = reputation > 0 ? `${reputation}` : '0';

    return (
      <ReputationWrapper
        onClick={this.open}
        tipText={`${tipText}`}
        tipLocation={tipLocation}
      >
        <Icon glyph="keyy-coin" size={18} />

        <ReputationLabel>
          {truncateNumber(parseInt(renderedReputation, 10), 1)}
        </ReputationLabel>
      </ReputationWrapper>
    );
  }
}

export default connect()(Reputation);

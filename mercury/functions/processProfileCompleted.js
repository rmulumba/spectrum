// @flow
const debug = require('debug')('mercury:queue:process-profile-completed');
import { updateUserReputation } from '../models/usersCommunities';
import { PROFILE_COMPLETED, PROFILE_COMPLETED_SCORE } from '../constants';
import type { ReputationEventJobData } from 'shared/bull/types';

export default async (data: ReputationEventJobData) => {
  const { userId } = data;

  debug(`Processing profile completed reputation event`);
  debug(`Got userId: ${userId}`);
  return updateUserReputation(
    creatorId,
    PROFILE_COMPLETED_SCORE,
    PROFILE_COMPLETED
  );
};

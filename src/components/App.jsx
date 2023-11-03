import user from 'data/user.json';
import Profile from './Profile/Profile';

import statisticsData from 'data/statistics.json';
import Statistics from './Statistics/Statistics';
import { Fragment } from 'react';

import friendData from 'data/friends.json';
import FriendList from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />

      <FriendList friends={friendData} />
    </>
  );
};

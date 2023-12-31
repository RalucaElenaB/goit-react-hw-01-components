import user from 'data/user.json';
import Profile from './Profile/Profile';

import statisticsData from 'data/statistics.json';
import Statistics from './Statistics/Statistics';
import { Fragment } from 'react';

import friendData from 'data/friends.json';
import FriendList from './FriendList/FriendList';

import transactionData from 'data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import Container from './Container/Container';

export const App = () => {
  return (
    <>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={statisticsData} />
      </Container>
      <Container>
        <FriendList friends={friendData} />
      </Container>
      <Container>
        <TransactionHistory items={transactionData} />
      </Container>
    </>
  );
};

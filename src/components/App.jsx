import { Profile } from '../components/Task-01-Profile/Profile';
import { Stats } from '../components/Task-02-Stats/Stats';
import { FriendList } from '../components/Task-03-Friends-List/FriendList';
import { TransactionHistory } from '../components/Task-04-Transaction-History/TransactionHistory';

import user from '../components/Task-01-Profile/user.json';
import data from '../components/Task-02-Stats/data.json';
import friends from '../components/Task-03-Friends-List/friends.json';
import transactions from '../components/Task-04-Transaction-History/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> {/*BŁĄD: miałem "items" wpisane "transactions" i compilacja była successfully, ale nie wyświetlało wyników}*/}
      {/*React homework template!*/}
    </div>
  );
};


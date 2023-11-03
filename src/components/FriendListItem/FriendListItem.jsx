import './FriendListItem.modules.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} class="item">
      <span class="status" isOnline={isOnline} />
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

export default FriendListItem;

import PropTypes from 'prop-types';
import './FriendListItem.modules.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const friendOnlineStatus = isOnline ? 'statusOnline' : 'statusOffline';
  
  return (
    <li key={id} class="item">
      <span class={`status ${friendOnlineStatus}`} />
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;

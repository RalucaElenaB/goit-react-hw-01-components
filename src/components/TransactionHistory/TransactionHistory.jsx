import PropTypes from 'prop-types';
import './TransactionHistory.modules.css';

const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th class="transaction-header">Type</th>
          <th class="transaction-header">Amount</th>
          <th class="transaction-header">Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} class="transaction-row">
            <td class="transaction-data">{item.type}</td>
            <td class="transaction-data">{item.amount}</td>
            <td class="transaction-data">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;

import PropTypes from 'prop-types';
import TransactionsCSS from './Transaction.module.css';

export const TransactionHistory = ({ items }) => {
  const liRender = items.map(item => {
    return (
      <tr className={TransactionsCSS.row} key={item.id}>
        <td className={TransactionsCSS.cell}>{item.type}</td>
        <td className={TransactionsCSS.cell}>{item.amount}</td>
        <td className={TransactionsCSS.cell}>{item.currency}</td>
      </tr>
    );
  });
  return (
    <table className={TransactionsCSS.transactionHistory}>
      <thead className={TransactionsCSS.head}>
        <tr>
          <th className={TransactionsCSS.headCell}>Type</th>
          <th className={TransactionsCSS.headCell}>Amount</th>
          <th className={TransactionsCSS.headCell}>Currency</th>
        </tr>
      </thead>

      <tbody>{liRender}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

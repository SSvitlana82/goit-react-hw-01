import style from '../TransactionHistory/TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr className={style.tableHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={style.tableBody}>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;

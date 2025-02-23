import styles from "./transactions.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id} className={styles.tr}>
            <td className={`${styles.td} ${styles.tdType}`}>
              {transaction.type}
            </td>
            <td className={`${styles.td} ${styles.tdAmount}`}>
              {transaction.amount}
            </td>
            <td className={`${styles.td} ${styles.tdCurrency}`}>
              {transaction.currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

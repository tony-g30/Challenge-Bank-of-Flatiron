function TransactionTable({ transactions, deleteTransaction }) {
    const [sortField, setSortField] = useState('description');
    const [sortOrder, setSortOrder] = useState('asc');
  
    const sortedTransactions = [...transactions].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortField] > b[sortField] ? 1 : -1;
      } else {
        return a[sortField] < b[sortField] ? 1 : -1;
      }
    });
  
    const toggleSortOrder = (field) => {
      if (sortField === field) {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortOrder('asc');
      }
    };
  
    return (
      <table>
        <thead>
          <tr>
            <th onClick={() => toggleSortOrder('date')}>Date</th>
            <th onClick={() => toggleSortOrder('description')}>Description</th>
            <th onClick={() => toggleSortOrder('category')}>Category</th>
            <th onClick={() => toggleSortOrder('amount')}>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
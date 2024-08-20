Bank of Flatiron
A React application that allows users to view, add, filter, and delete bank transactions. This app provides a clean interface to manage recent bank transactions and supports filtering, adding new transactions, and deleting existing ones.
#Features
•	View Transactions: Display a table of all transactions fetched from a local JSON server.
•	Add Transactions: Submit a form to add new transactions to the list.
•	Filter Transactions: Use a search bar to filter transactions by description.
•	Delete Transactions: Remove transactions from the list.

#Getting Started
#Prerequisites
•	Node.js and npm installed on your machine.
•	JSON Server for the mock backend.

#Installation
To set up the project locally, follow these steps:
1. Clone the repository:
    ```
    git clone https://github.com/tony-g30/Challenge-Bank-of-Flatiron.git
    ```
2. **Install dependencies:**
    ```
    npm install
    ```
3. **Start the JSON server:**
    ```
json-server --watch db.json --port 8001    ```

5. **Start the React application:**
    ```
    npm run dev
    ```
6. Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage
1.	View Transactions:
•	Navigate to the main page to see a table of all transactions.
2.	Add a New Transaction:
•	Fill out the form and submit to add a new transaction to the list.
3.	Filter Transactions:
•	Use the search bar to filter transactions by description.
4.	Delete a Transaction:
•	Click the "Delete" button next to a transaction to remove it from the list.

##Code Structure
•	src/App.jsx - Main component that handles state management, data fetching, and passes props to child components.
•	src/components/TransactionsTable.jsx - Component that displays transactions in a table format.
•	src/components/TransactionForm.jsx - Component for adding new transactions.
•	src/components/SearchBar.jsx - Component for filtering transactions.



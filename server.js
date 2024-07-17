const express = require('express');
const app = express();
const port = 5000; // Choose any port you prefer

app.use(express.json()); // Middleware to parse JSON requests

const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'expenseuser',
  password: '#Alfred2504', //
  database: 'amaktech_expenses'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1); // Exit the process with failure
  }
  console.log('MySQL connected...');
});

// Handle MySQL disconnection
db.on('error', (err) => {
  console.error('MySQL error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    // Handle reconnection logic
  } else {
    throw err;
  }
});

// Define routes here

// Get all transactions
app.get('/api/transactions', (req, res) => {
  const sql = 'SELECT * FROM transactions';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// Add a new transaction
app.post('/api/transactions', (req, res) => {
  const { text, amount } = req.body;
  const sql = 'INSERT INTO transactions (text, amount) VALUES (?, ?)';
  const values = [text, amount];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ id: result.insertId, text, amount });
  });
});

// Update a transaction
app.put('/api/transactions/:id', (req, res) => {
  const { text, amount } = req.body;
  const { id } = req.params;
  const sql = 'UPDATE transactions SET text = ?, amount = ? WHERE id = ?';
  const values = [text, amount, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ id, text, amount });
  });
});

// Delete a transaction
app.delete('/api/transactions/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM transactions WHERE id = ?';

  db.query(sql, id, (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ message: 'Transaction deleted' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
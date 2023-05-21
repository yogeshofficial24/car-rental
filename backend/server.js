const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database');
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const sql = "INSERT INTO login (username, password) VALUES (?, ?)";
  const values = [username, password];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error('Error executing the query: ', err);
      return res.status(500).json(err);
    }
    console.log('Registered Successfully');
    return res.status(200).json({ message: 'Registered Successfully' });
  });
});

app.listen(3306, () => {
  console.log('Server is listening on port 8081');
});

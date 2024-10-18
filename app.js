const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let todos = [
  { id: 1, task: "Buy groceries", completed: false },
  { id: 2, task: "Clean the house", completed: true },
  { id: 3, task: "Finish homework", completed: false }
];

app.get('/todos', (req, res) => {
  res.status(200).json({
    data: todos
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const APP_PORT = process.env.APP_PORT || 80;

app.get('/todoapi/todos', (req, res) => {
  res.status(200).json({
    data: [
      { id: 1, task: "Buy groceries", completed: false },
      { id: 2, task: "Clean the house", completed: true },
      { id: 3, task: "Finish homework", completed: false }
    ]
  });
});

// hehehehehehehehehehehe
app.listen(APP_PORT, () => {
  console.log(`Server running on http://localhost:${APP_PORT}`);
});

import express from 'express';
import cors from 'cors';
import {status} from 'express/lib/response';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

let assignments = [
    { id: 1, subject: 'CS3301 - Full Stack', title: 'Lab2: React Routing', status: 'Pending'},
    { id: 2, subject: 'Cs3302 - DBMS', title: 'ER Diagram Report', status: 'Submitted' }
]

app.get('/api/assignments', (req, res) => {
    res.json(assignments);
});

app.post('/api/assignments',(req, res) => {
  const newAssignment = {
    id: assignments.length + 1,
    subject: req.body.subject,
    title: req.body.title,
    status: 'Pending'
  };
  assignments.push(newAssignment);
  res.status(201).json(newAssignment);
});


app.put('/api/assignment/:id/submit', (req, res) => {
    const id = parseint(req.params.id);
    const assignment = assignment.find (a => a.id === id);

    if(!assignment) {
        return res.status(404).json({ message: 'Assignment not found'});
    }

    assignment.status = 'Submitted';
    res.json(assignment);
})

app.put('/api/assignment/:id/submit', (req, res) => {

    assignment.status = 'Submitted';
    res.json(assignment);
});

app.listen(PORT, () => {
    console.log(`Node.js server running on http://localhost:${PORT}`);
});
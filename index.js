const express = require('express');
const cors = require('cors')// get data from server .. this is permission command
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())// get data from server .. this is permission command

app.use(express.json()) // shortcut middleware

app.get('/', (req, res) => { //one kind of api
    res.send('hello from my over smarty pant with auto start...........')
});

const users = [
    { id: 1, name: 'shabana', email: 'shabana@gmail.com', phone: '0174974587' },
    { id: 2, name: 'shabnur', email: 'shabnur@gmail.com', phone: '017484587' },
    { id: 3, name: 'purnima', email: 'purnima@gmail.com', phone: '0174974487' },
    { id: 4, name: 'popi', email: 'popi@gmail.com', phone: '0174974587' },
    { id: 5, name: 'pori', email: 'pori@gmail.com', phone: '0174974587' },
    { id: 6, name: 'alia', email: 'alia@gmail.com', phone: '0174974587' },
    { id: 7, name: 'dalia', email: 'dalia@gmail.com', phone: '0174974587' }
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    res.send(users); // see all data in browser
})

app.get('/user/:id', (req, res) => { // see individual user search by id 
    console.log(req.params);

    //const id = req.params.id;//id dhiye index onushare user search
    // const user = users[id]; //id dhiye index onushare user search
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    res.send(user);
});


app.post('/user', (req, res) => { // post data to the server 
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send('user')
})





app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'orange'])
})





app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour soud fazle flavor')
})





app.listen(port, () => {
    console.log('Listening to port', port);
})
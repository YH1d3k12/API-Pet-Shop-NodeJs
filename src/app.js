const express = require('express'); // Import the Express library
const cors = require('cors'); // Import the cors package

const users = require('./routes/users.js');
const clients = require('./routes/clients.js');
const pets = require('./routes/pets.js');
const veterinarians = require('./routes/veterinarians.js');
const appointments = require('./routes/appointments.js');

const app = express(); // Create an instance of an Express application
const PORT = process.env.PORT || 3000; // Choose a port for your server

//Middleware which allows the request of json files
app.use(express.json());
// Enable CORS for all routes
// This allows other ports to send requests
app.use(cors());

app.use('/users', users);
app.use('/clients', clients);
app.use('/pets', pets);
app.use('/veterinarians', veterinarians);
app.use('/appointments', appointments);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
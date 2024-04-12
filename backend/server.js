const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const http = require('http');
const socketIo = require('socket.io');
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000



connectDB()

const app = express()
const server = http.createServer(app);
const io = socketIo(server);

// Store connected users
const users = {};

// Listen for incoming connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Handle new user connections
  socket.on('userConnected', (user) => {
    console.log('User connected:', user);
    users[socket.id] = user;
  });

  // Handle incoming messages
  socket.on('sendMessage', ({ message, sender }) => {
    console.log('Message received:', message, 'from:', sender);
    // Broadcast the message to all connected clients
    io.emit('message', { message, sender });
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
    delete users[socket.id];
  });
});

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.use('/api/records', require('./routes/recordRoutes'))
app.use('/api/patient', require('./routes/patientRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/specialty', require('./routes/specialtyRoutes'))
app.use('/api/doctors', require('./routes/doctorRoutes'))
app.use('/api/appointments', require('./routes/appointmentRoutes'))



app.use(errorHandler)

app.listen(port, () => console.log(`Server started on ${port}`))
// const express = require('express');
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const app = express();

// app.use(bodyParser.json());
// app.use(express.static('public')); // Assuming your HTML files are in a directory named 'public'
// app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// var db = mongoose.connection;

// db.on('error', () => console.log("Error in Connecting to Database"));
// db.once('open', () => console.log("Connected to Database"));

// app.post("/sign_up", (req, res) => {
//     var username = req.body.username;
//     var email = req.body.email;
//     var password = req.body.password;
//     var confirmPassword = req.body.confirmPassword;

//     // Check if email already exists in the database
//     db.collection('users').findOne({ email: email }, (err, result) => {
//         if (err) {
//             throw err;
//         }
//         if (result) {
//             // Email already exists, redirect to login page with a message
//             return res.redirect('login.html?message=Email already in use');
//         } else {
//             // Email doesn't exist, proceed with sign up
//             var data = {
//                 "username": username,
//                 "email": email,
//                 "password": password,
//                 "confirmPassword": confirmPassword
//             };

//             db.collection('users').insertOne(data, (err, collection) => {
//                 if (err) {
//                     throw err;
//                 }
//                 console.log("Record Inserted Successfully");
//                 return res.redirect('login.html');
//             });
//         }
//     });
// });

// app.get("/", (req, res) => {
//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     });
//     return res.redirect('sign up.html');
// });

// app.listen(3000, () => {
//     console.log("Listening on PORT 3000");
// });
// const express = require('express');
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const app = express();

// app.use(bodyParser.json());
// app.use(express.static('public')); // Assuming your HTML files are in a directory named 'public'
// app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on('error', () => console.log("Error in Connecting to Database"));
// db.once('open', () => console.log("Connected to Database"));

// // Define a Mongoose model for student details
// const Student = mongoose.model('Student', {
//     studentName: String,
//     registerNo: String,
//     department: String,
//     email: String,
//     phoneNo: String,
//     gender: String,
//     dob: Date,
//     bloodGroup: String,
//     caste: String,
//     religion: String,
//     community: String,
//     nationality: String,
//     firstGraduate: String,
//     aadharNo: String
// });

// app.post("/sign_up", (req, res) => {
//     const studentData = req.body;

//     // Create a new student document using the Mongoose model
//     const newStudent = new Student(studentData);

//     // Save the new student document to the database
//     newStudent.save((err) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("Error saving data to database");
//         }
//         console.log("Record Inserted Successfully");
//         return res.redirect('residential.html'); // Redirect to the next page
//     });
// });

// app.get("/", (req, res) => {
//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     });
//     return res.redirect('General.html');
// });

// app.listen(3000, () => {
//     console.log("Listening on PORT 3000");
// });
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on('error', () => console.log("Error in Connecting to Database"));
// db.once('open', () => console.log("Connected to Database"));

// const Student = mongoose.model('Student', {
//     studentName: String,
//     registerNo: String,
//     department: String,
//     email: String,
//     phoneNo: String,
//     gender: String,
//     dob: Date,
//     bloodGroup: String,
//     caste: String,
//     religion: String,
//     community: String,
//     nationality: String,
//     firstGraduate: String,
//     aadharNo: String
// });

// app.post("/sign_up", async (req, res) => {
//     const studentData = req.body;
//     const newStudent = new Student(studentData);

//     try {
//         await newStudent.save();
//         console.log("Record Inserted Successfully");
//         return res.redirect('residential.html');
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving data to database");
//     }
// });

// app.get("/", (req, res) => {
//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     });
//     return res.redirect('General.html');
// });

// app.listen(3000, () => {
//     console.log("Listening on PORT 3000");
// });
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on('error', () => console.log("Error in Connecting to Database"));
// db.once('open', () => console.log("Connected to Database"));

// const Student = mongoose.model('Student', {
//     studentName: String,
//     registerNo: String,
//     department: String,
//     email: String,
//     phoneNo: String,
//     gender: String,
//     dob: Date,
//     bloodGroup: String,
//     caste: String,
//     religion: String,
//     community: String,
//     nationality: String,
//     firstGraduate: String,
//     aadharNo: String
// });

// app.post("/sign_up", async (req, res) => {
//     const studentData = req.body;
//     const newStudent = new Student(studentData);

//     try {
//         await newStudent.save();
//         console.log("Record Inserted Successfully");
//         return res.redirect('residential.html');
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving data to database");
//     }
// });

// app.get("/", (req, res) => {
//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     });
//     return res.redirect('General.html');
// });

// app.listen(3000, () => {
//     console.log("Listening on PORT 3000");
// });
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on('error', () => console.log("Error in Connecting to Database"));
// db.once('open', () => console.log("Connected to Database"));

// const Student = mongoose.model('Student', {
//     studentName: String,
//     registerNo: String,
//     department: String,
//     email: String,
//     phoneNo: String,
//     gender: String,
//     dob: Date,
//     bloodGroup: String,
//     caste: String,
//     religion: String,
//     community: String,
//     nationality: String,
//     firstGraduate: String,
//     aadharNo: String
// });

// app.post("/sign_up", async (req, res) => {
//     const studentData = req.body; // Capture all form data
//     const newStudent = new Student(studentData);

//     try {
//         await newStudent.save();
//         console.log("Record Inserted Successfully");
//         return res.redirect('residential.html');
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving data to database");
//     }
// });

// app.get("/", (req, res) => {
//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     });
//     return res.redirect('General.html');
// });

// app.listen(3000, () => {
//     console.log("Listening on PORT 3000");
// });

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"));

const studentSchema = new mongoose.Schema({
    studentName: String,
    registerNo: String,
    department: String,
    email: String,
    phoneNo: String,
    gender: String,
    dob: Date,
    bloodGroup: String,
    caste: String,
    religion: String,
    community: String,
    nationality: String,
    firstGraduate: String,
    aadharNo: String
});

const Student = mongoose.model('Student', studentSchema);

app.post("/sign_up", async (req, res) => {
    const studentData = req.body;
    const newStudent = new Student(studentData);

    try {
        await newStudent.save();
        console.log("Record Inserted Successfully");
        return res.redirect('residential.html');
    } catch (err) {
        console.error(err);
        return res.status(500).send("Error saving data to database");
    }
});

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    });
    return res.redirect('General.html');
});

app.listen(3000, () => {
    console.log("Listening on PORT 3000");
});

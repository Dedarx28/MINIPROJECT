// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/Studentdetails', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on('error', () => console.log("Error in Connecting to Database"));
// db.once('open', () => console.log("Connected to Database"));

// // Define the student schema
// const studentSchema = new mongoose.Schema({
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

// // Define the student model
// const Student = mongoose.model('Stud', studentSchema);

// // Define the residential schema
// const residentialSchema = new mongoose.Schema({
//     doorNo: String,
//     streetName: String,
//     villageName: String,
//     city: String,
//     pinCode: String,
//     state: String,
//     country: String,
//     studentId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Student'
//     }
// });

// // Define the residential model
// const Residential = mongoose.model('stud', residentialSchema);

// const familySchema = new mongoose.Schema({
//     fatherName: String,
//     fatherOccupation: String,
//     motherName: String,
//     motherOccupation: String,
//     guardianName : String,
//     orphanCategory: String,
//     mobileNumber: String,
//     studentId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Student'
//     }
// });
// const familyinfo = mongoose.model('stud', familySchema);

// // Handle POST request for general student information
// app.post("/general_sign_up", async (req, res) => {
//     const studentData = req.body;
//     const newStudent = new Student(studentData);

//     try {
//         const savedStudent = await newStudent.save();
//         console.log("Student Record Inserted Successfully");
//         return res.redirect('residential.html'); // Redirect to the residential information form
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving student data to database");
//     }
// });

// // Handle POST request for residential information
// app.post("/residential_sign_up", async (req, res) => {
//     const residentialData = req.body;
//     const newResidential = new Residential(residentialData);

//     try {
//         await newResidential.save();
//         console.log("Residential Record Inserted Successfully");
//         return res.redirect('familyinfo.html'); // Redirect to the next step
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving residential data to database");
//     }
// });

// app.get("/", (req, res) => {
//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     });
//     return res.redirect('general.html');
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

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/Studentdetails', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on('error', () => console.log("Error in Connecting to Database"));
// db.once('open', () => console.log("Connected to Database"));

// // Define the student schema
// const studentSchema = new mongoose.Schema({
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

// // Define the student model
// const Student = mongoose.model('Stud', studentSchema);

// // Define the residential schema
// const residentialSchema = new mongoose.Schema({
//     doorNo: String,
//     streetName: String,
//     villageName: String,
//     city: String,
//     pinCode: String,
//     state: String,
//     country: String,
//     studentId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Student'
//     }
// });

// // Define the residential model
// const Residential = mongoose.model('Residential', residentialSchema);

// const familySchema = new mongoose.Schema({
//     fatherName: String,
//     fatherOccupation: String,
//     motherName: String,
//     motherOccupation: String,
//     guardianName : String,
//     orphanCategory: String,
//     mobileNumber: String,
//     studentId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Student'
//     }
// });

// // Define the family info model
// const FamilyInfo = mongoose.model('FamilyInfo', familySchema);

// // Handle POST request for general student information
// app.post("/general_sign_up", async (req, res) => {
//     const studentData = req.body;
//     const newStudent = new Student(studentData);

//     try {
//         const savedStudent = await newStudent.save();
//         console.log("Student Record Inserted Successfully");
//         return res.redirect('residential.html'); // Redirect to the residential information form
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving student data to database");
//     }
// });

// // Handle POST request for residential information
// app.post("/residential_sign_up", async (req, res) => {
//     const residentialData = req.body;
//     const newResidential = new Residential(residentialData);

//     try {
//         await newResidential.save();
//         console.log("Residential Record Inserted Successfully");
//         return res.redirect('familyinfo.html'); // Redirect to the next step
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving residential data to database");
//     }
// });

// app.get("/", (req, res) => {
//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     });
//     return res.redirect('general.html');
// });

// app.listen(3000, () => {
//     console.log("Listening on PORT 3000");
// });
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const path = require('path');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/Studentdetails', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on('error', () => console.log("Error in Connecting to Database"));
// db.once('open', () => console.log("Connected to Database"));

// // Define the student schema
// const studentSchema = new mongoose.Schema({
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

// // Define the student model
// const Student = mongoose.model('Stud', studentSchema);

// // Define the residential schema
// const residentialSchema = new mongoose.Schema({
//     doorNo: String,
//     streetName: String,
//     villageName: String,
//     city: String,
//     pinCode: String,
//     state: String,
//     country: String,
//     studentId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Student'
//     }
// });

// // Define the residential model
// const Residential = mongoose.model('Residential', residentialSchema);

// const familySchema = new mongoose.Schema({
//     fatherName: String,
//     fatherOccupation: String,
//     motherName: String,
//     motherOccupation: String,
//     guardianName : String,
//     orphanCategory: String,
//     mobileNumber: String,
//     studentId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Student'
//     }
// });

// // Define the family info model
// const FamilyInfo = mongoose.model('FamilyInfo', familySchema);

// // Routes
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'general.html'));
// });

// app.post("/general_sign_up", async (req, res) => {
//     const studentData = req.body;
//     const newStudent = new Student(studentData);

//     try {
//         const savedStudent = await newStudent.save();
//         console.log("Student Record Inserted Successfully");
//         return res.redirect('residential.html'); // Redirect to the residential information form
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving student data to database");
//     }
// });

// app.post("/residential_sign_up", async (req, res) => {
//     const residentialData = req.body;
//     const newResidential = new Residential(residentialData);

//     try {
//         await newResidential.save();
//         console.log("Residential Record Inserted Successfully");
//         return res.redirect('familyinfo.html'); // Redirect to the next step
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving residential data to database");
//     }
// });

// app.post("/family_info_sign_up", async (req, res) => {
//     const familyData = req.body;
//     const newFamilyInfo = new FamilyInfo(familyData);

//     try {
//         await newFamilyInfo.save();
//         console.log("Family Info Record Inserted Successfully");
//         return res.send("All data saved successfully!"); // or you can redirect to a thank you page
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving family info data to database");
//     }
// });

// app.listen(3000, () => {
//     console.log("Listening on PORT 3000");
// });
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const path = require('path');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on('error', () => console.log("Error in Connecting to Database"));
// db.once('open', () => console.log("Connected to Database"));

// // Define the student schema
// const studentSchema = new mongoose.Schema({
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

// // Define the student model
// const Student = mongoose.model('Student', studentSchema);

// // Define the residential schema
// const residentialSchema = new mongoose.Schema({
//     doorNo: String,
//     streetName: String,
//     villageName: String,
//     city: String,
//     pinCode: String,
//     state: String,
//     country: String,
//     studentId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Student'
//     }
// });

// // Define the residential model
// const Residential = mongoose.model('Residential', residentialSchema);

// // Handle POST request for general student information
// app.post("/general_sign_up", async (req, res) => {
//     const studentData = req.body;
//     const newStudent = new Student(studentData);

//     try {
//         const savedStudent = await newStudent.save();
//         console.log("Student Record Inserted Successfully");
//         return res.redirect('residential.html'); // Redirect to the residential information form
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving student data to database");
//     }
// });

// // Handle POST request for residential information
// app.post("/residential_sign_up", async (req, res) => {
//     const residentialData = req.body;
//     const newResidential = new Residential(residentialData);

//     try {
//         await newResidential.save();
//         console.log("Residential Record Inserted Successfully");
//         return res.redirect('familyinfo.html'); // Redirect to the next step
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving residential data to database");
//     }
// });

// // Serve General.html from the public folder as the root page
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'General.html'));
// });

// app.listen(3000, () => {
//     console.log("Listening on PORT 3000");
// });
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const path = require('path');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("Connected to Database");
// }).catch((error) => {
//     console.log("Error in Connecting to Database:", error);
// });

// // Define the student schema
// const studentSchema = new mongoose.Schema({
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

// // Define the student model
// const Student = mongoose.model('Student', studentSchema);

// // Define the residential schema
// const residentialSchema = new mongoose.Schema({
//     doorNo: String,
//     streetName: String,
//     villageName: String,
//     city: String,
//     pinCode: String,
//     state: String,
//     country: String,
//     studentId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Student'
//     }
// });

// // Define the residential model
// const Residential = mongoose.model('Residential', residentialSchema);

// // Handle POST request for general student information
// app.post("/general_sign_up", async (req, res) => {
//     console.log("Received general student information:", req.body);

//     const studentData = req.body;
//     const newStudent = new Student(studentData);

//     try {
//         const savedStudent = await newStudent.save();
//         console.log("Student Record Inserted Successfully:", savedStudent);
//         return res.redirect('residential.html'); // Redirect to the residential information form
//     } catch (err) {
//         console.error("Error saving student data to database:", err);
//         return res.status(500).send("Error saving student data to database");
//     }
// });

// // Serve General.html from the public folder as the root page
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'General.html'));
// });

// app.listen(3000, () => {
//     console.log("Listening on PORT 3000");
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const path = require('path');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/Sanmathi', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on('error', () => console.log("Error in Connecting to Database"));
// db.once('open', () => console.log("Connected to Database"));

// // Define the student schema
// const studentSchema = new mongoose.Schema({
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

// // Define the student model
// const Student = mongoose.model('Student', studentSchema);

// // Define the residential schema
// const residentialSchema = new mongoose.Schema({
//     doorNo: String,
//     streetName: String,
//     villageName: String,
//     city: String,
//     pinCode: String,
//     state: String,
//     country: String,
//     studentId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Student'
//     }
// });

// // Define the residential model
// const Residential = mongoose.model('Residential', residentialSchema);

// // Handle POST request for general student information
// app.post("/general_sign_up", async (req, res) => {
//     const studentData = req.body;
//     const newStudent = new Student(studentData);

//     try {
//         const savedStudent = await newStudent.save();
//         console.log("Student Record Inserted Successfully");
//         return res.redirect('residential.html'); // Redirect to the residential information form
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving student data to database");
//     }
// });

// // Handle POST request for residential information
// app.post("/residential_sign_up", async (req, res) => {
//     const residentialData = req.body;
//     const newResidential = new Residential(residentialData);

//     try {
//         await newResidential.save();
//         console.log("Residential Record Inserted Successfully");
//         return res.redirect('familyinfo.html'); // Redirect to the next step
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving residential data to database");
//     }
// });

// // Serve General.html from the public folder as the root page
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'General.html'));
// });

// app.listen(3000, () => {
//     console.log("Listening on PORT 3000");
// });




// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const path = require('path');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on('error', () => console.log("Error in Connecting to Database"));
// db.once('open', () => console.log("Connected to Database"));

// // Define the student schema
// const studentSchema = new mongoose.Schema({
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

// // Define the student model
// const Student = mongoose.model('Student', studentSchema);

// // Define the residential schema
// const residentialSchema = new mongoose.Schema({
//     doorNo: String,
//     streetName: String,
//     villageName: String,
//     city: String,
//     pinCode: String,
//     state: String,
//     country: String,
//     studentId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Student'
//     }
// });

// // Define the residential model
// const Residential = mongoose.model('Residential', residentialSchema);

// // Handle POST request for general student information
// app.post("/general_sign_up", async (req, res) => {
//     const studentData = req.body;
//     const newStudent = new Student(studentData);

//     try {
//         const savedStudent = await newStudent.save();
//         console.log("Student Record Inserted Successfully");
//         return res.redirect('residential.html'); // Redirect to the residential information form
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving student data to database");
//     }
// });

// // Handle POST request for residential information
// app.post("/residential_sign_up", async (req, res) => {
//     const residentialData = req.body;
//     const newResidential = new Residential(residentialData);

//     try {
//         await newResidential.save();
//         console.log("Residential Record Inserted Successfully");
//         return res.redirect('familyinfo.html'); // Redirect to the next step
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send("Error saving residential data to database");
//     }
// });

// // Serve General.html from the public folder as the root page
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'General.html'));
// });

// app.listen(3000, () => {
//     console.log("Listening on PORT 3000");
// });
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the application if unable to connect to MongoDB
});

// Define the student schema
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

// Define the student model
const Student = mongoose.model('Students', studentSchema);

// Define the residential schema
const residentialSchema = new mongoose.Schema({
    doorNo: String,
    streetName: String,
    villageName: String,
    city: String,
    pinCode: String,
    state: String,
    country: String,
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }
});

// Define the residential model
const Residential = mongoose.model('Residential', residentialSchema);

// Handle POST request for general student information
app.post("/general_sign_up", async (req, res) => {
    const studentData = req.body;
    const newStudent = new Student(studentData);

    try {
        const savedStudent = await newStudent.save();
        console.log("Student Record Inserted Successfully");
        return res.redirect('residential.html'); // Redirect to the residential information form
    } catch (err) {
        console.error("Error saving student data to database:", err);
        return res.status(500).send("Error saving student data to database");
    }
});

// Handle POST request for residential information
app.post("/residential_sign_up", async (req, res) => {
    const residentialData = req.body;
    const newResidential = new Residential(residentialData);

    try {
        await newResidential.save();
        console.log("Residential Record Inserted Successfully");
        return res.redirect('familyinfo.html'); // Redirect to the next step
    } catch (err) {
        console.error("Error saving residential data to database:", err);
        return res.status(500).send("Error saving residential data to database");
    }
});

// Serve General.html from the public folder as the root page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'General.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

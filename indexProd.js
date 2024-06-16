const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const albumRoute = require("./routes/albums");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const https = require(`https`);
const fs = require("fs");

const options = {
	key: fs.readFileSync('/etc/letsencrypt/live/thevininfo.com/privkey.pem'),
	cert: fs.readFileSync('/etc/letsencrypt/live/thevininfo.com/fullchain.pem')
};

// const server = https.createServer(options ,app);

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (req.body.event == 'posts') {
            cb(null, "./images/posts");
        } else {
            cb(null, "./images/album/" + req.body.event);
        }
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload/posts", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

app.post("/api/upload/gallery", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/albums", albumRoute);
console.log(path.join(__dirname, '../'));

app.use('/static', express.static(path.join(__dirname,  'client', 'build', 'static')));


// app.get('*', (req, res) => {
//     console.log('called');
// 	res.sendFile('./build/index.html', {root: path.join(__dirname)});
// });
app.get('*', (req, res) => {
    console.log('called');
	res.sendFile('./client/build/index.html', {root: path.join(__dirname)});
});



const server = https.createServer(options ,app);

const port = 443

server.listen(port, () => {
	console.log(`Listening on ${port}.`)
});


// app.listen("80", () => {
//     console.log("Backend is running.");
// });
const express = require('express');
const path = require('path');
const cors = require('cors');
// const { message } = require('antd');
const app = express();
// const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, './build')));

// app.use((req, res) => {
//     res.status(200).send('Hello world!');
// });

const PORT = process.env.PORT || 8080;

app.use(
    cors({
        origin: ["http://localhost:3000"]
    })
);

// Route
app.get("/", (req, res) => {
    res.send("welcome to the node server!!");
});

// Another Route
app.get("/api/hello", (req, res) => {
    res.json({message: "Hellow from the server!"});
});

app.get("/api/art-gallery-files", (req, res) => {
    const fs = require('fs');
    const path = require('path');

    let files;
    const folderPath = '../public/images/art_gallery';
    try {
        files = fs.readdirSync(folderPath);
        console.log("Server files: ", files);
    } catch (err) {
        console.err('Error reading directory: ', err);
    }

    res.json({data: files});
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit');
});

// app.use(cors());
// app.get('/api/data', (req, res) => {
//     res.json({ message: 'Hello from the server!' });
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
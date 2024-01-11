const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const { globSync } = require("glob");

//โหลด env จาก env
dotenv.config();
//config
const corsOptions = {
  origin: (origin, callback) => {
    callback(null, true);
  },
  credentials: true,
};

//global params
global.appRoot = path.resolve(__dirname).replace(/\\/g, "/");
global.express = express;

const server = express();
//middleware
//error midddle ware ควรอยู่บนสุด
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
//ลอง
//แปลงjson
server.use(express.json());
//เช็ค orgin ตอนนี้เซ็ตให้ผ่านหมด
server.use(cors(corsOptions));
//ลองรับ form
server.use(express.urlencoded({ extended: false }));

globSync("./api/**/*.js").forEach((file) => {
  const customFile = file.replace(/\\/g, "/").replace("api", "./api");
  console.log("customFile", customFile);
  server.use((req, res, next) => {
    require(customFile)(req, res, next);
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${PORT}`);
});

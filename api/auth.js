const router = express.Router();
const path = require("path")
  .resolve(__dirname)
  .replace(/\\/g, "/")
  .replace(appRoot, "");

console.log("first", path);
router.get(path + "/auth/books", (req, res) => {
  res.json("test");
});

module.exports = router;

const app = require("./app");
const PORT = process.env.PORT || 3000;
const dotenv = require("dotenv");
dotenv.config();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

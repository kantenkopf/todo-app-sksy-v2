const express = require("express");
const cors = require("cors");
const history = require("connect-history-api-fallback");

require("dotenv").config();
require("./helpers/mongodb.helper");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(history({
  //uncomment to expose and directly display api content in browser
  /*
  rewrites: [
    { from: /\/api/, to: '/api'}
  ]*/
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static content
app.use("/", express.static(__dirname + "/views/"));

// api route
app.use("/api", require("./routes/api"));

app.listen(PORT, () => {
  console.log(
    `\nServer listening at: http://localhost:${PORT}\nAPI access via: http://localhost:${PORT}/api\n`
  );
});

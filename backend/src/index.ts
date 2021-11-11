import * as express from "express";
import * as http from "http";
import * as path from "path";

// Express server
const app = express.default();
const httpServer = http.createServer(app);
const port = process.env.PORT || 3001;
httpServer.listen(port, () => {
  console.log("Server listening at port %d", port);
});

// Routing
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.send('{"to": "the moon!"}');
});

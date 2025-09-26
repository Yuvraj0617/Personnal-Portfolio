import http from "http";
import app from "./index.js";
const Port = process.env.Port || 4000;

const server = http.createServer(app);
server.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})

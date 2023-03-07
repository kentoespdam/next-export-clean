// require("dotenv").config();
// const cli = require("next/dist/cli/next-start");

// cli.nextStart(["-p", process.env.PORT || 3000]);


const { createServer } = require("https");
const { parse } = require("url");
const next = require("next")
const fs = require("fs");

const dev = process.env.NODE_ENV !== "production";
const prod = process.env.NODE_ENV === "production";
const app = next({});
const handle = app.getRequestHandler();

const httpsOptions = {
    key: fs.readFileSync("./cert/next.key"),
    cert: fs.readFileSync("./cert/next.crt"),
};

app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
        const parseUrl = parse(req.url, true);
        handle(req, res, parseUrl);
    }).listen(3000, (err) => {
        if (err) throw err;
        console.log("> Server started on https://localhost:3000");
    });
});
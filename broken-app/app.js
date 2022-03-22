const express = require("express");
const axios = require("axios");
const ExpressError = require("./expressError");
const app = express();

app.use(express.json());

const USER_API = "https://api.github.com/users";

app.post("/", async function (req, res, next) {
  try {
    let promises = req.body.developers.map((developer) =>
      axios.get(`${USER_API}/${developer}`)
    );
    let results = await Promise.all(promises);
    let out = results.map((r) => ({
      name: r.data.name,
      bio: r.data.bio,
    }));

    return res.json(out);
  } catch (err) {
    return next(err);
  }
});

app.listen(3000);

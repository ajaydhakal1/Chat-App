const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import Axios

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put( // Fixed the typo here from axins.put to axios.put
      "https://api.chatengine.io/users",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "138d9d74-64af-4ce3-91f8-262a42d9f77e" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);

const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.get("/api/message", (req, res) => {
    res.json({ message: 'hello from nodejs backend' })
})
app.listen(2500, console.log("server running on port no. 2500"))
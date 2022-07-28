const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");


const connectDB = require("./db/conn");
const Message = require("./model/userMessage");

const app = express();


dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());

app.get("/contact", (req, res) => {
  res.send("contact ka page");
});

app.post("/contact", async (req, res) => {
  const { name, email, contact, profession, message } = req.body;
  if (!name || !email || !contact || !profession || !message) {
    return res.status(400).json("unable to send");
  }
  
  let currMessage;
  try {
    currMessage = new Message({ name, email, contact, profession, message });
    await currMessage.save();
  } catch (error) {
    console.log(error.message);
  }

  if (!currMessage) {
    return res.status(500).json({ message: "Unable to Send Data" });
  }

  return res.status(200).json({ currMessage });
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
  );
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is listening on port ${PORT}`));

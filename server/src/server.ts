require("dotenv").config();
import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

// const app = express();
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(express.static(path.join("../client/dist")));
app.get(`*`, (req: any, res: any) => {
  res.sendFile(path.resolve("../client/dist", "index.html"));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("../../client/dist")));
  app.get(`*`, (req: any, res: any) => {
    res.sendFile(path.resolve("../../client/dist", "index.html"));
  });
}

const start = async (): Promise<void> => {
  const PORT: string | number = process.env.PORT || 5000;
  const url: string = process.env.ATLAS_URI;
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`App Up in ${PORT}`));
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
};
start();

import express from "express";
import cors from "cors";
import contactsRouter from "./app/routes/contact.route.js";
import ApiError from "./app/app-error.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));


app.use("/api/contacts", contactsRouter);

app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

app.use((error, req, res, next) => {
  return res.status(error.statusCode || 500).json({
    message: error.message || "Internal Server Error",
  });
});

export default app;

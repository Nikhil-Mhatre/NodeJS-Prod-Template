import mongoose from 'mongoose';
import Logging from './library/logging';
import express from 'express';

process.loadEnvFile(); // Loading environment file using express in-built.
const PORT = process.env.PORT || 4757;
const app = express();

/*
 *  This Middleware parses incoming request bodies that
 *  are URL-encoded (data typically submitted from HTML forms)
 *
 *  The extended: true option enables parsing of complex nested
 *  objects and arrays within the URL-encoded data.
 */
app.use(express.urlencoded({ extended: true }));

/*
 *  It parses incoming request bodies that are in
 *  JSON format (often used for API requests).
 *
 *  limit: "5mb" option (assuming you meant megabytes) specifies
 *  the maximum size allowed for a JSON request body.
 *
 *  strict: This ensures stricter parsing,
 *  rejecting invalid JSON payloads. Keep it true for robustness.
 *
 *  type: By default, express.json parses requests with 
 *  the application/json content type.
 */
app.use(express.json({ limit: '5mb', type: 'application/json', strict: true }));


// Connecting to Mongodb Database
mongoose
  .connect(String(process.env.MONGODB_URL))
  .then(() => {
    app.listen(PORT, () => {
      Logging.success(`\n🚀 Backend Server 🚀\n-> Running at Port: ${PORT}`);
    });
  })
  .catch((err: Error) => {
    Logging.error(`❌****** Failed to start backend server ******❌\n${err} `);
  });

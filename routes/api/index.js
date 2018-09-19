const router = require("express").Router();
const userRoutes = require("./users");
const dataRoutes = require("./data");
// // API Routes
router.use("/users", userRoutes);
router.use("/data", dataRoutes);

// If no API routes are hit, send the React app


module.exports = router;
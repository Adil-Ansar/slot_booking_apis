const slotBookRoutes = require("express").Router();
const basePath = "/slot"; // Base path for slot-related routes

const {
    createSlot, // Endpoint to create a new slot
    slotList    // Endpoint to fetch a list of slots
} = require("./slotBookHandler");

slotBookRoutes.post("/create", createSlot);
slotBookRoutes.get("/list", slotList);

module.exports = {
    slotBookRoutes,
    basePath
};

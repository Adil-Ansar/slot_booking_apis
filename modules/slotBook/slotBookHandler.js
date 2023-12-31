const db = require("../../helper/dbConnect");

// Function to create a slot
const createSlot = async (req, res) => {
    let { date, startSlot, endSlot } = req.body;

    // Convert input date string to a Date object
    date = new Date(date);

    // Remove white spaces from startSlot and endSlot strings
    const startTime = startSlot.replace(/\s/g, '');
    const endTime = endSlot.replace(/\s/g, '');

    // Check if the slot already exists or overlaps with existing slots
    db.query(
        'SELECT * FROM slots WHERE date = ? AND ((? >= startSlot AND ? <= endSlot) OR (? >= startSlot AND ? <= endSlot))',
        [date, startTime, startTime, endTime, endTime],
        (err, result) => {
            if (err) {
                res.status(500).send('Error checking slots');
            } else if (result.length > 0) {
                res.status(400).send('Slot already exists or overlaps');
            } else {
                // If the slot doesn't exist, insert it into the database
                db.query(
                    'INSERT INTO slots (date, startSlot, endSlot) VALUES (?, ?, ?)',
                    [date, startTime, endTime],
                    (err) => {
                        if (err) {
                            res.status(500).send('Error creating slot');
                        } else {
                            res.status(201).send('Slot created successfully');
                        }
                    }
                );
            }
        }
    );
};

// Function to fetch all slots
const slotList = (req, res) => {
    db.query('SELECT * FROM slots', (err, result) => {
        if (err) {
            res.status(500).send('Error fetching slots');
        } else {
            res.status(200).json(result);
        }
    });
}

module.exports = {
    createSlot,
    slotList
};

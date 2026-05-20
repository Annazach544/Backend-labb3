const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: [true, "Företagsnamn måste anges"]
    },
    jobtitle: {
        type: String,
        required: [true, "Jobbtitel måste anges"]
    },
    location: {
        type: String,
        required: [true, "Plats måste anges"]
    },
    startdate: {
        type: String,
        required: [true, "Startdatum måste anges"]
    },
    enddate: {
        type: String,
        required: [true, "Slutdatum måste anges"]
    },
    description: {
        type: String,
        required: [true, "Beskrivning måste anges"]
    }
});

module.exports = mongoose.model("Experience", experienceSchema);
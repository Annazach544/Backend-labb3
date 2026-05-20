const express = require("express");
const router = express.Router();
const Experience = require("../models/Experience");

// GET - hämta alla arbetserfarenheter
router.get("/", async (req, res) => {
    try {
        const experiences = await Experience.find();
        res.json(experiences);
    } catch (error) {
        res.status(500).json({ message: "Fel vid hämtning av data" });
    }
});

// POST - skapa ny arbetserfarenhet
router.post("/", async (req, res) => {
    try {
        const experience = await Experience.create(req.body);
        res.status(201).json(experience);
    } catch (error) {
        res.status(400).json({
            message: "Fel vid lagring av data",
            error: error.message
        });
    }
});

// PUT - uppdatera arbetserfarenhet
router.put("/:id", async (req, res) => {
    try {
        const experience = await Experience.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!experience) {
            return res.status(404).json({ message: "Posten hittades inte" });
        }

        res.json(experience);
    } catch (error) {
        res.status(400).json({
            message: "Fel vid uppdatering av data",
            error: error.message
        });
    }
});

// DELETE - radera arbetserfarenhet
router.delete("/:id", async (req, res) => {
    try {
        const experience = await Experience.findByIdAndDelete(req.params.id);

        if (!experience) {
            return res.status(404).json({ message: "Posten hittades inte" });
        }

        res.json({ message: "Posten är raderad" });
    } catch (error) {
        res.status(500).json({ message: "Fel vid radering av data" });
    }
});

module.exports = router;
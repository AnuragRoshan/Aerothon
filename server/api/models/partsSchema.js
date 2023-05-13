const mongoose = require("mongoose");

const partsSchema = mongoose.Schema(
    {
        part: {
            type: String,
        },
        material_Composition: {
            type: String
        },
        age: {
            type: String
        },
        condition: {
            type: String
        },
        location: {
            type: String
        },
        manufacturer: {
            type: String
        },
        aircraft_model: {
            type: String
        },
        potential_use_cases: {
            type: String
        },
        new_parts_carbon_Footprint: {
            type: String
        },
        recycled_parts_carbon_footprint: {
            type: String
        },
        water_usage_new_parts: {
            type: String
        },
        water_usage_recycled_parts: {
            type: String
        },
        landfill_waste_new_parts: {
            type: String
        },
        landfill_waste_recycled_part: {
            type: String
        },
        energy_consumption_new_parts: {
            type: String
        },
        energy_consumption_recycled_parts: {
            type: String
        },
        recycling_rate: {
            type: String
        },
        toxicity_score_new_parts: {
            type: String
        },
        toxicity_score_recycled_parts: {
            type: String
        },
        remanufacturing_potential: {
            type: String
        },
        life_cycle_assessment: {
            type: String
        },
        renewable_material_content: {
            type: String
        },
        carbon_footprint_saved: {
            type: String
        },
        water_usage_saved: {
            type: String
        }
    }
);

module.exports = mongoose.model("parts", partsSchema);

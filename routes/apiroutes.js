var db = require("../models")
const { Workout } = require("../models")

module.exports = function(app) {
//get latest 
    app.get("api/workouts", (req,res) =>{
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        });
    });
};
//New post 
    app.post("api/workouts", async(req,res) => {
        
    })
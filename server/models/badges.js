var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var badgesSchema = new Schema({
    badgeImage: { type: String },
    mileStone: { type: String },
    pointValue: {
        type: Object,
        enum: [
            {
                difficulty: 'easy',
                points: 5,
            },
            {
                difficulty: 'medium',
                points: 10,
            },
            {
                difficulty: 'hard',
                points: 20
            }
        ]
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'categories' }
});

module.exports = mongoose.model('badges', badgesSchema);

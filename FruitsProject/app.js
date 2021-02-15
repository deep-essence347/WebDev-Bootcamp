const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB',{ useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit ({
//     name: 'Peaches',
//     rating: 10,
//     review: 'pretty solid'
// });
// fruit.save();

// const orange = new Fruit({
//     name: 'Orange',
//     rating: 4,
//     review: 'Too sour'
// });
// const banana = new Fruit({
//     name: 'Banana',
//     rating: 3,
//     review: 'Weird texture'
// });

// Fruit.insertMany([orange,banana], function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Successfully saved');
//     }
// });

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    } else{
        fruits.forEach(function(fruit, err){
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({_id: '5f9ad229c99c85387cde1d0c'}, {review: 'Exotic'}, function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log('Success');
//     }
// })

// Fruit.deleteOne({name: 'Peaches'}, function (err) {
//     if(err){
//         console.log(err);
//     } else{
//         console.log('success');
//     }
// })

const personSchema= mongoose.Schema({
    name: String,
    age: Number,
    favourite: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const pineapple = new Fruit({
    name: 'Pineapple',
    score: 9,
    review: 'Great'
})
// pineapple.save();

const person = new Person({
    name: 'John',
    age: 34,
    favourite: pineapple
});

// person.save();

// Person.deleteMany({name: 'John'}, function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log('success');
//     }
// })

var berry = new Fruit();
Fruit.findOne({_id: "5f9ae65168497f2adc1a25b1"},function(err,fruit){
    if(err){
        console.log(err);
    } else{
        console.log(fruit);
        Person.updateOne({_id: '5f9adf72c1ad55123ce6afe7'}, {favourite: fruit},function(err){
            if(err){
                console.log(err);
            } else{
                console.log('success');
                mongoose.connection.close();
            }
        })
    }
})
// berry.save()

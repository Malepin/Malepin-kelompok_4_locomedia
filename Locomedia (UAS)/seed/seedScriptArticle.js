const Articles = require('../model/article')
const mongoose = require('mongoose');
const { exists } = require('../model/article');

mongoose.connect(('mongodb+srv://Mathew:gesFd1Q0PI9u0hjb@locomedia.fe0cl.mongodb.net/locomedia?retryWrites=true&w=majority')
, (err,res) => {
    if (err){
        console.log(err);
    } else {
        console.log('Database terhubung untuk seeding');
    }
})

const articles = [
    new Cities({
        imagePath: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/cb/jakarta.jpg?w=600&h=600&s=1',
        sumber: 'From Locomedia',
        title: "The Beauty of Indonesia's Nature"
    }),
]

var done = 0
for (var i=0 ; i<articles.length; i++){
    cities[i].save((err, res) => {
        done++
        if (done == cities.length){
            console.log('kota berhasil diupload');
            exit();
        }
    })
}

function exit(){
    mongoose.disconnect();
}
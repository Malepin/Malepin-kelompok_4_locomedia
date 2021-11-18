const Cities = require('../model/city')
const mongoose = require('mongoose');
const { exists } = require('../model/city');

mongoose.connect(('mongodb+srv://Mathew:gesFd1Q0PI9u0hjb@locomedia.fe0cl.mongodb.net/locomedia?retryWrites=true&w=majority')
, (err,res) => {
    if (err){
        console.log(err);
    } else {
        console.log('Database terhubung untuk seeding');
    }
})

const cities = [
    new Cities({
        link: 'jakarta',
        imagePath: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/cb/jakarta.jpg?w=600&h=600&s=1',
        name: 'Jakarta',
        location: 'DKI Jakarta, Indonesia'
    }),
    new Cities({
        link: 'kuta',
        imagePath: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/9b/2f/be/kuta.jpg?w=600&h=600&s=1',
        name: 'Kuta',
        location: 'Bali, Indonesia'
    }),
    new Cities({
        link: 'ubud',
        imagePath: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f4/0f/caption.jpg?w=600&h=600&s=1',
        name: 'Ubud',
        location: 'Bali, Indonesia'
    }),
    new Cities({
        link: 'denpasar',
        imagePath: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/fd/denpasar.jpg?w=600&h=600&s=1',
        name: 'Denpasar',
        location: 'Bali, Indonesia'
    }),
]

var done = 0
for (var i=0 ; i<cities.length; i++){
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
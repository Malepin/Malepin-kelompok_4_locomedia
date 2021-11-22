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
    new Articles({
        imagePath: 'https://ik.imagekit.io/tvlk/blog/2020/01/keindahan-alam-indonesia-6-Wikipedia.jpg',
        link: 'artikel1',
        sumber: 'From Locomedia',
        title: "Natural Beauty of Indonesia"
    }),
    new Articles({
        imagePath: 'https://keluhkesah.com/wp-content/uploads/2020/11/5.-Mempelajari-Pengertian-Sejarah-dan-manfaat-Keberagaman-Budaya-Indonesia-Lebih-Jauh.jpg',
        sumber: 'From Locomedia',
        link: 'artikel2',
        title: "The Cultures of Indonesia"
    }),
    new Articles({
        imagePath: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1608637115/wb6howgpnvolrkg44uqe.jpg',
        link: 'artikel3',
        sumber: 'From Locomedia',
        title: "Unique Ecosystem of Indonesia"
    }),
]

var done = 0
for (var i=0 ; i<articles.length; i++){
    articles[i].save((err, res) => {
        done++
        if (done == articles.length){
            console.log('article berhasil diupload');
            exit();
        }
    })
}

function exit(){
    mongoose.disconnect();
}
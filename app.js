var express = require('express');
var path = require('path')
var app = express();
var port = process.env.PORT || 3000;


app.set('views','./views/pages')
app.set('view engine','jade')
app.use(express.static(path.join(__dirname,'bower_components')))


app.listen(port);

//index page
app.get('/', function(req, res){
    res.render('index',{
        title:'imooc 首页',
        movies:[{
            title:'x战警',
            _id:1,
            poster:'http://cdn.duitang.com/uploads/item/201207/28/20120728182743_Nusta.jpeg'
        },
        {
            title:'敢死队3',
            _id:2,
            poster:'http://cdn.duitang.com/uploads/item/201207/28/20120728182743_Nusta.jpeg'
        },
        {
            title:'速度与激情',
            _id:3,
            poster:'http://cdn.duitang.com/uploads/item/201207/28/20120728182743_Nusta.jpeg'
        },
        {
            title:'加勒比海盗',
            _id:4,
            poster:'http://cdn.duitang.com/uploads/item/201207/28/20120728182743_Nusta.jpeg'
        },
        {
            title:'同桌的你',
            _id:5,
            poster:'http://cdn.duitang.com/uploads/item/201207/28/20120728182743_Nusta.jpeg'
        }]
    })
});

//details page
app.get('/details/:id', function(req, res){
    res.render('details',{
        title:'imooc 详情页',
        movie:{
            doctor:'斯皮尔伯格',
            country:'美国',
            title:'X战警',
            year:2014,
            poster:'http://cdn.duitang.com/uploads/item/201207/28/20120728182743_Nusta.jpeg',
            language:'英语',
            summary:'《X战警》（X-Men）是由美国漫威（Marvel）出品，讲述了这个世界上人类中的一小部分存在基因变异，这部分变种人拥有各种各样的超能力。而世界对于这样一群异类产生了恐惧。万磁王为了争取更多变种人的权利，他聚集了一批部下不断针对人类进行破坏。而X教授致力于人类与变种人之间和谐生存，他创办了X学院，收取变种人学生，教导他们知识，让他们能合理运用自己的能力。培养他们成为X战警，保卫人类与变种人。'

        }
    })
});

//list page
app.get('/list', function(req, res){
    res.render('list',{
        title:'imooc 列表页',
        movies:[{
                    title:'x战警',
                    _id:1,
                    doctor:'斯皮尔伯格',
                    country:'美国',
                    title:'X战警',
                    year:2014,
                    poster:'http://cdn.duitang.com/uploads/item/201207/28/20120728182743_Nusta.jpeg',
                    language:'英语',
                    summary:'《X战警》（X-Men）是由美国漫威（Marvel）出品，讲述了这个世界上人类中的一小部分存在基因变异，这部分变种人拥有各种各样的超能力。而世界对于这样一群异类产生了恐惧。万磁王为了争取更多变种人的权利，他聚集了一批部下不断针对人类进行破坏。而X教授致力于人类与变种人之间和谐生存，他创办了X学院，收取变种人学生，教导他们知识，让他们能合理运用自己的能力。培养他们成为X战警，保卫人类与变种人。'
                },
                {
                    title:'敢死队3',
                    _id:2,
                    doctor:'斯皮尔伯格',
                    country:'美国',
                    title:'X战警',
                    year:2014,
                    poster:'http://cdn.duitang.com/uploads/item/201207/28/20120728182743_Nusta.jpeg',
                    language:'英语',
                    summary:'《X战警》（X-Men）是由美国漫威（Marvel）出品，讲述了这个世界上人类中的一小部分存在基因变异，这部分变种人拥有各种各样的超能力。而世界对于这样一群异类产生了恐惧。万磁王为了争取更多变种人的权利，他聚集了一批部下不断针对人类进行破坏。而X教授致力于人类与变种人之间和谐生存，他创办了X学院，收取变种人学生，教导他们知识，让他们能合理运用自己的能力。培养他们成为X战警，保卫人类与变种人。'
                },
                {
                    title:'速度与激情',
                    _id:3,
                    doctor:'斯皮尔伯格',
                    country:'美国',
                    title:'X战警',
                    year:2014,
                    poster:'http://cdn.duitang.com/uploads/item/201207/28/20120728182743_Nusta.jpeg',
                    language:'英语',
                    summary:'《X战警》（X-Men）是由美国漫威（Marvel）出品，讲述了这个世界上人类中的一小部分存在基因变异，这部分变种人拥有各种各样的超能力。而世界对于这样一群异类产生了恐惧。万磁王为了争取更多变种人的权利，他聚集了一批部下不断针对人类进行破坏。而X教授致力于人类与变种人之间和谐生存，他创办了X学院，收取变种人学生，教导他们知识，让他们能合理运用自己的能力。培养他们成为X战警，保卫人类与变种人。'
                },
                {
                    title:'加勒比海盗',
                    _id:4,
                    doctor:'斯皮尔伯格',
                    country:'美国',
                    title:'X战警',
                    year:2014,
                    poster:'http://cdn.duitang.com/uploads/item/201207/28/20120728182743_Nusta.jpeg',
                    language:'英语',
                    summary:'《X战警》（X-Men）是由美国漫威（Marvel）出品，讲述了这个世界上人类中的一小部分存在基因变异，这部分变种人拥有各种各样的超能力。而世界对于这样一群异类产生了恐惧。万磁王为了争取更多变种人的权利，他聚集了一批部下不断针对人类进行破坏。而X教授致力于人类与变种人之间和谐生存，他创办了X学院，收取变种人学生，教导他们知识，让他们能合理运用自己的能力。培养他们成为X战警，保卫人类与变种人。'
                },
                {
                    title:'同桌的你',
                    _id:5,
                    doctor:'斯皮尔伯格',
                    country:'美国',
                    title:'X战警',
                    year:2014,
                    poster:'http://cdn.duitang.com/uploads/item/201207/28/20120728182743_Nusta.jpeg',
                    language:'英语',
                    summary:'《X战警》（X-Men）是由美国漫威（Marvel）出品，讲述了这个世界上人类中的一小部分存在基因变异，这部分变种人拥有各种各样的超能力。而世界对于这样一群异类产生了恐惧。万磁王为了争取更多变种人的权利，他聚集了一批部下不断针对人类进行破坏。而X教授致力于人类与变种人之间和谐生存，他创办了X学院，收取变种人学生，教导他们知识，让他们能合理运用自己的能力。培养他们成为X战警，保卫人类与变种人。'
        }]
    })
});

//admin page
app.get('/admin', function(req, res){
    res.render('admin',{
        title:'imooc 后台维护页'
    })
});

console.log("imooc listening on port " + port)
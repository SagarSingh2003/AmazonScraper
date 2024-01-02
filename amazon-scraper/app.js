const express = require('express');
const axios = require('axios');
const app = express();


app.use(express.static('public'));

app.get('/' , (req , res) => {
    res.send('index');
})

app.get('/getAmazonData' , (req ,res) => {

    const queryParamString = req.headers.queryparamstring;
    const category = req.headers.categoryfield;
    const queryParamSplit = queryParamString.split('+');

    console.log("this is query param string : " ,  queryParamString);
    console.log(queryParamSplit);
    // const queryString = map.reduce(( elem , c) => elem +  )
    console.log(category);

    

    async function getAmazonData(){

        let data , reg;
        if(queryParamString.length != 0 && category.length != 0){
    
            data =  await axios.get(`https://www.amazon.com/s?k=${queryParamString}+${category}&crid=3O5BHDGM7ZS1W&sprefix=yonex+racket%2Caps%2C1093&ref=nb_sb_noss_1` , {"mode" : 'no-cors'});
            reg = new RegExp(`<img class="s-image".+?alt=".+?${queryParamSplit[0]}.+?${category}.+?data-image-source-density="1"\/>` , 'gi')

        }else if(category.length == 0){

             data =  await axios.get(`https://www.amazon.com/s?k=${queryParamString}` , {"mode" : 'no-cors'});
             reg = new RegExp(`<img class="s-image".+?alt=".+?${queryParamSplit[0]}.+?data-image-source-density="1"\/>` , 'gi');

        }else{

            data =  await axios.get(`https://www.amazon.com/s?k=${category}` , {"mode" : 'no-cors'});
            reg = new RegExp(`<img class="s-image".+?alt=".+?${category}.+?data-image-source-density="1"\/>` , 'gi');

        }
        console.log(reg);
        // console.log(data.data);
        let oneImage = reg.exec(data.data);
        console.log('this is oneImage :' , oneImage);
        let arrOfImagesData = []
        let counter = 0;

        while(oneImage != null && counter != 30 ){
            arrOfImagesData.push(oneImage[0]);
            oneImage = reg.exec(data.data);
            console.log(oneImage);
            console.log('.');
            counter = counter + 1 ;
            console.log(counter);
        }

        let arrOfImages = [];

        console.log('arrOfImages length are : ' , arrOfImagesData.length);
        for(let eachData of arrOfImagesData){
            // console.log(eachData);

            const regEx = new RegExp('src=".*?"' , 'g');
            let image = regEx.exec(eachData);

            while(image != null){
                arrOfImages.push(image[0]);
                image = regEx.exec(eachData);   
                // console.log(image);
            }
        }

        console.log(arrOfImages , "these are links for all the images");
        return arrOfImages;
    }
    
    const arrOfImages = getAmazonData();
    arrOfImages.then((arrOfImages) => {
        console.log(arrOfImages , 'this we will send to the client');
        try{
            res.json({
                "arr" : arrOfImages
            })
        }catch(err){
            console.log(err);
        }
    })
    // console.log(arrOfImages , 'this we will send to the client');
    // try{
    //     res.json({
    //         "arr" : arrOfImages
    //     })
    // }catch(err){
    //     console.log(err);
    // }
    
})
app.listen(3000 , () => {
    console.log(`app listening at port 3000`)
})



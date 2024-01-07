let queryParamString = "";
let categoryField = "";

async function Search(){
    queryParamString = "";
    categoryField = "";
    const item = document.getElementById('searchBar').value;
    categoryField = document.getElementById('categoryBar').value;
    console.log(categoryField);
    const arrOfQuery = item.split(' ')

    

    for(let eachItem of arrOfQuery){

        if(queryParamString == ""){
            queryParamString = eachItem
        }else{
            queryParamString = queryParamString + "+" + eachItem;
        }
    }

    console.log('queryParamString , ' , queryParamString);

    const res = await fetch(`http://localhost:3000/getAmazonData` , { headers : {
        "queryParamString" : queryParamString,
        "categoryField" : categoryField 
    }
    });
    const Data = await res.json();
    console.log(Data.arr);

    let indexCounter = 0;

    function increaseCounterAndChangeImage(){

        const imgLink = Data.arr[indexCounter].slice(5 , Data.arr[indexCounter].length-1);
        console.log(imgLink);
        document.querySelector('img').src = imgLink;
        
        indexCounter += 1

        if(indexCounter === Data.arr.length){
            return 0;
        }
        setTimeout(increaseCounterAndChangeImage , 3000);
    }
    
    increaseCounterAndChangeImage();


    // try{

    //     const res = await fetch(`https://www.amazon.com/s?k=${queryParamString}` , {mode : 'no-cors'})
    //     console.log(res.text);

    //     var parser = new DOMParser();
    //     const doc = parser.parseFromString(res.text , "text/html");

    //     console.log(doc);

    //     // try{

    //     //     const htmlData = await res.json()

    //     // }catch(err){
    //     //     console.log('res.json() err :' , err);
    //     // }
    // }catch(err){
    //     console.log('fetching err : ' , err);

    // }
    
}
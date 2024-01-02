const sentence = ' <img src="sdfsdfs" adfsfsfdfsdfsdfsdfdfsdfsdfdfdfsdfdfsdfsdfdsfsdfsdfsfsdfdfsdfdfsdf /></div> <img src="sdfsdfs" dfsdf /></div> <img src="sdfsdfs" adfsfsfdfsdfsdfsdfdfsdfsdfdfdfsdfdfsdfsdfdsfsdfsdfsfsdfdfsdfdfsdf /></div> '

const regEx = /<img src="sdfsdfs".*?\/>/g

const match = regEx.exec(sentence);
console.log(match[0]);


const queryString = queryParamSplit.reduce(( elem , c) => elem + c + ".?", ""  );

try{
    console.log('this is queryParamstring : ', queryParamString , 'this is category: ' ,  category);
    const url = `https://amazon.com/s?k=${queryParamString}+${category}`
    console.log(url);
    data =  await axios.get( url , {"mode" : 'no-cors'});
    console.log(data);
    
    // console.log(data.data);
    reg = new RegExp(`<img class="s-image".+?alt="[^"]*${queryString}${category}[^"]*".*?data-image-source-density="1"\/>` , 'gi')
    
    console.log('got here');
}catch(err){
    console.log(err);
}
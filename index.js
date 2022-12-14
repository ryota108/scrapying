// 楽天のイヤホンのタイトルと値段を取得するコード

const PORT = 3000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const URL = "https://search.rakuten.co.jp/search/mall/earphone";
const data = [];

axios(URL)
.then((response)=>{
    const htmlParser = response.data;
    
    const $ = cheerio.load(htmlParser);

    $(".searchresultitem",htmlParser).each(function(){
        const title = $(this).find(".title").text();
        const price = $(this).find(".important").text();
        data.push({title,price});
        console.log(data)
    })
}).catch((error)=>{console.log(error)});

app.listen(PORT)




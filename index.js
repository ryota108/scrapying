// 楽天のイヤホンのタイトルと値段を取得するコード

const PORT = 3000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const URL = "https://www.amazon.co.jp/s?k=earphone";
const data = [];

axios(URL)
.then((response)=>{
    const htmlParser = response.data;
    
    const $ = cheerio.load(htmlParser);

    $(".sg-col-inner",htmlParser).each(function(){
        const star = $(this).find(".a-icon-alt").text();
        let title = $(this).find(".a-text-normal").text();
        title = title.substring(0,30)
        data.push({star,title});
        console.log(data)
    })
}).catch((error)=>{console.log(error)});

app.listen(PORT)




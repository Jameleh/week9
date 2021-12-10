
import express from 'express'
import puppeteer from 'puppeteer'

const app=express();
const PORT=process.env.PORT||4321;
app
    .use(function (req, res, next) {
        res.setHeader('Content-Type', 'text/plain')
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
        next()
    })

    .get('/login/', (req, res) => {
        res.send("itmo308556")
    })
    .get('/test/', async r => {
        const { URL } = r.query;
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(URL, { waitUntil: 'networkidle2' });
        await page.click('#bt');
        const input = document.querySelector('#inp').value;
        r.res.send(input);
    })
  .listen(PORT,()=>console.log(`SERVER is linsteing on ${PORT}`))
    
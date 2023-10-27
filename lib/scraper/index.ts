import { config } from "process";
import axios from "axios";
import * as cheerio from "cheerio";
export async function scrapeAmazonProduct(url:string){
    if(!url) return;

    // Bright data proxy configuration

    // curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_376eeff4-zone-unblocker:0h8s0n4i0s9j -k https://lumtest.com/myip.json
    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD); 
    const port = 22225;
    const session_id = (1000000 * Math.random())|0;
    const options = {
        auth: {
            username: '${username}-session-${session_id}',
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,

    }
    try{
        // fetching the product page
        const response = await axios.get(url, options);
        const $ = cheerio.load(response.data);

        // extracting product title
        const title = $('#productTitle').text().trim();
        console.log({title});

        // console.log(response.data);

    }catch(error:any){
        throw new Error('Failed to scrape product: ${error.message}');
    }

}
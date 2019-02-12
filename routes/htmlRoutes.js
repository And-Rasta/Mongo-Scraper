const request = require('request');
const BASEURL = require('base-url');


module.exports = (app) => {
    
    // Get route
    app.get('/', (req, res) => {
        res.render('index');
    });

    // Scrape
    app.get('/scrape', (req, res) => {
        
        let baseUrl = req.headers.referer;
        request.get(baseUrl + "api/scrape", (err, response) => {
            if(err) throw err;
            let articles = JSON.parse(response.body);
            res.render('articles', {layout: false, articles: articles });
        })
    })
}
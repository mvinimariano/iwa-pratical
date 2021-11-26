const   express = require('express'), // Allows to respond to HTTP requests, define routing and renders the required content
        fs = require('fs'), // Working with the file system(read and write files)
        http = require('http'),// HTTP server
        path = require('path'),// Utility that allows us to work with directory paths
        xml2js = require('xml2js'),// XML to JSON converter
        xmlParse = require('xslt-processor').xmlParse,// Parsing XML
        xsltProcess	 = require('xslt-processor').xsltProcess; //Processing XSLT

const   router = express(),
        server = http.createServer(router);

router.use(express.static(path.resolve(__dirname,'vies'))) // serving static content from "views" folder

router.get('/', function(req,res){

    res.writeHead(200,{'Content-Type' : 'text/html'});

    let cml = fs.readFileSync('PaddysCafe.xml', 'utf8'),
        xsl = fs.readFileSync('PaddysCafe.xml', 'utf8');


    console.log(xml);
    console.log(xsl);
    
    let doc = xmlParse(xml),
        stylesheet  = xmlParse(xsl);

    let result = xsltProcess(doc, stylesheet);    

    console.log(result.toString());

});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
        const addr = server.address();
        console.log('Server listening at', addr.address + ':' + addr.port) 

});



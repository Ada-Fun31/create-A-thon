let express = require("express");
let app = express();

app.use('/', express.static('public'));

/*----------ROUTES----------*/

// additional test route 
app.get("/testPage", (request, response) => {
    // return "response", ".send" shows on the page
    response.send("what is this send data type?");
})


let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("listening at", port);
})

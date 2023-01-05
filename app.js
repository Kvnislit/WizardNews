const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");

const app = express();
app.get(express.static('public/style.css'));
app.use(morgan('dev'));

app.get("/", (req, res) => {
  
  const posts = postBank.list();
  
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Wizard News</title>
    </head>
    <body>
      <ul>
      ${
        posts.map( post => {
          return `<li>${ post.name}</li>
          <p>${post.title}</p>`;
        }).join('')
     }
      </ul>
    </body>
  </html>`;

  res.send(html);
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

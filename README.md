Para iniciar o proejto, é encessário utiliza o comando:

            npm init es6 -y
Para utilizar o framework express:

            npm install express

COdigo básico do servidor para inicializar um server:

```javascript
import express from "express"

const app = express();

app.listen(3000, () => {
    console.log("Server started...");
})
```

Rodar o server:
        node server.js
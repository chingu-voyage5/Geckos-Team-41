import * as express from 'express';
import { ExampleController } from './controllers/example.controller';

const app: express.Application = express();
const port: number = process.env.PORT || 3000;

app.use('/example', ExampleController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});

import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config() {

    const MONGO_URI = 'mongodb://localhost/test';
    mongoose.connect(process.env.MONGODB_URI || MONGO_URI);

    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev'));

  }

  public routes(): void {
    let router: express.Router;
    router = express.Router();

    this.app.use('/', router);
  }
}

export default new Server().app;

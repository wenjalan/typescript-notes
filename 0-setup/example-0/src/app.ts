import express, {Request, Response, Application} from 'express';

console.log('hello world! this is typescript!');

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response): void => {
    res.send('hello! this is a response!');
});

app.listen(PORT, (): void => {
    console.log(`Server started on port ${PORT}`);
});
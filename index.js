import Express from 'express';
import bodyParser from 'body-parser';

import Post from './entities/Post.js';

const posts = [
  new Post('hello', 'how are you?'),
  new Post('nodejs', 'story about nodejs'),
];

export default () => {
  const app = new Express();
  app.set('view engine', 'pug');
  
  //app.use('/assets', Express.static(process.env.NODE_PATH.split(':')[0]));
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/posts', (req, res) => {
    res.render('posts/index', { posts });
  });

  app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const post = posts.find((elem) => String(elem.index) === id);
    if (!post) {
      res.sendStatus(404);
    } else {
      res.render('posts/show', { ...post });
    };
  });



  return app;
};
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

  app.get('/posts/new', (req, res) => {
    res.render('posts/new');
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

  // app.post('/posts', (req, res) => {
  //   if (!req.body) {
  //     res.redirect('/posts/new');
  //     return res.sendStatus(422);
  //     }
  //   const { title, body } = req.body;
  //   const newPost = new Post(title, body);
  //   console.log('newPost', newPost);
  //   posts.push(newPost);
  //   res.redirect(`/posts/${newPost.index}`);
  // });

  app.post('/posts', (req, res) => {
    const { title, body } = req.body;
    console.log('req.body', req.body);
    if ((title === '') || (body === '')) {
      res.sendStatus(422);
      res.render('/posts/new', {title: 'Fill the title', body: 'Write something'});
    };
    const newPost = new Post(title, body);
    posts.push(newPost);
    res.redirect(`/posts/${newPost.index}`);
  });
  


  return app;
};
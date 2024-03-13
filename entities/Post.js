class Post {
    static id = 1;
    constructor(title, body) {
      this.title = title;
      this.body = body;
      Post.id = + 1;
    }
  }
  
export default Post;


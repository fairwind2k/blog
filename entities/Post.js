class Post {
  static id = 1;
  static getId() {
    return Post.id;
  }
  constructor(title, body) {
    this.index = Post.getId();
    this.title = title;
    this.body = body;
    Post.id = this.index + 1;
 } 
}
  
export default Post;


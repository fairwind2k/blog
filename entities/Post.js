class Post {
  static id = 1;
  static getId() {
    return Post.id;
  }
  constructor(title, text) {
    this.index = Post.getId();
    this.title = title;
    this.text = text;
    Post.id = this.index + 1;
 } 
}
  
export default Post;


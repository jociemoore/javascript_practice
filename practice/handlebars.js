$(function(){
  var postsScript = Handlebars.compile($('#posts').html());
  Handlebars.registerPartial('tag', $('#tag').html());



  var posts = [];
  var post = {
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem <span style='color:red;'>accusantium</span> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  };
  post.tags = ['Lorem', 'ipsum', 'Nemo'];
  posts.push(post);

  var post2 = Object.assign({}, post);
  delete post2.tags;
  posts.push(post2);




  var html = postsScript({posts: posts});
  $(document.body).append(html);
});

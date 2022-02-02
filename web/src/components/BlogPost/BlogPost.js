import { Link, routes } from '@redwoodjs/router'

const BlogPost = ({ post }) => {
  return (
    <div>
      <article>
        <header>
          <h4>
            <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
          </h4>
        </header>
        <p>{post.body}</p>
        <p>Posted at: {post.createdAt}</p>
      </article>
    </div>
  )
}

export default BlogPost

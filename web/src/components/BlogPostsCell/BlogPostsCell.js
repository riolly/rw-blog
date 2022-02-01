export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }) => {
  return (
    <ul>
      {posts.map((item) => {
        return (
          <article key={item.id}>
            <header>
              <h4>{item.title}</h4>
            </header>
            <p>{item.body}</p>
            <p>Posted at: {item.createdAt}</p>
          </article>
        )
      })}
    </ul>
  )
}

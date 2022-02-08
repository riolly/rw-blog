import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  console.log(currentUser)

  return (
    <>
      <header>
        <div className="flex-between">
          <h1>
            <Link to={routes.home()}>Redwood Yeah!</Link>
          </h1>

          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>
              <button onClick={logOut}>Log out</button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout

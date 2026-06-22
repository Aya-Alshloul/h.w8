import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="d-flex  flex-row align-items-center p-3 
    px-4 mb-3 bg-white border-bottom border-primary">
        <h5 className="my-0 mr-auto font-weight-normal me-auto">Company name</h5>
        <nav className="my-2  mr-3 ">
          <Link className="p-2 text-dark" to="features">Features</Link>
          <Link className="p-2 text-dark" to="enterprise">Enterprise</Link>
          <Link className="p-2 text-dark" to="support">Support</Link>
          <Link className="p-2 text-dark" to="pricing">Pricing</Link>
        </nav>
        <a className="btn btn-outline-primary" href="#">Sign up</a>
      </div>
  )
}

export default Header



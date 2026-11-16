import useTitle from '../hooks/useTitle.js'
import Button from '../components/Button.jsx'

export default function NotFound() {
  useTitle('Page not found')
  return (
    <section className="page-hero not-found">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1 className="display page-title">This page has been <em>filed away</em>.</h1>
        <p className="lead">The link may be old, or the page has moved. Let’s get you back somewhere useful.</p>
        <div className="hero-actions">
          <Button to="/" icon="home">Back to home</Button>
          <Button to="/contact" variant="ghost" icon="east">Contact me</Button>
        </div>
      </div>
    </section>
  )
}

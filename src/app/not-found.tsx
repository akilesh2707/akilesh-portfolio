import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <span className="mono">SYSTEM / 404</span>
      <h1>
        This path
        <br />
        is uncharted.
      </h1>
      <p>The page you’re looking for isn’t here.</p>
      <Link href="/" className="button button-primary">
        Return to portfolio ↗
      </Link>
    </main>
  );
}

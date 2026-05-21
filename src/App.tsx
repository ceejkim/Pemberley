export default function App() {
  return (
    <main className="page-shell">
      <section className="hero" id="home-hero">
        <div className="hero__copy">
          <p className="hero__eyebrow">Woodstock, Vermont</p>
          <img
            className="hero__brand"
            src="/assets/brand/pemberley-lockup-bun-forest.svg"
            alt="Pemberley logo"
          />
          <h1>Celebrating the Life of a Gardener</h1>
          <p className="hero__deck">
            An English-inspired shop and garden in Woodstock, where flowers,
            garden objects, and thoughtful finds invite a quieter, more
            beautiful way of living.
          </p>
          <a className="hero__cta" href="#store-overview">
            Wander the Shop &amp; Garden
          </a>
        </div>

        <figure className="hero__media">
          <img
            src="/assets/photos/home-hero-garden.jpg"
            alt="A sunlit pergola with wicker chairs opening into a lush garden at Pemberley."
          />
        </figure>
      </section>

      <section className="overview" id="store-overview">
        <div className="overview__copy">
          <p className="overview__eyebrow">A Shop &amp; A Place</p>
          <h2>For home, garden, and the beauty of everyday life</h2>
          <p className="overview__body">
            From flowers and garden ornament to pieces for the home,
            everything at Pemberley is chosen with care, lasting quality, and
            a gardener&apos;s eye for what is beautiful to live with every day.
          </p>
          <p className="overview__note" aria-label="Supporting store description">
            This is a place to wander, discover a few beautiful things, and
            spend a little time in surroundings that feel unhurried and at
            ease.
          </p>
        </div>

        <div className="overview__gallery-shell">
          <p className="overview__gallery-label">Quiet details from the garden</p>
          <div className="overview__gallery">
            <figure className="overview__card overview__card--anchor">
              <img
                src="/assets/photos/gallery-statue.jpg"
                alt="A weathered garden statue nestled among greenery at Pemberley."
              />
            </figure>

            <figure className="overview__card overview__card--landscape">
              <img
                src="/assets/photos/gallery-meadow-blooms.jpg"
                alt="Layered summer blooms in the garden at Pemberley."
              />
            </figure>

            <figure className="overview__card overview__card--detail">
              <img
                src="/assets/photos/gallery-peony-pink.jpg"
                alt="Blush peonies in the June garden at Pemberley."
              />
            </figure>
          </div>
        </div>
      </section>

      <footer className="footer" id="visit">
        <div className="footer__copy">
          <p className="footer__eyebrow">Plan Your Visit</p>
          <h2>Visit Pemberley</h2>
          <p className="footer__deck">
            A calm corner in Woodstock for the home and garden.
          </p>
        </div>

        <div className="footer__details" aria-label="Store details">
          <section className="footer__card" aria-labelledby="footer-location">
            <p className="footer__label" id="footer-location">
              Location
            </p>
            <address className="footer__body">
              31 Pleasant Street
              <br />
              <span>Just off Ford</span>
              <br />
              Woodstock, Vermont 05091
            </address>
          </section>

          <section className="footer__card" aria-labelledby="footer-hours">
            <p className="footer__label" id="footer-hours">
              Store Hours
            </p>
            <p className="footer__body">
              Thursday through Saturday
              <br />
              10 am - 5 pm
            </p>
            <p className="footer__body">
              Sunday
              <br />
              11 am - 4 pm
            </p>
            <p className="footer__note">Or by appointment</p>
          </section>

          <section className="footer__card" aria-labelledby="footer-contact">
            <p className="footer__label" id="footer-contact">
              Contact
            </p>
            <p className="footer__body">
              <a href="mailto:info@pemberleyvt.com">info@pemberleyvt.com</a>
            </p>
            <p className="footer__body">
              <a href="tel:+18023320234">(802) 332-0234</a>
            </p>
          </section>
        </div>
      </footer>
    </main>
  );
}

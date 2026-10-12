import Carousel from "@/components/Carousel";
import SiteHeader from "@/components/SiteHeader";
import { projects, reviews } from "@/data/slides";

const whatsappQuote = "https://wa.me/447834898962?text=Hi%20SolidFix%2C%20I%27d%20like%20to%20request%20a%20quote.";
const whatsappProject = "https://wa.me/447834898962?text=Hi%20SolidFix%2C%20I%27d%20like%20to%20discuss%20a%20project.";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Property improvements &amp; refurbishment</p>
            <h1>Quality work.<br /><em>Properly finished.</em></h1>
            <p className="hero-lede">Painting, decorating, carpentry, flooring, repairs and property refurbishment across Cambridgeshire &amp; Suffolk.</p>
            <div className="hero-actions">
              <a className="button button-accent" href="#projects">Explore our work <span>↓</span></a>
              <a className="text-link" href="#contact">Request a quote <span>↗</span></a>
            </div>
            <div className="hero-proof">
              <span className="proof-number">10<span>+</span></span>
              <span className="proof-copy">years in construction<br />&amp; property improvement</span>
              <span className="proof-rule" />
              <span className="proof-copy proof-area">Cambridgeshire<br />&amp; Suffolk</span>
            </div>
          </div>
          <div className="hero-art">
            <img className="hero-image" src="/hero-room.jpg" alt="Finished room with restored timber flooring and freshly painted walls" fetchPriority="high" />
          </div>
          <a className="scroll-cue" href="#projects"><span /> Scroll to explore</a>
        </section>

        <section className="projects section-wrap section-pad" id="projects">
          <div className="section-heading project-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> Selected work</p><h2>Good work speaks<br /><em>for itself.</em></h2></div>
            <p className="section-intro">A selection of real property improvement and refurbishment work, shown in the original project photos.</p>
          </div>
          <Carousel slides={projects} kind="projects" label="Selected projects" />
          <div className="project-note"><span className="note-symbol">↗</span><p>Have a project in mind? <a href={whatsappProject}>Send a few photos on WhatsApp</a> and we’ll take a look.</p></div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-wrap">
            <div className="section-heading services-heading">
              <div><p className="eyebrow"><span className="eyebrow-line" /> What we do</p><h2>From small repairs to<br /><em>fuller refurbishments.</em></h2></div>
              <p className="section-intro">Practical property improvements with care taken at every stage, from the first preparation to the final finish.</p>
            </div>
            <div className="service-list">
              <article className="service-row"><span className="service-no">01</span><h3>Painting &amp; decorating</h3><p>Interior preparation, walls, ceilings, woodwork and specialist coatings.</p><span className="service-arrow">↗</span></article>
              <article className="service-row"><span className="service-no">02</span><h3>Carpentry &amp; joinery</h3><p>Doors, skirting, timber repairs, panelling, boxing and general carpentry.</p><span className="service-arrow">↗</span></article>
              <article className="service-row"><span className="service-no">03</span><h3>Flooring</h3><p>Laminate, vinyl and timber flooring, subfloor repairs and damaged floor replacement.</p><span className="service-arrow">↗</span></article>
              <article className="service-row"><span className="service-no">04</span><h3>Bathrooms &amp; kitchens</h3><p>Installation, repairs, flooring, wall finishes and refurbishment work.</p><span className="service-arrow">↗</span></article>
              <article className="service-row"><span className="service-no">05</span><h3>Property repairs</h3><p>Water damage, timber, walls, ceilings, doors and general property maintenance.</p><span className="service-arrow">↗</span></article>
              <article className="service-row"><span className="service-no">06</span><h3>Refurbishment &amp; renovation</h3><p>Room, flat, office and property improvement from preparation through to finishing.</p><span className="service-arrow">↗</span></article>
            </div>
            <div className="services-foot"><p>Not sure if your project fits? Send over a few photos and we’ll be happy to take a look.</p><a className="text-link" href="#contact">Discuss your project <span>↗</span></a></div>
          </div>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="experience"><span className="experience-plus">+</span><strong>10</strong><span>YEARS OF EXPERIENCE</span><div className="experience-orbit orbit-a" /><div className="experience-orbit orbit-b" /></div>
          <div className="about-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> About SolidFix</p>
            <h2>Practical experience.<br /><em>Professional finish.</em></h2>
            <p>SolidFix provides property improvement, repair and refurbishment services across Cambridgeshire and Suffolk.</p>
            <p>With over 10 years of experience in construction and property improvement, projects range from individual repairs and decorating to larger refurbishment work.</p>
            <p>For larger or multi-trade projects, SolidFix can work alongside trusted tradespeople to help complete the work efficiently.</p>
            <p>The approach is straightforward: proper preparation, clear communication and work completed to a professional standard.</p>
            <p>Serving Newmarket, Ely, Soham, Cambridge, Bury St Edmunds and surrounding areas.</p>
            <a className="text-link" href="#contact">Talk through your project <span>↗</span></a>
          </div>
        </section>

        <section className="reviews section-wrap section-pad" id="reviews">
          <div className="reviews-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> Customer reviews</p><h2>What customers<br /><em>say about our work.</em></h2></div>
            <p>Real customer feedback, shown in the original screenshots from MyBuilder and Facebook.</p>
          </div>
          <Carousel slides={reviews} kind="reviews" label="Customer reviews" />
        </section>

        <section className="contact-cta" id="contact">
          <div className="section-wrap cta-inner">
            <div>
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Have a project in mind?</p>
              <h2>Tell us what<br /><em>needs doing.</em></h2>
              <p>Send a short description and a few photos. We’ll take a look and discuss the next steps with you.</p>
              <div className="cta-specialties">Small repairs <i>•</i> Decorating <i>•</i> Property improvements <i>•</i> Refurbishment</div>
            </div>
            <div className="cta-actions">
              <a className="button button-paper" href={whatsappQuote}>Request a quote <span>↗</span></a>
              <a className="button button-outline" href={whatsappProject}>WhatsApp us <span>↗</span></a>
              <span className="cta-phone">or call <a href="tel:+447834898962">07834 898962</a></span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-main">
          <div><a className="brand footer-brand" href="#top"><span className="brand-mark">S</span><span>SOLID<span className="brand-light">FIX</span><small>PROPERTY IMPROVEMENTS</small></span></a><p className="footer-tagline">Property improvements<br />&amp; refurbishment.</p></div>
          <div className="footer-services"><span>Painting</span><span>Decorating</span><span>Carpentry</span><span>Flooring</span><span>Repairs</span><span>Renovation</span></div>
          <div className="footer-contact"><span>Cambridgeshire &amp; Suffolk</span><a href="tel:+447834898962">07834 898962</a><a href="https://wa.me/447834898962">WhatsApp SolidFix ↗</a></div>
        </div>
        <div className="section-wrap footer-bottom"><span>© 2026 SolidFix. All rights reserved.</span><span>Quality work. Properly finished.</span><a href="#top">Back to top ↑</a></div>
      </footer>
      <a className="whatsapp-float" href={whatsappProject} aria-label="Message SolidFix on WhatsApp"><span>◉</span><b>WhatsApp</b></a>
    </>
  );
}

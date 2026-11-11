export default function HomePage({ onLoadSamples, hasTasks }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">A LITTLE MORE FOCUS, EVERY DAY</p>
          <h1>Stay on top of your studies.</h1>
          <p className="hero-description">
            StudyPlanner helps students organize deadlines, prioritize work, and
            see progress without the last-minute scramble.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href="#/planner">Open your planner</a>
            <a className="btn btn-outline-primary btn-lg" href="#/dashboard">View progress</a>
          </div>
          <p className="privacy-note">
            No account required. Your planner stays in this browser.
          </p>
        </div>
        <div className="hero-card" aria-label="StudyPlanner benefits">
          <div className="hero-card-icon" aria-hidden="true">✓</div>
          <p className="hero-card-label">YOUR WEEK, IN VIEW</p>
          <h2>One clear next step.</h2>
          <p>Capture what's due, choose a priority, and keep moving forward.</p>
          <div className="hero-progress">
            <span><span className="hero-dot" /> Keep tasks organized</span>
            <span className="hero-check" aria-hidden="true">✓</span>
          </div>
          <div className="hero-progress">
            <span><span className="hero-dot" /> Celebrate steady progress</span>
            <span className="hero-check" aria-hidden="true">✓</span>
          </div>
        </div>
      </section>

      <section className="feature-section" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="eyebrow">MADE FOR STUDENT LIFE</p>
          <h2 id="features-title">A simpler way to study</h2>
        </div>
        <div className="row g-4">
          <FeatureCard
            number="01"
            title="Track every task"
            text="Keep assignments, exams, and readings together with dates, subjects, and notes."
          />
          <FeatureCard
            number="02"
            title="Find what matters"
            text="Search by keyword, filter by subject or status, and sort by deadline or priority."
          />
          <FeatureCard
            number="03"
            title="See your progress"
            text="Use your dashboard to review completed work, upcoming deadlines, and subject progress."
          />
        </div>
        {!hasTasks && (
          <div className="sample-callout">
            <p>Want to see how it works before adding your own tasks?</p>
            <button className="btn btn-sm btn-outline-secondary" type="button" onClick={onLoadSamples}>
              Try sample tasks
            </button>
          </div>
        )}
      </section>
    </>
  );
}

function FeatureCard({ number, title, text }) {
  return (
    <div className="col-md-4">
      <article className="feature-card h-100">
        <span className="feature-number">{number}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </article>
    </div>
  );
}

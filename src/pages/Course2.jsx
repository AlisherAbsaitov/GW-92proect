import React from 'react'
// Komiljon
export default function Course2 () {
  return (
    <div>Course2</div>
  )
}

// import "./course.css";

function Course() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="hero container">

        <div className="hero-left">

          <h1>
            User Experience. Principles of Human-Centered Design
          </h1>

          <div className="about-box">
            <h3>About the course</h3>

            <p>
              Learn UX design principles and build modern interfaces
              with practical lessons and projects.
            </p>

            <ul>
              <li>✔ Human-centered design</li>
              <li>✔ UX research methods</li>
              <li>✔ Interface prototyping</li>
              <li>✔ Real practice</li>
            </ul>
          </div>

        </div>

        <div className="info-card">

          <div className="card-row">
            <span>Date</span>
            <h2>22-24</h2>
          </div>

          <div className="line"></div>

          <div className="card-row">
            <span>Price</span>
            <h2>$199</h2>
          </div>

          <div className="line"></div>

          <div className="card-row">
            <span>Duration</span>
            <h2>4 Weeks</h2>
          </div>

          <button>REGISTER</button>

        </div>

      </section>

      {/* TEACHER */}
      <section className="teacher container">

        <div className="teacher-image">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000"
            alt=""
          />
        </div>

        <div className="teacher-content">

          <h2>Cody Fisher</h2>

          <p>
            Senior UX Designer with years of experience creating
            user-centered digital products and interfaces.
          </p>

          <div className="teacher-bottom">
            <span>⭐ 4.9 rating</span>
            <span>👨‍🎓 12k students</span>
          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="process">

        <div className="container">

          <h2>Online learning process</h2>

          <div className="process-grid">

            <div className="process-card">
              <h1>01</h1>
              <p>Research</p>
            </div>

            <div className="process-card">
              <h1>02</h1>
              <p>Wireframe</p>
            </div>

            <div className="process-card">
              <h1>03</h1>
              <p>Prototype</p>
            </div>

            <div className="process-card active">
              <h1>04</h1>
              <p>Testing</p>
            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="benefits container">

        <div className="benefits-left">

          <h2>Who will benefit from the course</h2>

          <ul>
            <li>✔ Beginner Designers</li>
            <li>✔ Frontend Developers</li>
            <li>✔ Students</li>
            <li>✔ UI/UX Learners</li>
          </ul>

        </div>

        <div className="benefits-right">

          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
            alt=""
          />

        </div>

      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">

        <div className="container">

          <h2>What our students say</h2>

          <div className="testimonial-box">

            <p>
              Amazing course. I improved my UX skills and learned
              modern design principles.
            </p>

            <h4>— John Carter</h4>

          </div>

        </div>

      </section>

      {/* REGISTER */}
      <section className="register container">

        <div className="register-image">

          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
            alt=""
          />

        </div>

        <div className="register-form">

          <h2>Register for the course</h2>

          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />

          <button>REGISTER</button>

        </div>

      </section>

    </div>
  );
}

// export default Course;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 'linguomt',
      title: 'LinguoMT - Machine Translation System',
      description: 'Advanced machine translation system for African low-resource languages using state-of-the-art AI and NLP techniques.',
      features: [
        'Real-time text translation',
        'Support for 10+ African languages',
        'Advanced neural networks',
        'Translation quality optimization'
      ],
      technologies: ['Python', 'Transformers', 'NLP', 'Deep Learning'],
      status: 'Active',
      link: '/cammt'
    },
    {
      id: 'linguoner',
      title: 'LinguoNER - Named Entity Recognition',
      description: 'Named Entity Recognition system specifically designed for African languages and cultural contexts.',
      features: [
        'Cultural context awareness',
        'Multi-language entity extraction',
        'Custom training datasets',
        'API integration support'
      ],
      technologies: ['Python', 'spaCy', 'BERT', 'Machine Learning'],
      status: 'In Development',
      link: '#'
    },
    {
      id: 'genomics',
      title: 'Healthcare & Genomics Research',
      description: 'Data science applications in healthcare and genomics for African populations and disease patterns.',
      features: [
        'Genomic data analysis',
        'Disease pattern recognition',
        'Population health insights',
        'Predictive modeling'
      ],
      technologies: ['Bioinformatics', 'R', 'Python', 'Statistical Analysis'],
      status: 'Active',
      link: '#'
    },
    {
      id: 'digital-humanities',
      title: 'Digital Humanities',
      description: 'Preserving and digitizing African cultural heritage through advanced data science methodologies.',
      features: [
        'Cultural artifact digitization',
        'Historical data preservation',
        'Interactive cultural maps',
        'Multimedia archives'
      ],
      technologies: ['Digital Archiving', 'Web Technologies', 'Database'],
      status: 'Active',
      link: '#'
    },
    {
      id: 'mice-analysis',
      title: 'MICE Industry Analysis',
      description: 'Data-driven analysis of Meetings, Incentives, Conferences, and Events industry trends and impacts.',
      features: [
        'Industry trend analysis',
        'Economic impact assessment',
        'Predictive analytics',
        'Market research insights'
      ],
      technologies: ['Data Analytics', 'Business Intelligence', 'Visualization'],
      status: 'In Development',
      link: '#'
    },
    {
      id: 'maritime',
      title: 'Maritime Sustainability',
      description: 'Sustainable development solutions for maritime industries using data science and AI technologies.',
      features: [
        'Environmental impact analysis',
        'Sustainability metrics',
        'Resource optimization',
        'Policy recommendation systems'
      ],
      technologies: ['Environmental Data Science', 'GIS', 'Sustainability Analytics'],
      status: 'Planning',
      link: '#'
    }
  ];

  const researchLines = [
    {
      name: 'DS4Lang',
      description: 'Language Technology and NLP for African Languages',
      focus: 'Machine Translation, NER, Language Preservation'
    },
    {
      name: 'DS4Health',
      description: 'Healthcare and Genomics Research',
      focus: 'Medical Data Science, Genomic Analysis, Public Health'
    },
    {
      name: 'DS4Culture',
      description: 'Digital Humanities and Cultural Preservation',
      focus: 'Cultural Heritage, Digital Archives, Historical Analysis'
    },
    {
      name: 'DS4Sustainability',
      description: 'Sustainable Development and Environmental Science',
      focus: 'Maritime Sustainability, Environmental Analytics'
    }
  ];

  const supportedLanguages = [
    'Ghomala', 'Bafia', 'Bulu', 'Fulfulde DC', 'Fulfulde Adamoua', 
    'Kapsiki', 'Tupurri', 'Igbo', 'Swahili', 'Hausa'
  ];

  const team = [
    {
      name: 'Dr. Philippe Tamla',
      role: 'Founder & Director',
      expertise: 'Visiting Professor at ICT University, Postdoctoral Researcher at FernUniversität in Hagen',
      image: '/img/team/placeholder.jpg'
    }
  ];

  const partnerships = [
    'ICT University (Cameroon)',
    'FernUniversität in Hagen (Germany)',
    'International Research Collaborators',
    'Student-led Research Networks'
  ];

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <nav className="landing-nav">
          <div className="nav-brand">
            <img src="/img/ds4h-logo.png" alt="DS4H" className="logo" />
            <span className="brand-text">DS4H</span>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#team">Leadership</a></li>
            <li><a href="#participation">Join Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><Link to="/cammt" className="nav-cta">Try LinguoMT</Link></li>
          </ul>
          <div className="mobile-menu">
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Data Science for Humanities</h1>
            <p className="hero-subtitle">
              Empowering students to engage in impactful research and development at the 
              intersection of Data Science, Artificial Intelligence, and Human-centered domains.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">6</span>
                <span className="stat-label">Research Domains</span>
              </div>
              <div className="stat">
                <span className="stat-number">4</span>
                <span className="stat-label">Research Lines</span>
              </div>
              <div className="stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Partner Universities</span>
              </div>
            </div>
            <div className="hero-actions">
              <Link to="/cammt" className="btn btn-primary">
                <i className="fas fa-language"></i>
                Explore LinguoMT
              </Link>
              <a href="#research" className="btn btn-secondary">
                View Research
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="language-cloud">
              {supportedLanguages.map((lang, index) => (
                <span 
                  key={index} 
                  className="language-tag"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    fontSize: `${Math.random() * 0.5 + 1}em`
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About DS4H</h2>
            <p>
              Data Science for Humanities (DS4H) is an emerging initiative that explores and builds 
              a future research-driven, non-profit organization empowering students in impactful research.
            </p>
          </div>
          <div className="mission-vision">
            <div className="mission">
              <h3>Our Mission</h3>
              <ul>
                <li>Support students at undergraduate, graduate, and doctoral levels in conducting applied research</li>
                <li>Advance the use of Data Science and AI in socially meaningful domains</li>
                <li>Foster collaboration across disciplines and continents (Africa and Europe)</li>
                <li>Promote open research, language technologies, and inclusive innovation</li>
              </ul>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                DS4H envisions a world where students and researchers from diverse backgrounds can 
                leverage AI and data-driven technologies to solve real-world problems, contribute to 
                language preservation and digital culture, and build bridges between humanities and 
                technology for the benefit of society.
              </p>
            </div>
          </div>
          <div className="about-grid">
            <div className="about-item">
              <div className="about-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Student Empowerment</h3>
              <p>
                Supporting students at all levels to engage in hands-on research and project 
                development with mentorship from experienced researchers.
              </p>
            </div>
            <div className="about-item">
              <div className="about-icon">
                <i className="fas fa-globe-africa"></i>
              </div>
              <h3>Cross-Continental Collaboration</h3>
              <p>
                Building bridges between Africa and Europe through collaborative research 
                networks and academic partnerships.
              </p>
            </div>
            <div className="about-item">
              <div className="about-icon">
                <i className="fas fa-open-source"></i>
              </div>
              <h3>Open Research</h3>
              <p>
                Promoting transparency, knowledge sharing, and open-source development 
                for the benefit of the global research community.
              </p>
            </div>
            <div className="about-item">
              <div className="about-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Human-Centered AI</h3>
              <p>
                Focusing on AI and data science applications that address real human needs 
                and contribute to social good.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Lines Section */}
      <section id="research" className="research-lines">
        <div className="container">
          <div className="section-header">
            <h2>Research Lines</h2>
            <p>
              Our thematic research areas organized into specialized focus groups 
              addressing key challenges in data science and humanities.
            </p>
          </div>
          <div className="research-grid">
            {researchLines.map((line, index) => (
              <div key={index} className="research-item">
                <h3>{line.name}</h3>
                <p className="research-description">{line.description}</p>
                <p className="research-focus"><strong>Focus:</strong> {line.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>Current Projects</h2>
            <p>
              Student-led research projects under academic supervision, spanning multiple 
              domains from language technology to sustainable development.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`project-card ${activeProject === project.id ? 'active' : ''}`}
                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              >
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  {project.link !== '#' ? (
                    <Link to={project.link} className="btn btn-primary">
                      Explore Project
                    </Link>
                  ) : (
                    <button className="btn btn-secondary" disabled>
                      In Development
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="languages">
        <div className="container">
          <div className="section-header">
            <h2>Supported Languages</h2>
            <p>
              Our language technology research focuses on African low-resource languages, 
              contributing to their preservation and digital presence.
            </p>
          </div>
          <div className="languages-grid">
            {supportedLanguages.map((language, index) => (
              <div key={index} className="language-item">
                <span className="language-name">{language}</span>
                <div className="language-info">
                  <span className="language-status">Research Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-header">
            <h2>Leadership</h2>
            <p>
              DS4H operates under collaborative governance with academic supervision 
              and student empowerment at its core.
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-photo">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-expertise">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="governance-info">
            <h3>Governance Principles</h3>
            <div className="principles-grid">
              <div className="principle">
                <i className="fas fa-eye"></i>
                <span>Transparency</span>
              </div>
              <div className="principle">
                <i className="fas fa-hands-helping"></i>
                <span>Mentorship</span>
              </div>
              <div className="principle">
                <i className="fas fa-share-alt"></i>
                <span>Shared Learning</span>
              </div>
              <div className="principle">
                <i className="fas fa-file-alt"></i>
                <span>Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Section */}
      <section id="participation" className="participation">
        <div className="container">
          <div className="section-header">
            <h2>Join DS4H</h2>
            <p>
              DS4H welcomes students, researchers, and collaborators from diverse backgrounds 
              to contribute to our mission.
            </p>
          </div>
          <div className="participation-grid">
            <div className="participation-item">
              <h3>ICTU Students</h3>
              <p>Bachelor, Master, and PhD students can join research projects and contribute to ongoing initiatives.</p>
              <ul>
                <li>Hands-on research experience</li>
                <li>Academic supervision</li>
                <li>Thesis support</li>
                <li>Publication opportunities</li>
              </ul>
            </div>
            <div className="participation-item">
              <h3>Visiting Researchers</h3>
              <p>International researchers and project collaborators are welcome to contribute expertise.</p>
              <ul>
                <li>Cross-institutional collaboration</li>
                <li>Knowledge exchange</li>
                <li>Research partnerships</li>
                <li>Mentoring opportunities</li>
              </ul>
            </div>
            <div className="participation-item">
              <h3>Alumni & Volunteers</h3>
              <p>Former students and international volunteers can continue contributing to research initiatives.</p>
              <ul>
                <li>Continued engagement</li>
                <li>Mentoring current students</li>
                <li>Project collaboration</li>
                <li>Network expansion</li>
              </ul>
            </div>
          </div>
          <div className="partnerships">
            <h3>Partner Institutions</h3>
            <div className="partners-list">
              {partnerships.map((partner, index) => (
                <div key={index} className="partner-item">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get Involved</h2>
            <p>Interested in joining our research community or learning more about DS4H?</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>ICTU Campus</h4>
                  <p>ICT University<br />Cameroon</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>ds4h@ictuniversity.edu.cm</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <h4>Academic Supervisor</h4>
                  <p>Dr. Philippe Tamla</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Interest Area</option>
                    <option value="student">Student Participation</option>
                    <option value="researcher">Research Collaboration</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="partnership">Institutional Partnership</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>DS4H Initiative</h4>
              <p>
                Empowering students through research at the intersection of Data Science, 
                AI, and Human-centered domains.
              </p>
              <div className="social-links">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-researchgate"></i></a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Research Lines</h4>
              <ul>
                <li><a href="#research">DS4Lang</a></li>
                <li><a href="#research">DS4Health</a></li>
                <li><a href="#research">DS4Culture</a></li>
                <li><a href="#research">DS4Sustainability</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Projects</h4>
              <ul>
                <li><Link to="/cammt">LinguoMT</Link></li>
                <li><a href="#">LinguoNER</a></li>
                <li><a href="#">Healthcare & Genomics</a></li>
                <li><a href="#">Digital Humanities</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li>ds4h@ictuniversity.edu.cm</li>
                <li>ICT University</li>
                <li>Cameroon</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 DS4H Initiative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
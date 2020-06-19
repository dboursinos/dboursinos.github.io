import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { OutboundLink } from 'gatsby-plugin-gtag'
// TODO: Implement information Popoovers
// TODO: Implement Drift Bot w/ Chat

import Layout from '../components/Layout';
// import GoogleAnalytics from '../components/GoogleAnalytics';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';

const IndexPage = () => (
  <Layout>

  <Helmet>
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154121766-1"></script>
  <script type="application/javascript">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('config', 'UA-154121766-1');
      gtag('event', 'pageview', 'Home');
      `}</script>


      {/* <script type="application/javascript">{`
    "use strict";
    !function() {
      var t = window.driftt = window.drift = window.driftt || [];
      if (!t.init) {
        if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
        t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
        t.factory = function(e) {
          return function() {
            var n = Array.prototype.slice.call(arguments);
            return n.unshift(e), t.push(n), t;
          };
        }, t.methods.forEach(function(e) {
          t[e] = t.factory(e);
        }), t.load = function(t) {
          var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
          o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
          var i = document.getElementsByTagName("script")[0];
          i.parentNode.insertBefore(o, i);
        };
      }
    }();
    drift.SNIPPET_VERSION = '0.3.1';
    drift.load('azinkdvzwirg');
    `}</script> */}
  </Helmet>

    <Sidebar />

    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <div className="row">
            <div className="col-md-10 col-sm-12">
              <h1 className="mb-0">
                {config.firstName}

                <span className="text-primary">{config.lastName}</span> 
              </h1>
            </div>
            <div className="d-print-none col-md-2 text-right col-sm-12 row pt-4">

              {/* <div className="col-md-auto col-sm-12 pb-2">
              
                <OutboundLink href="https://calendly.com/screenscholar/1hr-hiring-screening-call" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary btn-block"><i className="fas fa-calendar-alt"></i> Schedule a Meeting</button></OutboundLink>
              </div> */}
              <div className="col-md-auto col-sm-12 pb-4">
                <a href="https://github.com/chuckwilliams37/screenscholar-resume/raw/master/src/assets/images/Chuck_C_Williams_Jr_Resume_20200104.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary btn-block"> <i className="fab fa-adobe"></i> PDF</button></a>
              </div>
            </div>
          </div>
          <div className="subheading mb-5">
            {config.address} · 
            {/* {config.phone} · */}
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          
          <p className="lead mb-3">
            Research Assistant PhD student at Vanderbilt University
          </p>
          
          <p className="lead mb-3">
            I believe that evolved, empathic problem solving involves clear assessment of reality, honest & transparent communications, and the capability to push through to results. <em> I make this work my art.</em> 
          </p>
          
          <p className="lead mb-3">
            I intend to bring value crafting elegant interfaces & experiences, identifying & pursuing growth opportunities, and building software that aligns with my dream of voluntary interactions for all individuals, and a society free from coercion. 
          </p>
          
          <small>
            

          {/* <p>
            Listed as inventor of 2 patents (Shutterfly's Photobook Application, and Level3's Dynamic Prompt System). History with visual design and User Experience (UX) oriented strategies and implementations. Current favorite technologies now include React/Redux/Firebase, AngularJS, NodeJS, MongoDB and the related ecosystem of build and dependency management tools (Webpack, Jest, Gulp, Grunt, Bower, etc.).
          </p>
          <p>
            Contributed to projects affecting the Office of the Director of National Intelligence (ODNI which oversees the FBI & CIA). Facilitated projects with National Geographic, Discovery, and The Learning Channels, Qwest and Level 3 Communications. Authored code for FedEx's Print Online Application allowing customers to upload and retrieve documents from FedEx Office Locations.
          </p> */}
          <p>
            Strengths include business communications skills, measurable productivity, strategic planning, project direction, team management, and elegant problem solving in the realms of application code, systems architecture, and data management. Also heavy advocate for purposeful living, empathy, meditation, and radical transparency.
            </p>
            <p>
          {/* Twenty-consecutive-year history with ECMAScript (JavaScript & ActionScript), HTML, & CSS. Also competent with React, AngularJS, NodeJS, PHP, ColdFusion, MySQL, MSSQL, OracleSQL, Grunt, Adobe Fireworks, Photoshop, Illustrator, InDesign, 3D Studio MAX, Ableton Live, and Audio Mixing Board technology. Familiar with design patterns, client relations & presentations, and digital innovation and transformation strategies.  */}
          </p>
          </small>
          {/* <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div> */}
        </div>
      </section>



      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Research Assistant, Assured Autonomy</h3>
              <div className="subheading mb-3">Vanderbilt University: Nashville, TN </div>
              <p>
                <ul>
                  <li>Developing robustness and assurance methods for Machine Learning Components with focus on classification and regression tasks.</li>
                  <li>Working on a project with Defense Advanced Research Project Agency (DARPA) and Northrop Grumman to estimate robustness levels of autonomous underwater vehicles.</li>
                  <li>Worked on a project by Boeing on safety verification of autonomous controllers on airplanes for navigation through an airport.</li>
                  <li>Worked on robust visual perception from cameras for autonomous vehicle applications.</li>
                  <li>Developed Reinforcement Learning agents for autonomous vehicles using Deep Neural Networks for vehicle control and obstacle avoidance.</li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Teaching Assistant, Deep Learning</h3>
              <div className="subheading mb-3">Vanderbilt University: Nashville, TN</div>
              <p>
              Experience teaching and communicating with students through weekly help sessions and replacing the professor when needed.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2016 – 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Research Assistant, Biomedical Engineering</h3>
              <div className="subheading mb-3">The City College of New York: New York City, NY</div>
              <p>
              <ul>
                  <li>Designed and built a cost efficient electromyograph computer interface that supports 44 channels and connects to a computer over USB to be used on a robotic arm for amputees</li>
                  <li>Applied learning algorithms to make the prosthetic adapt to each user’s muscle electrical signals.</li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2015</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Undergrad Research</h3>
              <div className="subheading mb-3">University of Patras: Patras, Greece</div>
              <p>
                <ul>
                  <li>Designed and built a portable, non-contact ECG device intended as a low-cost, continuous monitoring solution for persons at risk of cardiac problems. (Diploma Thesis)</li>
                  <li>Motion analysis of robotic swarm formations cooperating for a common goal.</li>
                  <li>Literature research on pattern recognition methods for detection of forgery in paintings.</li>
                </ul>
              </p>
            </div>
            {/* <div className="resume-date text-md-right">
              <span className="text-primary">January 2017 - June 2018</span>
            </div> */}
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Vanderbilt University</h3>
              <div className="subheading mb-3">PhD & MS, Electrical Engineering, GPA 3.88/4</div>
              <div className="subheading mb-3">Related Coursework:
                <p>
                  Cyber-Physical Systems; Detection & Estimation Theory; Network Security; Model Integrated Computing; Statistical Pattern Recognition; Design & Analysis of Algorithms; Advanced Real-Time Systems
                </p>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2016 - 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Patras</h3>
              <div className="subheading mb-3">MS & BS, Electrical and Computer Engineering</div>
              <div className="subheading mb-3">Related Coursework:
                <p>
                Algorithms & Data Structures; Pattern Recognition; Natural Language Technology; Intelligent Control; Microcomputers; Automatic Control Systems; Digital Control Systems; Electrical Machines I & II; Design of Dynamical Systems; Adaptive Control; Robotic Systems; Adaptive Control; Nonlinear Control
                </p>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2010 - 2016</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Platforms &amp; Suites
          </div>
          <p>
          <ul>
            <li>Linux</li>
            <li>Windows</li>
            <li>Docker</li>
            <li>RTOS</li>
            <li>Embedded Systems</li>
            <li>Simulation Environmets</li>
          </ul>
          </p>
          {/* <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-ubuntu"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-windows"></i>
            </li>
          </ul> */}
          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <p>
          <ul>
            <li>Python</li>
            <li>Matlab</li>
            <li>C++</li>
            <li>C</li>
            <li>Latex</li>
          </ul>
          </p>
          {/* <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-php"></i>
            </li>
            {/* <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul> */}

          <div className="subheading mb-3">Workflow</div>
          <p>
          <ul>
            <li>Git</li>
            <li>Tensorflow</li>
            <li>Keras</li>
            <li>sklearn</li>
          </ul>
          </p>

          {/* <div className="subheading mb-3">Soft</div>
          <ul className="fa-ul mb-3">
            <li>
              <i className="fa-li fa fa-check"></i>
              Team Management, Goal Setting, Review, &amp; Critique
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Facilitation of Group Decision-making
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Product Ownership, &amp; Management
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Task Definition, Tracking, Follow-through, and improvement
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Public Speaking &amp; Communications
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Sales Engineering, Requirements Gathering
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Problem Diagnosis &amp; Creative Solution Option Generation
            </li>
          </ul> */}
        </div> 
      </section>

      {/* <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content"></div>
            <p>
            <ul>
                <li>
                  Best Paper Award at the Workshop for Assured Autonomous Systems (WAAS), which was part of the IEEE Security & Privacy Conference 
                </li>
                <li>
                  4th place in the 22nd National Olympiad in Computer Science
                </li>
              </ul>
              </p>
            </div>
        </div>
      </section> */}

      {/* <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>*/}

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Best Paper Award at the Workshop for Assured Autonomous Systems (WAAS), which was part of the IEEE Security & Privacy Conference (2020)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>4<sup>th</sup>
              Place in the 22nd National Olympiad in Computer Science
            </li>
          </ul>
        </div>
      </section> 

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="publications"
      >
        <div className="w-100">
          <h2 className="mb-5">Publications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-graduation-cap"></i>
              Assurance Monitoring of Cyber-Physical Systems with Machine Learning Components - <a href="https://arxiv.org/abs/2001.05014" target="_blank" rel="noopener noreferrer">arXiv</a><br />
              Tools and Methods of Competitive Engineering Symposium (TMCE 2020) - Dublin, Ireland
            </li>
            <li>
              <i className="fa-li fa fa-graduation-cap"></i>
              Trusted Confidence Bounds for Learning Enabled Cyber-Physical Systems - <a href="https://arxiv.org/abs/2003.05107" target="_blank" rel="noopener noreferrer">arXiv</a><br />
              Workshop on Assured Autonomous Systems (WAAS 2020) - Best Paper Award <br />
              41<sup>st</sup> IEEE Symposium on Security and Privacy - San Francisco, CA
            </li>
          </ul>
        </div>
      </section> 
    </div>

    <div className="print-footer">
      <h5>{config.firstName}<span className="text-primary">{config.lastName}</span> · {config.phone} · <a href="https://calendly.com/screenscholar/meeting" target="_blank" rel="noopener noreferrer">Schedule a Meeting</a></h5>
    </div>
  </Layout>
);

export default IndexPage;

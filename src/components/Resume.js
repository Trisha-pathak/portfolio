export default function Resume() {
    return (
        <div className="resume-page" id="resume-pdf">
            {/* NAME */}
            <h1 className="name">Trisha Pathak</h1>

            <div className="resume-grid">
                {/* LEFT COLUMN */}
                <div className="left">
                    <section>
                        <h2>PROFILE SUMMARY</h2>
                        <p>
                            Front-End Developer with 5+ years of experience designing and developing responsive,
                            user-centric web applications. Proficient in HTML, CSS, JavaScript, React.js,
                            and modern UI frameworks. Experienced in building scalable interfaces using clean,
                            maintainable code and performance optimization techniques.
                            Proven ability to collaborate with cross-functional teams, adapt to changing requirements,
                            and deliver high-quality solutions within deadlines.
                        </p>
                    </section>

                    <section>
                        <h2>EXPERIENCE</h2>

                        <p className="bold">Front-end Developer</p>
                        <p className="italic">July 2020 – Present</p>
                        <ul className="bullet-list">
                            <li>
                                Developed responsive, user-centric web interfaces using React.js,
                                JavaScript, HTML, CSS, TailwindCSS, and Bootstrap.
                            </li>
                            <li>
                                Built reusable and maintainable UI components, improving development
                                efficiency and consistency across projects.
                            </li>
                            <li>
                                Implemented smooth animations and interactions using Framer Motion to
                                enhance user experience.
                            </li>
                            <li>
                                Integrated REST APIs and handled dynamic data rendering, state
                                management, and error handling.
                            </li>
                            <li>
                                Ensured cross-browser compatibility, accessibility best practices, and
                                mobile-first responsiveness.
                            </li>
                            <li>
                                Collaborated closely with designers and backend developers to translate
                                business requirements into high-quality UI solutions.
                            </li>
                        </ul>
                        <p className="bold">Xavient Digital</p>
                        <p className="italic">
                            React Developer | Internship | Jan 2020 – Sep 2020
                        </p>
                        <p className="italic">
                            Noida, Uttar Pradesh, India
                        </p>
                        <ul className="bullet-list">
                            <li>
                                Worked on developing user interface components using React.js, HTML, and CSS.
                            </li>
                            <li>
                                Assisted in building responsive web pages and implementing UI enhancements.
                            </li>
                            <li>
                                Collaborated with senior developers to understand application architecture and best practices.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>EDUCATION</h2>

                        <p className="bold">
                            MSc – Central University of South Bihar | Computer Science
                        </p>
                        <p className="italic">
                            Bihar, India | August 2018 – September 2020
                        </p>
                        <p>
                            Earned top honors in MCA, demonstrating academic excellence and a strong dedication to learning.
                        </p>

                        <br />

                        <p className="bold">
                            BCA – Magadh University | Computer Science
                        </p>
                        <p className="italic">
                            Bodh Gaya, India | June 2015 – Aug 2018
                        </p>
                        <p>
                            Graduated with top honors in BCA, demonstrating academic excellence and a strong learning mindset.
                        </p>
                    </section>
                    <section className="no-break">
                        <h2>PROJECTS</h2>

                        <p className="bold">AajuBaaju eClassifieds</p>
                        <ul className="bullet-list">
                            <li>Hyper-local, web-based classifieds and information platform focused on neighbourhood-level content.</li>
                            <li>Built on a crowdsourcing model to enable community-driven listings and updates.</li>
                            <li>Allows users to discover nearby businesses, events, jobs, reviews, photos, and videos.</li>
                            <li>Provides a unified search experience for all local content.</li>
                            <li>Supports advertisement and revenue-sharing opportunities for users and small businesses.</li>
                            <li>Includes a local marketplace module enabling users to browse nearby stores, view product listings, and access neighbourhood mart information.</li>
                        </ul>
                    </section>
                </div>

                {/* RIGHT COLUMN */}
                <div className="right">
                    <section>
                        <h2>CONTACT</h2>
                        <p>Patna, India</p>
                        <p>+91 7903120892</p>
                        <p className="link">trishapathak2028@gmail.com</p>
                        <p className="link">https://www.linkedin.com/in/trisha-pathak-b388641b2</p>
                    </section>

                    <section>
                        <h2>SKILLS</h2>

                        <p>
                            <strong>Languages:</strong> JavaScript (ES6+), TypeScript
                        </p>

                        <p>
                            <strong>Frontend:</strong> ReactJS, HTML5, CSS3, TailwindCSS, Bootstrap
                        </p>

                        <p>
                            <strong>State & UI:</strong> Redux, Context API, Framer Motion
                        </p>

                        <p>
                            <strong>APIs & Data:</strong> REST APIs, Axios, Fetch
                        </p>

                        <p>
                            <strong>Tools:</strong> Git, Bitbucket, npm, VS Code
                        </p>

                        <p>
                            <strong>Practices:</strong> Responsive Design, Mobile-First UI, Cross-Browser Compatibility, Accessibility
                        </p>
                    </section>
                    <section>
                        <h2>LANGUAGE</h2>
                        <p>Hindi, English</p>
                    </section>
                </div>
            </div>
            <section className="declaration-full">
                <p>
                    I hereby declare that all the details provided above are true to the best of
                    my knowledge.
                </p>

                <div className="declaration-footer">
                    <span>Date : 01-Feb-2026</span>

                    <div className="signature">
                        <span>Trisha Pathak</span>
                        <div className="line" />
                    </div>
                </div>
            </section>
        </div>
    );
}
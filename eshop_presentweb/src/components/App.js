// js/aboutus.js
const groupInfo = [
    { name: 'Bui Hanh Trang', ID: '20210851', interest: 'Interaction Design', specialties: 'Usability Testing, User Research' },
    { name: 'Nguyen Thi Thanh Hang', ID: '20213570', interest: 'Web Development', specialties: 'Responsive Design, HTML/CSS' },
    { name: 'Nguyen Thu Huong', ID: '20210423', interest: 'Product Design', specialties: 'Illustration, Prototyping' },
];

const draftIdea = [
    { idea: 'Classify products by categories' },
    { idea: 'Responsive designs for laptop, tablet, and phone users' },
    { idea: 'Allow customers to review and rate the products' },
    { idea: 'Chatbox for customers to ask the administrators lively' }
];

const interactionImprovements = [
    { type: 'Instructive', improvements: 'Provide clear guidance to users through tools like tutorial or onboarding, tooltips, and FAQs.' },
    { type: 'Exploring', improvements: 'Improve search tools, product filtering, and smart product recommendations.' },
    { type: 'Conversing', improvements: 'Add smart chatbots, live chat support, and user reviews.' },
    { type: 'Manipulating', improvements: 'Enable product customization, and dynamic cart management.' }
];

const interfaceImprovements = [
    { type: 'Web Interface', improvements: 'Optimize responsive design, product sliders, and product comparisons.' },
    { type: 'Form Fill-In Interface', improvements: 'Simplify forms with auto-complete and error checking.' },
    { type: 'Query Interface', improvements: 'Enhance search functionality using natural language processing and filters.' },
];

function App() {
    return (
        <div className="container">
            {/* Top Navigation Menu */}
            <div id="navbar">
                <a href="#group" class="nav-button">About Us</a>
                <a href="#ideas" class="nav-button">Project Ideas</a>
                <a href="#refined" class="nav-button">Refined Ideas</a>
                <a href="#needfindings" class="nav-button">Need Findings</a>
                <a href="#conceptvids" class="nav-button">Concept Videos</a>
                <a href="#prototypes" class="nav-button">Prototypes</a>
            </div>

            {/* Main Content */}
            <div className="item">
                <div className="aboutus">
                    <header>
                        <h1>Welcome to HCI Project: Group 8 (H2T)</h1>
                        <p>Course: AC4050E – ET-E16 - 20241</p>
                        <p>Instructors: Prof. Thanh-Hai Tran, Dr. Viet-Tung Nguyen</p>
                    </header>

                    {/* Group Presentation Section */}
                    <div className="section" id="group">
                        <h2>Group Presentation</h2>
                        <h3>Members</h3>
                        <table id="project-info">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Student ID</th>
                                    <th>Interest</th>
                                    <th>Specialties in Design</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groupInfo.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.ID}</td>
                                        <td>{item.interest}</td>
                                        <td>{item.specialties}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <h3>History</h3>
                        <p>
                            We have collaborated on many projects in the past and have found that our synergy in work has helped us achieve the best results. Among these projects is a web project that is already quite complete, and we want to continue developing it.
                        </p>

                        <h3>Slogan</h3>
                        <blockquote style={{ fontSize: '1.5rem', fontStyle: 'italic', color: 'black' }}>
                            "Highly Higher Tech"
                        </blockquote>
                    </div>

                    {/* Project Ideas Section */}
                    <div className="section" id="ideas">
                        <h2>Project Ideas</h2>
                        <table id="draft-table">
                            <thead>
                                <tr>
                                    <th>Idea</th>
                                </tr>
                            </thead>
                            <tbody>
                                {draftIdea.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.idea}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Refined Ideas Section */}
                    <div className="section" id="refined">
                        <h2>Refined Ideas</h2>

                        <h3>Interaction Improvements</h3>
                        <table id="interaction-table">
                            <thead>
                                <tr>
                                    <th>Interaction Type</th>
                                    <th>Improvements</th>
                                </tr>
                            </thead>
                            <tbody>
                                {interactionImprovements.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.type}</td>
                                        <td>{item.improvements}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <h3>Interface Improvements</h3>
                        <table id="interface-table">
                            <thead>
                                <tr>
                                    <th>Interface Type</th>
                                    <th>Improvements</th>
                                </tr>
                            </thead>
                            <tbody>
                                {interfaceImprovements.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.type}</td>
                                        <td>{item.improvements}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="section" id="needfindings">
                        <h2>Need Findings</h2>
                    </div>
                    <div className="section" id="conceptvids">
                        <h2>Concept Videos</h2>
                    </div>
                    <div className="section" id="prototypes">
                        <h2>Prototypes</h2>
                    </div>
                    <footer>
                        <p>&copy; 2024 HCI Project. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}

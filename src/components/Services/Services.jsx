import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <p>
          I offer a wide range of development and design services. Here are some
          of the areas I specialize in:
        </p>
      </div>
      <div className="services-content">
        {/* Service 1: ReactJS Development */}
        <div className="service-card">
          <h3>ReactJS Development</h3>
          <p>
            I specialize in building dynamic, interactive web applications using
            ReactJS. From small single-page applications to larger, complex
            systems, I create scalable and efficient solutions using React.
          </p>
        </div>
        {/* Service 2: Frontend Development */}
        <div className="service-card">
          <h3>Frontend Development</h3>
          <p>
            I specialize in building responsive and dynamic websites using HTML,
            CSS, JavaScript, and ReactJS. From single-page applications to fully
            responsive websites, I ensure quality and speed.
          </p>
        </div>
        {/* Service 3: Full Stack Development */}
        <div className="service-card">
          <h3>Full Stack Development</h3>
          <p>
            I build both frontend and backend systems using the MERN stack
            (MongoDB, Express.js, React.js, Node.js). I integrate robust APIs,
            secure authentication modules, and efficient databases to deliver
            complete web solutions.
          </p>
        </div>
        {/* Service 4: UI/UX Design */}
        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>
            I have experience in designing visually appealing and user-friendly
            interfaces. I focus on improving user experience while maintaining
            clean and modern designs, and can convert Figma mocks to pixel-perfect interfaces.
          </p>
        </div>
        {/* Service 5: SaaS Solutions */}
        <div className="service-card">
          <h3>SaaS Product Development</h3>
          <p>
            I design and develop SaaS applications with features like
            subscriptions, dashboards, and integrations, using scalable cloud
            platforms like AWS (EC2, RDS, Amplify).
          </p>
        </div>
        {/* Service 6: State Management */}
        <div className="service-card">
          <h3>State Management</h3>
          <p>
            Using tools like Redux and React Context API, I manage the state of
            complex applications, ensuring seamless interaction and data flow.
          </p>
        </div>
        {/* Service 7: API Integration */}
        <div className="service-card">
          <h3>API Integration</h3>
          <p>
            I can integrate third-party APIs (RESTful & GraphQL) into applications to
            fetch and display dynamic data, creating rich user experiences.
          </p>
        </div>
        {/* Service 8: Performance Optimization */}
        <div className="service-card">
          <h3>Performance Optimization</h3>
          <p>
            I focus on optimizing site performance, reducing load
            times, and ensuring efficient resource usage for better user
            experience.
          </p>
        </div>
        {/* Service 9: Authentication & Security */}
        <div className="service-card">
          <h3>Authentication & Security</h3>
          <p>
            I implement secure authentication and authorization using platforms
            like JWT & Auth0 ensuring safe data access and privacy compliance.
          </p>
        </div>
        {/* Service 10: Version Control */}
        <div className="service-card">
          <h3>Version Control (Git)</h3>
          <p>
            Using Git, I manage version control and collaboration, ensuring
            smooth teamwork and easy code management.
          </p>
        </div>
        {/* Service 11: Deployment */}
        <div className="service-card">
          <h3>Cloud & Web Deployment</h3>
          <p>
            I have experience deploying projects on platforms like Vercel, AWS, and
            Netlify, ensuring smooth, reliable, and production-grade deployments.
          </p>
        </div>
        {/* Service 12: Maintenance & Support */}
        <div className="service-card">
          <h3>Maintenance & Support</h3>
          <p>
            I provide ongoing support, bug fixing, feature upgrades, and
            maintenance for deployed web applications, ensuring long-term reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

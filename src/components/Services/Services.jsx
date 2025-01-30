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

        {/* Service 3: UI/UX Design */}
        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>
            I have experience in designing visually appealing and user-friendly
            interfaces. I focus on improving user experience while maintaining
            clean and modern designs.
          </p>
        </div>

        {/* Service 4: State Management */}
        <div className="service-card">
          <h3>State Management</h3>
          <p>
            Using tools like Redux and React Context API, I manage the state of
            complex applications, ensuring seamless interaction and data flow.
          </p>
        </div>

        {/* Service 5: API Integration */}
        <div className="service-card">
          <h3>API Integration</h3>
          <p>
            I can integrate third-party APIs (RESTful APIs) into applications to
            fetch and display dynamic data, creating rich user experiences.
          </p>
        </div>

        {/* Service 6: Performance Optimization */}
        <div className="service-card">
          <h3>Performance Optimization</h3>
          <p>
            I focus on optimizing the performance of websites, reducing load
            times, and ensuring efficient resource usage for better user
            experience.
          </p>
        </div>

        {/* Service 7: Version Control */}
        <div className="service-card">
          <h3>Version Control (Git)</h3>
          <p>
            Using Git, I manage version control and collaboration, ensuring
            smooth teamwork and easy code management.
          </p>
        </div>

        {/* Service 8: Deployment */}
        <div className="service-card">
          <h3>Deployment</h3>
          <p>
            I have experience in deploying projects on platforms like Vercel and
            Netlify, ensuring smooth, fast, and reliable deployments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

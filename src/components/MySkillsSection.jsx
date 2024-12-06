export default function MySkillsSection() {
  return (
    <section className="skills-section">
      <h1>
        My <span>Skills</span>
      </h1>
      <p>
        I'm a front-end web developer and I work remotely from Bangladesh <br />{" "}
        for clients in world-wide.
      </p>
      <div className="skills-container">
        <div class="circular-progress">
          <div class="inner-content">
            <img
              src={require("../assets/img/tailwind.png")}
              alt="Tailwind CSS"
              class="logo"
            />
            <p>Tailwind CSS</p>
          </div>
        </div>
        <div class="circular-progress two">
          <div class="inner-content">
            <img
              src={require("../assets/img/javascript.png")}
              alt="JavaScript Logo"
              class="logo"
            />
            <p>Tailwind CSS</p>
          </div>
        </div>
        <div class="circular-progress three">
          <div class="inner-content">
            <img
              src={require("../assets/img/react.png")}
              alt="reactJS"
              class="logo"
            />
            <p>reactJS</p>
          </div>
        </div>
        <div class="circular-progress four">
          <div class="inner-content">
            <img
              src={require("../assets/img/nextjs.png")}
              alt="NextJS"
              class="logo"
            />
            <p>NextJS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

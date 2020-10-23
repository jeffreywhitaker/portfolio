<template>
  <main class="container">
    <section class="intro-wrapper">
      <img
        src="/img/jeff-main.jpg"
        alt="A picture of Jeffrey Whitaker"
        class="jeff-pic"
      />

      <article class="intro">
        <h1>Jeffrey Whitaker</h1>
        <br />
        <hr />
        <br />
        <h2>Fullstack Web Developer</h2>
        <br />
        <br />
        <h2>Lambda School Trained</h2>
        <br />
        <br />
        <h2>MA History, U Oregon 2017</h2>
        <br />
        <br />
        <br />
        <router-link to="/projects">Projects</router-link>
      </article>
    </section>

    <section class="middle-wrapper">
      <article class="about" id="about">
        <h1>About Me</h1>
        <br />
        <p>
          I began my web dev journey in 2019 by enrolling in the Lambda School
          online bootcamp. I'm excited to be working in fullstack web
          development and look forward to showcasing my strengths. I graduated
          from Southern Oregon University in 2011 with BAs in History and
          Psychology, and from the University of Oregon in 2017 with an MA in
          history.
        </p>
      </article>

      <article class="skills">
        <h1>Skills</h1>
        <br />
        <ul>
          <li>- Knowledge of html/css, JS, Java, C#, Python, & Ruby</li>
          <li>
            - Proficient in React, Vue, Redux, Node, Spring Boot, Django, Rails
          </li>
          <li>- Experience with diverse groups and teams</li>
          <li>- Background in teaching and mentoring others</li>
        </ul>
      </article>
    </section>

    <section class="work-history">
      <article>
        <h1>Select Work History</h1>
        <br />
        <ul>
          <li>Paintberri.com, Junior Web Developer // July 2020 - present</li>
          <br />
          <li>
            Lambda School, Team Lead (TA) // August 2019 - November 2019,
            February 2020 - July 2020
          </li>
          <br />
          <li>
            Jackson County Library Services, Associate // February 2019 - June
            2019
          </li>
          <br />
          <li>
            Jackson County Library Services, Volunteer // Ocotober 2018 -
            February 2019
          </li>
          <br />
          <li>
            University of Oregon, Graduate Teaching Fellow // September 2012 -
            June 2017
          </li>
          <br />
        </ul>
      </article>
    </section>

    <footer>
      <p>Copyright Jeffrey David Whitaker 2019</p>
    </footer>
  </main>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import '../_settings.less';

.intro-wrapper {
  .flexbox-property();
  align-items: center;
  .jeff-pic {
    height: auto;
    max-width: 400px;
    width: 48%;
    margin-bottom: 10px;
  }
  .intro {
    text-align: center;
    width: 30%;
    h1 {
      font-family: @stylish-font;
    }
    h2 {
      font-size: 18px;
    }
    a {
      border: 1px solid @font-color-main;
      border-radius: 15px;
      text-decoration: none;
      color: @font-color-main;
      padding: 15px 30px;
      margin: 0 15px;
      display: block;
    }
    a:hover {
      .hover();
    }
  }
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    margin: 0 10px;
    .jeff-pic {
      width: 90%;
    }
    .intro {
      width: 90%;
    }
  }
}

.middle-wrapper {
  .flexbox-property();
  .about {
    width: 48%;
    margin: 0 20px 10px;
  }
  .skills {
    width: 48%;
    margin: 0 20px 10px;
  }
  @media only screen and (max-width: 500px) {
    margin: 10px;
  }
  @media only screen and (max-width: 400px) {
    flex-direction: column-reverse;
    .about {
      width: 90%;
    }
    .skills {
      width: 90%;
    }
  }
}

.work-history {
  .flexbox-property();
  div ul {
    list-style-type: circle;
  }
  @media only screen and (max-width: 500px) {
    padding: 0 20px;
    margin: 10px;
  }
}

footer {
  text-align: center;
  margin-bottom: 10px;
}
</style>
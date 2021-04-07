<template>
  <main class="container">
    <section class="intro-wrapper">
      <img
        src="/public/img/jeff-main.jpg"
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
        <router-link to="/projects" class="button">Projects</router-link>
      </article>
    </section>
    <div class="spacer"></div>
    <section class="middle-wrapper">
      <article class="about" id="about">
        <h1>About Me</h1>
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
        <ul>
          <li>Knowledge of html/css, JavaScript, TypeScript, C#, and Java</li>
          <li>Proficient in React, Vue, Redux, Node, Spring Boot</li>
          <li>Experience with diverse groups and teams</li>
          <li>Background in teaching and mentoring</li>
        </ul>
      </article>
    </section>
    <div class="spacer"></div>
    <section class="work-history">
      <article>
        <h1>Select Work History</h1>
        <ul>
          <li>CodeWizardsHQ, Front End Web Developer | April 2021 - present</li>
          <li>
            Paintberri.com, Full Stack Web Developer | June 2020 - Jan 2021
          </li>
          <li>
            Lambda School, Team Lead (TA) | August 2019 - November 2019,
            February 2020 - July 2020
          </li>
          <li>
            Jackson County Library Services, Associate | February 2019 - June
            2019
          </li>
          <li>
            Jackson County Library Services, Volunteer | Ocotober 2018 -
            February 2019
          </li>
          <li>
            University of Oregon, Graduate Teaching Fellow | September 2012 -
            June 2017
          </li>
        </ul>
      </article>
    </section>
    <div class="spacer"></div>
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
    border-radius: 5px;
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
    ul {
      list-style-type: circle;
    }
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
  article ul {
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

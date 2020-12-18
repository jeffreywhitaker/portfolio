<template>
  <section class="portfolio-wrapper">
    <article class="project-wrapper reverse">
      <div class="text-wrapper">
        <h1>JeffsDadJokes</h1>
        <h2>
          Frontend Stack: Typescript | React | Bootstrap | Redux | ChartJS
        </h2>
        <h2>Backend Stack: Express | Express-Session | Mongoose | MongoDB</h2>
        <br />
        <p>
          A site I built that lets you read, add, update, and delete dad jokes.
          You can upvote and downvote your favorite jokes, as well as filter
          jokes based on their vote score or creation date. Finally, you can
          view your profile stats, follow other users, and view other users
          profiles as well.
        </p>
        <div class="button-wrapper">
          <button class="smallButton">
            <a
              href="https://dadjoke.jeffreydavidwhitaker.now.sh/login"
              target="_blank"
              onclick="clickProjectLink()"
            >
              Website</a
            >
          </button>
          <button class="smallButton">
            <a
              href="https://github.com/jeffreywhitaker/dadjoke"
              target="_blank"
              onclick="clickProjectLink()"
            >
              Frontend Github</a
            >
          </button>
          <button class="smallButton">
            <a
              href="https://github.com/jeffreywhitaker/dadjoke-java-backend"
              target="_blank"
              onclick="clickProjectLink()"
            >
              Backend Github</a
            >
          </button>
        </div>
      </div>
      <div class="image-wrapper">
        <a href="public/img/jeffsdadjokes.png" class="fresco">
          <img src="public/img/jeffsdadjokes.png"
        /></a>
      </div>
    </article>
    <div class="spacer"></div>
    <article class="project-wrapper">
      <div class="image-wrapper">
        <a href="public/img/moodbloomCombined.png" class="fresco">
          <img src="public/img/moodbloomCombined.png" />
        </a>
      </div>
      <div class="text-wrapper">
        <h1>MoodBloom</h1>
        <h2>Frontend Stack: React | Apollo | Context API</h2>
        <h2>Backend Stack: Node | Express | GraphQL | MongoDB | Passport.js</h2>
        <br />
        <p>
          For this project I worked in a cross-functional team, building a
          mood-tracking progressive web app (PWA). The app allows users to
          signup (locally or with Google, if desired), and then presents them
          with a dashboard where they can record their mood, amount of sleep,
          anxiety level, and other notes. Users can complete activities, view a
          calendar of their mood history, or export their data as a PDF.
        </p>
        <div class="button-wrapper">
          <button class="smallButton">
            <a
              href="https://moodbloomapp.com"
              target="_blank"
              onclick="clickProjectLink()"
              >Website</a
            >
          </button>
          <button class="smallButton">
            <a
              href="https://github.com/Lambda-School-Labs/ema-therapy-fe"
              target="_blank"
              onclick="clickProjectLink()"
              >Frontend Github</a
            >
          </button>
          <button class="smallButton">
            <a
              href="https://github.com/Lambda-School-Labs/ema-therapy-be"
              target="_blank"
              onclick="clickProjectLink()"
              >Backend Github</a
            >
          </button>
        </div>
      </div>
    </article>
    <div class="spacer"></div>
    <article class="project-wrapper">
      <div class="text-wrapper">
        <h1>Action-Adventure Game</h1>
        <h2>Tech Stack: C# | Unity</h2>
        <br />
        <p>
          Built from scratch in Unity, I do the coding while my co-creator makes
          the art assets. Implemented a multi-slot save system using a singleton
          class to save current state values, and then write them to binary.
          Coded complex game mechanics, including a programatically-generated
          quest log, bestiary, and lore compendium using static classes.
          Implemented walk and dash, weapons, enemies, sub-weapons (bow and
          arrow, fire rod, magic, etc.), and NPCs.
        </p>
        <p>Code is stored in a private repository, available on request.</p>
      </div>
      <div class="image-wrapper">
        <a href="public/img/adventuregame.gif" class="fresco">
          <img src="public/img/adventuregame.gif"
        /></a>
      </div>
    </article>
    <div class="spacer"></div>
    <article class="project-wrapper reverse">
      <div class="image-wrapper">
        <a href="public/img/switchlist.png" class="fresco">
          <img src="public/img/switchlist.png"
        /></a>
      </div>
      <div class="text-wrapper">
        <h1>SwitchList</h1>
        <h2>Frontend Stack: React | Redux</h2>
        <h2>Backend Stack: Node | Express | REST API | MongoDB</h2>
        <br />
        <p>
          This project is a list of Nintendo Switch games, drawn from a Node.js
          API which I also constructed. The site allows people to access a list
          of games and sort by many options, including publisher, developer,
          composer, genre, and more. The project is built using React and
          React-Router, while the state is managed with Redux.
        </p>
        <div class="button-wrapper">
          <button class="smallButton">
            <a
              href="https://switchlist.now.sh"
              target="_blank"
              onclick="clickProjectLink()"
              >Website</a
            >
          </button>
          <button class="smallButton">
            <a
              href="https://github.com/jeffreywhitaker/switchlist"
              target="_blank"
              onclick="clickProjectLink()"
              >Frontend Github</a
            >
          </button>
          <button class="smallButton">
            <a
              href="https://github.com/jeffreywhitaker/switchlist_api"
              target="_blank"
              onclick="clickProjectLink()"
              >Backend Github</a
            >
          </button>
        </div>
      </div>
    </article>
    <div class="spacer"></div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
}
</script>

<style lang="less" scoped>
@import '../_settings.less';

.project-wrapper {
  h2 {
    font-size: 18px;
  }
  .flexbox-property();
  padding: 10px;
  justify-content: center;
  .image-wrapper {
    margin: 0 20px 10px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    img {
      object-fit: cover;
      height: 250px;
      border-radius: 5px;
    }
  }
  .text-wrapper {
    // width: 43%;
    flex-grow: 1;
    margin: 0 20px 10px;
    a {
      text-decoration: none;
      color: black;
      cursor: default;
    }
    .button-wrapper {
      display: flex;
    }
    button {
      padding: 5px 10px;
      margin-top: 10px;
    }
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    .image-wrapper {
      margin: 10px;
      img {
        width: 100%;
        max-width: 500px;
        height: auto;
      }
    }
  }
}
@media only screen and (max-width: 900px) {
  .reverse {
    flex-direction: column;
  }
}
</style>

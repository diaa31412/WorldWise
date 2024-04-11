import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <main className={styles.homepage}>
      <section>
        <NavBar />
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <NavLink to="/app" className="cta">Start traking Now</NavLink>
      </section>
    </main>
  );
}
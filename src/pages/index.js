import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ali | Data Analyst </title>
        <meta
          name="description"
          content="Using data to create measurable social impact and seeing insights spark real change."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

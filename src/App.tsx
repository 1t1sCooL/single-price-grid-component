import styles from './App.module.css'
import { Heading } from './Heading'
import {Footing} from "./Footing.tsx";
import {Footer} from "./Footer.tsx";

function App() {


  return (
    <><section className={styles.container}>
        <Heading/>
        <Footing/>


    </section>
    <Footer/>
    </>
  )
}

export default App

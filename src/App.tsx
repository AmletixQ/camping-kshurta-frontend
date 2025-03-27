import Header from "./components/Header/Header";

import styles from "./App.module.scss";
import AboutUs from "./sections/AboutUs/AboutUs";
import Accommodation from "./sections/Accommodation/Accommodation";
import Moments from "./sections/Moments/Moments";
import Conditions from "./sections/Conditions/Conditions";
import Gallery from "./sections/Gallery/Gallery";

const App = () => {
  return (
    <>
      <Header />

      <main className={styles.app}>
        <AboutUs />
        <Accommodation />

        <Moments />
        <Conditions />
        <Gallery />
      </main>
    </>
  );
};
export default App;

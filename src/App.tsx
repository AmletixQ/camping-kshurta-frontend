import Header from "./components/Header/Header";

import styles from "./App.module.scss";
import AboutUs from "./sections/AboutUs/AboutUs";
import Accommodation from "./sections/Accommodation/Accommodation";
import Moments from "./sections/Moments/Moments";
import Conditions from "./sections/Conditions/Conditions";

const App = () => {
  return (
    <>
      <Header />

      <main className={styles.app}>
        <AboutUs />
        <Accommodation />

        <Moments />
        <Conditions />
      </main>
    </>
  );
};
export default App;

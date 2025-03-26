import Header from "./components/Header/Header";

import styles from "./App.module.scss";
import AboutUs from "./sections/AboutUs/AboutUs";
import Accommodation from "./sections/Accommodation/Accommodation";

const App = () => {
  return (
    <>
      <Header />

      <main className={styles.app}>
        <AboutUs />
        <Accommodation />
      </main>
    </>
  );
};
export default App;

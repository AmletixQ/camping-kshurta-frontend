import Header from "./components/Header/Header";

import styles from "./App.module.scss";
import AboutUs from "./sections/AboutUs/AboutUs";

const App = () => {
  return (
    <>
      <Header />

      <main className={styles.app}>
        <AboutUs />
      </main>
    </>
  );
};
export default App;

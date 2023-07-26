import { useTranslation } from "react-i18next";

function Home({ setPageIndex }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      {/* <img className="home_logo" src="./assets/g20_logo.png" alt="flags" /> */}
      <h1>Home</h1>
    </>
  );
}

export default Home;

import i18n from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(
    resourcesToBackend((language, namespace, callback) => {
      import(`../../public/assets/locales/${language}/${namespace}.json`)
        .then((resources) => {
          callback(null, resources);
        })
        .catch((error) => {
          callback(error, null);
        });
    })
  )
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: localStorage.getItem("lang"),
    debug: false,

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
      wait: false,
    },
  });

export default i18n;

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          lang: "English",
          upload_selfie: "Upload selfie",
          selfi_with_flag: "#RunForUnity Selfies",
          more_selfies: "More Selfies",
          load_more: "Load More",
          home: "Home",
          services: "Services",
          enter_detail: "Enter Details",
          your_name: "Your Name",
          name: "Name",
          your_age: "Your Age",
          select_gender: "Select Gender",
          male: "Male",
          female: "Female",
          other: "Other",
          select_state: "Select your state/UT",
          next: "Next",
          saving: "Saving",
          click_selfie: "Click a selfie",
          retake: "Retake",
          upload: "Upload",
          avatar_generation_status: "Avatar Generation Failed:",
          submit: "Submit",
          uploading: "Uploading",
          avatar_generating: "Generating avatar",
          saving_avatar: "Saving avatar",
          people_visited: "Total Participation",
         selfi_popup_head: "Upload your selfie",
          drop_files: "Drop your files here",
          browse_files: "Browse Files",
          checkbox: "I, hereby give my consent to use my name and photos",
          download: "Download",
          dressa: "Dress A",
          dressb: "Dress B",
          select_dress: "Select Dress",
          error_uploading: "Error Uploading",
          uploaded_success: "Uploaded successfully and sent for moderation.",
          success: "Success",
          avatar_saved: "Avatar Saved",
          avatar_progressing: "Avatar Generation is progress.",
          something_unusual: "Something unusual happened. Try after sometime.",
          no_permission: "No Permission",
          share: "Share",
          back: "Back",
          coming_soon: "COMING SOON",
          back_to_home: "BACK TO HOME",
          carousel: [
            "./templeImg/lp1.png"
          ],
          participate: "Participate",
          subtitle: " Let’s join hands and celebrate the Festival of Unity",
          head2: "Shrinkhala",
          head1: "Ekta",
          read_more: "Read more",
          read_less: "Read less",
          thankyou1: "Thank you for your participation! ",
        },
      },
      hi: {
        translations: {
          lang: "Hindi",
          upload_selfie: "सेल्फ़ी अपलोड करें ",
          selfi_with_flag: "#RunForUnity सेल्फीज़",
          more_selfies: "More Selfies",
          load_more: "Load More",
          home: "होम ",
          services: "Services",
          enter_detail: "विवरण दर्ज करें",
          your_name: "आपका नाम",
          name: "नाम",
          your_age: "आपकी उम्र",
          select_gender: "लिंग चुनें",
          male: "पुरुष",
          female: "महिला",
          other: "अन्य",
          select_state: "अपना राज्य/ केंद्र  चुनें",
          next: "नेक्स्ट",
          saving: "सेविंग",
          click_selfie: "सेल्फी क्लिक करें",
          retake: "रिटेक",
          upload: "अपलोड",
          avatar_generation_status: "अवतार निर्माण विफल:",
          submit: "सबमिट",
          uploading: "अप्लोअडिंग",
          avatar_generating: "जनरेटिंग अवतार",
          saving_avatar: "सेविंग अवतार",
          people_visited: "कुल भागीदारी ",
          about_head: "About",
          about_intro_head: "एकता पर्व",
          selfi_popup_head: "अपनी सेल्फ़ी अपलोड करें ",
          drop_files: "अपनी फ़ाइल यहाँ ड्रॉप करें ",
          browse_files: "ब्राउज  फाइल्स",
          checkbox:
            "मैं, एतद्द्वारा अपने नाम और फ़ोटो का उपयोग करने के लिए अपनी सहमति देता हूं",
          download: "डाउनलोड",
          dressa: "ड्रेस  अ",
          dressb: "ड्रेस  बी",
          select_dress: "सेलेक्ट  ड्रेस",
          error_uploading: "एरर  उप्लोअडिंग",
          uploaded_success:
            "सफलतापूर्वक अपलोड किया गया और मॉडरेशन के लिए भेजा गया",
          success: "सक्सेस",
          avatar_saved: "अवतार  सेव्ड ",
          avatar_progressing: "अवतार प्रगति कर रही है",
          something_unusual: "कुछ असामान्य हुआ। कुछ देर बाद कोशिश करें।",
          no_permission: "नो  परमिशन",
          share: "Share",
          back: "Back",
          coming_soon: "COMING SOON",
          back_to_home: "BACK TO HOME",
          carousel: [
            "./templeImg/lp1.png"
          ],
          participate: "भागीदारी करें ",
          subtitle: "आइए, हाथ से हाथ मिलाकर एकता पर्व मनाएँ ",
          head2: "शृंखला",
          head1: "एकता",
          read_more: "Read more",
          read_less: "Read less",
          thankyou1: "Thank you for your participation! ",
        },
      }
    },

    fallbackLng: "en",
    debug: false,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

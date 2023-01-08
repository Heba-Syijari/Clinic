import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

export const language = (lan) => {
  const resources = {
    en: {
      translation: {
        "Welcome to LeaLap": "Welcome to LeaLap",
        "Last Pateint": "Last Pateint",
      },
    },
    ar: {
      translation: {
        "Welcome to LeaLap": "مرحبا بك في مخبر ليا",
        "Last Pateint": "آخر المرضى",
        "Doctors section": "قسم الأطباء",
        "Reviewers Section": "قسم المراجعين",
        "Current Year": "السنة الحالية",
        "Last Year": "السنة الماضية",
        "Store Lab": "مخزن المتجر",
        Doctors: "الأطباء",
        Workers: "العمال",
        Analysis: "التحليلات",
        Patients: "المرضى",
        "Analysis today": "تحليلات اليوم",
        "Sort by": "صنف حسب",
        All: "الكل",
        "Not complete": "غير مكتمل",
        "Completed and not printed": "مكتمل و غير مطبوع",
        Printed: "مطبوع",
        Laboratories: "مخابر",
        "Add patient": "أضف مريض",
        From: "من",
        To: "إلى",
        "Add section": "",
        "Move up": "",
        "Move down": "",
        "Add SubSection": "",
        Save: "",
        Delete: "",
        "Section name": "",
        "Check code": "",
        "Examination name in print": "",
        "Examination method": "",
        "intake tube": "",
        "Examination price": "",
        "Laboratory examination price": "",
        "Examination price for companies": "",
        "Measruing unit": "",
        "Class analysis": "",
      },
    },
  };

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: { lan }, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
      // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
      // if you're using a language detector, do not define the lng option

      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
  return i18n;
};

const translations = {
  // default isn't actually used, it's just to help show what the keys mean in english
  default: {
    head_0: "The World of Tomorrow"
  },
  zh: {
    head_0: "明天的世界"
  },
  ru: {
    head_0: "мир завтрашнего дня"
  },
  es: {
    head_0: "El mundo del mañana"
  }
};

// translations
function replaceLanguage(shortLanguage) {
  const translation = translations[shortLanguage];
  if (!translation) return;

  for (const key in translation) {
    if (translation.hasOwnProperty(key)) {
      const element = translation[key];

      const dom = document.getElementById(key);
      dom.innerHTML = element;
      dom.lang = shortLanguage;
    }
  }
}

const detectAndReplace = () => {
  const language = window.navigator.userLanguage || window.navigator.language;
  if (!language) return;
  const shortLanguage = language.slice(0, 2);

  replaceLanguage(shortLanguage);
};

detectAndReplace();

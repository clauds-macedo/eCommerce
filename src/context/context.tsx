import React from "react";

export enum languages {
  PORTUGUESE = "pt",
  ENGLISH = "en",
}

interface IAppContext {
  language: languages;
  saveLanguage: (newLanguage: languages) => void;
}

const AppContext = React.createContext<IAppContext>({
  language: languages.PORTUGUESE,
  saveLanguage: (newLanguage: languages) => Promise<void>,
});

const AppProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [language, setLanguage] = React.useState(languages.PORTUGUESE);

  const saveLanguage = (newLanguage: languages) => {
    setLanguage(newLanguage);
  };
  return (
    <AppContext.Provider
      value={{
        language,
        saveLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
import React, { createContext, useState, useEffect } from 'react';
import { Locales, SupportedLocales } from '../types';
import { I18N_PATH } from '../../config';
import { hot } from 'react-hot-loader';

export type I18nContextType = {
  supportedLocales: SupportedLocales;
  dateDnsLocales: Locales;
};
export const I18nContext = createContext<I18nContextType>({
  supportedLocales: [],
  dateDnsLocales: {},
});

 export const I18nContextProvider: React.FC = ({ children }) => {
  const [dateDnsLocales, setDateDnsLocales] = useState<Locales>({});
  const [supportedLocales, setSupportedLocales] = useState<SupportedLocales>([]);

  useEffect(() => {
    (async function updateLocales() {
      let availableLocales: Locales = {};

      const supportedLocales: SupportedLocales =["en-US", "uk", "ru"];

      await Promise.all(
        supportedLocales.map(async (locale) => {
          const dateFnsLocale = (
            await import(
              /* webpackMode: "lazy", webpackChunkName: "datefns-locale-[index]" */
              `date-fns/locale/${locale}/index.js`
            )
          ).default;
          availableLocales = { ...availableLocales, [locale]: dateFnsLocale };
        }),
      );
      setSupportedLocales(supportedLocales);
      setDateDnsLocales(availableLocales);
    })();
  }, []);

  const data = {
    dateDnsLocales,
    supportedLocales,
  };

  return <I18nContext.Provider value={data}>{children}</I18nContext.Provider>;
};

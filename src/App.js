import React, { useState, useMemo } from "react";
import { IntlProvider } from "react-intl";
import FormattedMessageSection from "./components/formatterdMessageSection";
import FormatterdDateSection from "./components/formatterdDateSection";
import FormatterdTimeSection from "./components/formatterdTimeSection";
import FormattedNumberSection from "./components/formattedNumberSection";
import enMsg from "./i18n/en";
import zhMsg from "./i18n/zh";

export default function App() {
  const [locale, setLocale] = useState("zh");

  const message = useMemo(() => {
    switch (locale) {
      case "en":
        return enMsg;
      case "zh":
        return zhMsg;
      default:
        return zhMsg;
    }
  }, [locale]);

  const handleChangeLocale = e => {
    setLocale(e.target.value);
  };

  return (
    <IntlProvider messages={message} locale={locale}>
      <select value={locale} onChange={handleChangeLocale}>
        <option value="zh">中文</option>
        <option value="en">English</option>
      </select>

      <ul>
        <li>
          <FormattedMessageSection />
        </li>
        <li>
          <FormatterdDateSection />
        </li>
        <li>
          <FormatterdTimeSection />
        </li>
        <li>
          <FormattedNumberSection />
        </li>
      </ul>
    </IntlProvider>
  );
}

import React from "react";
import { FormattedTime } from "react-intl";

/**
 * 
 * FormattedTime 
 * 
 * props: DateTimeFormatOptions &
  {
    value: any,
    format: string,
    children: (formattedDate: string) => ReactElement,
  }

  
 * ===>
    hourCycle?: 'h11' | 'h12' | 'h23' | 'h24';
    dateStyle?: 'full' | 'long' | 'medium' | 'short';
    timeStyle?: 'full' | 'long' | 'medium' | 'short';
    fractionalSecondDigits?: number;
    calendar?: 'buddhist' | 'chinese' | 'coptic' | 'ethiopia' | 'ethiopic' | 'gregory' | 'hebrew' | 'indian' | 'islamic' | 'iso8601' | 'japanese' | 'persian' | 'roc';
    numberingSystem?: string;

    localeMatcher?: string;
    weekday?: string;
    era?: string;
    year?: string;
    month?: string;
    day?: string;
    hour?: string;
    minute?: string;
    second?: string;
    timeZoneName?: string;
    formatMatcher?: string;
    hour12?: boolean;
    timeZone?: string;

    format?: string;

    value: string | number | Date | undefined;

    children: (formattedDate: string) => ReactElement
 *  
 */

function Index() {
  return (
    <>
      <h3>FormattedTime:</h3>
      <FormattedTime value={Date.now()} />
      <br />
      <FormattedTime value={new Date(1459832991883)} />
      <br />
      <FormattedTime
        value={new Date(1459832991883)}
        hour="2-digit"
        minute="2-digit"
        second="2-digit"
      />
    </>
  );
}

export default Index;

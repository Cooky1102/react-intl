import React from "react";
import { FormattedNumber } from "react-intl";

/**
 * 
 * FormattedNumber 
 * 
 * props: NumberFormatOptions &
  {
    value: number,
    format: string,
    children: (formattedNumber: string) => ReactElement,
  }

 * 
 */

function Index() {
  return (
    <>
      <h3>FormattedNumber:</h3>
      <p>
        <FormattedNumber value={1000} />
        <br />
        <FormattedNumber value={1000} style="currency" currency="USD" />
        <br />
        <FormattedNumber
          value={1000}
          style="unit"
          unit="kilobyte"
          unitDisplay="narrow"
        />
        <br />
        <FormattedNumber
          value={1000}
          unit="fahrenheit"
          unitDisplay="long"
          style="unit"
        />
        <br />
      </p>
    </>
  );
}

export default Index;

/* 

type Unit =
  | 'acre'
  | 'bit'
  | 'byte'
  | 'celsius'
  | 'centimeter'
  | 'day'
  | 'degree'
  | 'fahrenheit'
  | 'fluid-ounce'
  | 'foot'
  | 'gallon'
  | 'gigabit'
  | 'gigabyte'
  | 'gram'
  | 'hectare'
  | 'hour'
  | 'inch'
  | 'kilobit'
  | 'kilobyte'
  | 'kilogram'
  | 'kilometer'
  | 'liter'
  | 'megabit'
  | 'megabyte'
  | 'meter'
  | 'mile'
  | 'mile-scandinavian'
  | 'millimeter'
  | 'milliliter'
  | 'millisecond'
  | 'minute'
  | 'month'
  | 'ounce'
  | 'percent'
  | 'petabyte'
  | 'pound'
  | 'second'
  | 'stone'
  | 'terabit'
  | 'terabyte'
  | 'week'
  | 'yard'
  | 'year'
  */

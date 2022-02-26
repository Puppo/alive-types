import { Currency } from "../core";
const intlFormat = new Intl.NumberFormat();

type Currencies = Currency["currency"];
type CurrencyFormat = (number: number | bigint) => string;

const FORMATS: Record<Currencies, CurrencyFormat> = {
  USD: new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" })
    .format,
  EUR: new Intl.NumberFormat(undefined, { style: "currency", currency: "EUR" })
    .format,
};

export const format = (currency: Currency): string =>
  FORMATS[currency.currency](currency.amount);

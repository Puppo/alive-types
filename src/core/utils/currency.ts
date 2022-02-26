import { Currency } from '../models';

type Currencies = Currency['currency'];

const FORMATS: Record<Currencies, Intl.NumberFormat> = {
  USD: new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }),
  EUR: new Intl.NumberFormat(undefined, { style: 'currency', currency: 'EUR' }),
};

const format = (currency: Currency): string =>
  FORMATS[currency.currency].format(currency.amount);

export default format;

import { IsoDate } from '../models';

export function decode(date: IsoDate): Date {
  return new Date(date);
}

export function encode(date: Date): IsoDate {
  return date.toISOString();
}

const intDateTime = new Intl.DateTimeFormat();

export function format(date: Date): string {
  return intDateTime.format(date);
}

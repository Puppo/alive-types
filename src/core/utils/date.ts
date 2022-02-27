const intDateTime = new Intl.DateTimeFormat();

export default function format(date: Date): string {
  return intDateTime.format(date);
}

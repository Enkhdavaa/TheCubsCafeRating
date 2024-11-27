const cafes_unsorted = [
  "Smaakmakers",
  "ZwartWit",
  "Community Square",
  "Otis",
  "Bean brothers",
  "Anne & Max",
  "CoffeeLab (Strijp)",
  "CoffeeLab (Center)",
  "Lunchroom 1NUL1",
  "Bakkie 040",
  "Jungle Cafe",
  "Coffee Corner",
  "Lucifer (Station)",
  "Koffie Keuten",
];

export const cafes: string[] = cafes_unsorted.sort((a: string, b: string) => {
  return a.localeCompare(b);
});

interface cafe {
  name: string;
  link: string;
}

const cafes_unsorted: cafe[] = [
  {
    name: "Smaakmakers",
    link: "https://maps.app.goo.gl/SY4sHgZDZbjfRQkK7",
  },
  { name: "ZwartWit", link: "https://maps.app.goo.gl/k7nqeJbbJaaPqF7z6" },
  {
    name: "Community Square",
    link: "https://maps.app.goo.gl/X3Dh38P4JwuuHbco7",
  },
  { name: "Otis", link: "https://maps.app.goo.gl/gxXvXGadxUnJRfKJ7" },
  { name: "Bean brothers", link: "https://maps.app.goo.gl/gY4cMoRn3oxF2Nvc8" },
  { name: "Anne & Max", link: "https://maps.app.goo.gl/vjnAYf61vrTyK9XJ9" },
  {
    name: "CoffeeLab Strijp",
    link: "https://maps.app.goo.gl/wV5d17RvEZUFWsrq8",
  },
  {
    name: "CoffeeLab Center",
    link: "https://maps.app.goo.gl/SGi7Bp8DeiXxQHzg9",
  },
  {
    name: "Lunchroom 1NUL1",
    link: "https://maps.app.goo.gl/8EgLTjxpGxxTCZVG9",
  },
  { name: "Bakkie 040", link: "https://maps.app.goo.gl/7JwEbyjmw2ocxTLj7" },
  { name: "Jungle Cafe", link: "https://maps.app.goo.gl/LWWvZ1V2R6yGyqCY6" },
  { name: "Coffee Corner", link: "https://maps.app.goo.gl/g3t2Xnr8hrcr1DVr7" },
  {
    name: "Lucifer Station",
    link: "https://maps.app.goo.gl/WHXmiyF5q6hmFGS79",
  },
  { name: "Koffie Keuten", link: "https://maps.app.goo.gl/WVoZy3Xb1gphEfGP9" },
];

export const cafes: cafe[] = cafes_unsorted.sort((cafeA: cafe, cafeB: cafe) => {
  return cafeA.name.localeCompare(cafeB.name);
});

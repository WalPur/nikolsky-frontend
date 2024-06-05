import TextNav from "../elements/text_nav";

function Navigation() {
  let links = [
    { text: "Главная", url: "/" },
    { text: "Новости", url: "/news" },
    { text: "События", url: "/" },
    { text: "Экспонаты", url: "/models" },
    {
      text: "3D тур",
      url: "https://xn--p1add.xn----jtbfcagdcajpep7b9a1k.xn--p1ai/",
    },
    { text: "О музее", url: "/about" },
    { text: "Посетить", url: "/contacts" },
  ];
  let elements = links.map((link) => (
    <TextNav text={link.text} url={link.url} key={link.text} />
  ));
  return (
    <div className="flex justify-between bg-yellow-500 rounded-3xl h-min w-full px-10">
      {elements}
    </div>
  );
}
export default Navigation;

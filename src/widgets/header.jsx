import Navigation from "../blocks/nav";

function Header() {
  return (
    <div className="flex gap-10 w-full items-end">
      <img src="/elements/logo.png" alt="лого" className="w-24 h-20" />
      <Navigation />
    </div>
  );
}

export default Header
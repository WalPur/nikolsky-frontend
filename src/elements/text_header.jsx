function TextHeader({ text, size = 54 }) {
  return (
    <h1 className={"text-stone-700 text-5xl font-bold font-['Amagro']"}>
      {text}
    </h1>
  );
}

export default TextHeader;

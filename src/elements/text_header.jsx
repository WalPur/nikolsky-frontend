function TextHeader({ toptext, subtext, size = 54 }) {
    return (
        <h1 className={"text-stone-700 text-5xl font-bold font-['Amagro'] flex flex-col leading-tight"}>
            <span className="text-nowrap">{toptext}</span>
            <span className="text-nowrap">{subtext}</span>
        </h1>
    );
}

export default TextHeader;

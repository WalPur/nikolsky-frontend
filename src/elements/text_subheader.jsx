function TextSubheader({ toptext, subtext, size = 32 }) {
    return (
        <h2 className={"text-stone-700 text-3xl font-normal font-['Alegreya'] flex flex-col"}>
            <span className="text-nowrap">{toptext}</span>
            <span className="text-nowrap">{subtext}</span>
        </h2>
    );
}

export default TextSubheader;

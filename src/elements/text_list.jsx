function TextList({ text }) {
    return (
        <div className="flex gap-4 items-center">
            <img src="/elements/arrow.png" alt="стрелка" className="w-5 h-5" />
            <span className="text-stone-700 text-2xl font-normal font-['Alegreya Sans SC']">
                {text}
            </span>
        </div>
    );
}
export default TextList;

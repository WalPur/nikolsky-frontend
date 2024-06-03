import TextNav from "../elements/text_nav"

function Navigation() {
    let links = [
        { "text": "Главная", "url": "#" },
        { "text": "Новости", "url": "#" },
        { "text": "События", "url": "#" },
        { "text": "Экспонаты", "url": "#" },
        { "text": "3D тур", "url": "#" },
        { "text": "О музее", "url": "#" },
        { "text": "Посетить", "url": "#" },
    ]
    let elements = links.map((link) => <TextNav text={link.text} url={link.url} />)
    return <div className="flex justify-between bg-yellow-500 rounded-3xl h-min w-full px-10">
        {elements}
    </div>
}
export default Navigation
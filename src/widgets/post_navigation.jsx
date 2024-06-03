import List from "../blocks/list";

function PostNavigation() {
    return (
        <div className="flex flex-col gap-8">
            <span className={"text-stone-700 text-3xl font-normal font-['Alegreya Sans SC'] flex flex-col"}>
                <span className="text-nowrap">Узнайте больше про</span>
                <span className="text-nowrap">Никольский музей землепользования:</span>
            </span>
            <List />
        </div>
    )
}
export default PostNavigation
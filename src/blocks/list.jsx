import TextList from "../elements/text_list";

function List() {
    let textlist = ["Узнайте историю музея", "Смотрите ЗD тур", "Подпишитесь на новости"]
    let elements = textlist.map((text) => <TextList text={text}/>)
    return (
        <div className="flex flex-col gap-7">
            {elements}
        </div>
    )
}

export default List;
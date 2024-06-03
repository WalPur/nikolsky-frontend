import TextHeader from "../elements/text_header";
import TextSubheader from "../elements/text_subheader";

function BlockName() {
    return (
        <div className="flex flex-col gap-3">
            <TextHeader toptext="Никольский музей" subtext="землепользования" />
            <TextSubheader toptext="им. И. С. Шарапова" />
        </div>
    );
}

export default BlockName;

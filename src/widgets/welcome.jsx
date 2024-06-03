import BlockName from "../blocks/name";
import TextSubheader from "../elements/text_subheader";

function Welcome() {
  return (
    <div className="flex flex-col gap-11">
      <BlockName />
      <TextSubheader toptext="Добро пожаловать в Никольский музей" subtext="землепользования!" />
    </div>
  );
}

export default Welcome;

import BlockName from "../blocks/name";
import TextSubheader from "../elements/text_subheader";

function Welcome() {
  return (
    <div className="flex flex-col gap-11">
      <BlockName />
      <TextSubheader text="Добро пожаловать в Никольский музей землепользования!" />
    </div>
  );
}

export default Welcome;

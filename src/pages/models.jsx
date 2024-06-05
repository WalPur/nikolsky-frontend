import Model from "../widgets/model";

function PageModels() {
  const models = [
    {
      name: "Якутская детская игрушка в виде быка",
      content:
        "Бык, корова - животные, которые присутствовали только в игрушках якутов и неизвестны другим скотоводам Сибири. Они свидетельствуют о важности сохраняемой игрушкой информации. Якуты, оторвавших от основного массива скотоводческих народов, оказались в окружении чуждых им форм хозяйственной деятельности. Именно поэтому возникла потребность закрепить в игрушке основные черты своего собственного типа хозяйства.",
      image: "/images/models/bull.png",
      model: "bull.glb",
    },
    {
      name: "Череп грызуна",
      content: "",
      image: "/images/models/skull.png",
      model: "skull.glb",
    },
    {
      name: "Челюсть грызуна",
      content: "",
      image: "/images/models/jaw.png",
      model: "jaw.glb",
    },
  ];
  const modelArticles = models.map((model) => {
    return <Model data={model} />;
  });
  return (
    <div className="w-full flex flex-col gap-20 items-center">
      <div className="w-[1422px] h-[1154px] bg-white rounded-[20px] p-20">
        <div className="flex justify-between">
          <div>
            <div className="text-stone-700 text-3xl font-bold font-['Amagro'] text-center">
              Про экспонаты
            </div>
            <div className="w-full h-px border border-slate-700 my-4"></div>
            <div className="w-[537px] h-[873px] text-black text-[32px] font-normal font-['Alegreya']">
              В музее находятся исторические предметы быта Никольских
              земледельцев: различные приспособления для посева и сбора урожая,
              обработки растений. Также помимо основной тематики, в музее
              присутствуют исторические вещи времён революции и Великой
              Отечественной войны. <br />
              <br />
              На сайте можно ознакомиться с игрушками коренных народов Якутии:
              студенты Арктического Государственного Института Культуры и
              Искусств, специально подготовили для нашего музея отсканированные
              игрушки из нашей экспозиции, в виде ЗD моделей с которыми Вы
              можете ознакомиться ниже.
            </div>
          </div>
          <div className="flex flex-col">
            <img
              className="w-[615px] h-[473px] rounded-[20px]"
              src="/images/models-image.png"
            />
            <div className="w-[615px] text-neutral-600/opacity-75 text-xl font-medium font-['Alegreya']">
              На данном фото можно увидеть часть музея с наковальней и
              различными экспонатами земледелия
            </div>
          </div>
        </div>
      </div>
      {modelArticles}
    </div>
  );
}

export default PageModels;

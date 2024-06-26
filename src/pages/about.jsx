import TextHeader from "../elements/text_header";

function PageAbout() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-10">
      <TextHeader toptext="О музее" />
      <div className="w-full bg-white rounded-[20px] p-20">
        <div className="text-stone-700 text-[40px] font-bold font-['Amagro'] mb-10">
          История музея
        </div>
        <div className="text-black text-4xl font-normal font-['Alegreya']">
          Здание Никольского музея построено в 1991 году. Для широкого круга
          посетителей музей представил свои экспозиции осенью 1993 года, в целях
          сохранения памяти о первых земледельцах и истории развития земледелия
          в Намском улусе Республики Саха (Якутия). Музей олицетворяет вековую
          дружбу народов, увековечивает память о первых добрых земледельцах
          Никольской слободы. Его директором был назначен Кривошапкин Георгий
          Ильич, чьими усилиями были проведены значительные работы по
          обустройству, планированию и составлению фондов музея. Большой вклад в
          дело становления музея земледелия внесли глава Намского улуса Алексеев
          Д.Ф., председатель улусного земельного комитета Попов А.Д.,
          заслуженный землеустроитель РСФСР Попов А.А. и др. Активную работу
          провели фотограф, журналист Халыев Т.Т., жители с. Хамагатта Атласов
          К.К., Касьянов А.Г., Кудрин Е.Е., Ильин В.Н. и др. Над составлением
          подробной экспозиции трудились научные сотрудники музея Кондаков С.С.,
          Никитин Я.П., Баишева Ф.Г. и энтузиаст Б.М. Васильев. Также в
          организацию музея внесли свой вклад глава Хамагаттинского наслега Н.Д.
          Захаров и главный бухгалтер администрации Л.В. Канаева. Техработниками
          долгое время проработали Протопопов Л.П., Протопопова П.Р. В настоящее
          время в музее трудятся Кривошапкин Г.И., Протопопова С.Н., Никитина
          Р.М., Нератова А.Е.
          <br /> Никольский музей земледелия освещает историю выращивания
          зерновых, овощных культур, рассказывает о самых высоких показателях
          урожая, знакомит посетителей со знатными работниками сельского
          хозяйства. По таблицам, схемам, картам можно проследить становление
          колхозов, совхозов, управлений сельского хозяйства. Здесь можно
          ознакомиться с выдающимися достижениями первых землепашцев, изучить
          деятельность первой машинно-тракторной станции, увидеть фотографии
          первых трактористов, девушек-механизаторов, знатных тружеников, среди
          которых имена Егора Афанасьевича Протопопова, Кэскила Гаврильевича
          Баишева, маяков производства Василия Колесова, Василия Слепцова,
          Алексея Слепцова, Василия Замятина, Василия Федорова, Иннокентия
          Винокурова, Максима Ли, Егора Яковлева, рационализаторов Наума
          Сивцева, Екатерины Марковой, заслуженных агрономов ЯАССР Ильи
          Еремеева, Ивана Герасимова, Риммы Тетериной, председателя правления
          колхоза имени Ленина Николая Николаевича Москвитина, заслуженного
          работника народного хозяйства Прокопия Соловьева, учителя
          Хамагаттинской средней школы В.С. Кривошапкиной, провизора, кандидата
          наук Кривошапкиной Л.Г., заслуженного землеустроителя РСФСР Попова
          Алексея и др. <br /> Экспонаты музея также знакомят с историей
          Никольского наслега, рассказывают о жизни и быте его первых
          поселенцев, о крестьянских семьях, вложивших свои силы и труд в
          земледелие. Здесь можно увидеть имена руководителей с. Никольцы, среди
          них Александр Николаевич Сысолятин, Иван Софронович Шадрин, Михаил
          Серафимович Шарапов, Егор Павлович Иванов.
          <br /> Сегодня Никольский музей освещает трудовые достижения своих
          земляков, развитие экономики родного улуса. Директором работает
          Прасковья Романовна Протопопова.
          <br /> В 2009 г. в улусе широко отметили 200-летие начала земледелия
          на Намской земле, к этой дате построена конная мельница-топчанка на
          территории Никольского музея земледелия.
        </div>
      </div>
      <div className="w-full bg-white rounded-[20px] p-20">
        <div className="text-stone-700 text-4xl font-bold font-['Amagro'] mb-10">
          О музее
        </div>
        <div className="text-black text-4xl font-normal font-['Alegreya']">
          Музей олицетворяет вековую дружбу народов, увековечивает память о
          первых добрых земледельцах Никольской слободы.
          <br />
          <br />В фонде музея хранятся материалы и экспонаты рассказывающие о
          создании Никольской слободы, её истории, об основателях землепашества
          в Намском улусе и об известном кровопролитном событии, происходившем в
          селе Никольский, в годы Гражданской войны в Якутии.
        </div>
      </div>
    </div>
  );
}

export default PageAbout;

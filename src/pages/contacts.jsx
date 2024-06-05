function PageContacts() {
  return (
    <div className="flex justify-between gap-20">
      <div className="w-1/2 flex flex-col gap-10">
        <div className=" text-stone-700 text-[53px] font-bold font-['Amagro']">
          Контакты
        </div>
        <div className="bg-white rounded-[20px] p-10">
          <span className="text-black text-2xl font-light font-['Roboto Slab']">
            Адрес: 678383, Республика Саха (Якутия), Намский улус,с. Никольский,
            ул Е.Протопопова, д.14
            <br />
            Контактный номер телефона:{" "}
          </span>
          <span className="text-black text-2xl font-light font-['Roboto Slab'] underline">
            8(41162)24-9-98
            <br />
          </span>
          <span className="text-black text-2xl font-light font-['Roboto Slab']">
            E-mail:{" "}
          </span>
          <span className="text-black text-2xl font-light font-['Roboto Slab'] underline">
            grainamtsy@gmail.com
          </span>
        </div>
        <div className="bg-white rounded-[20px] p-10">
          <div className="text-black text-2xl font-light font-['Roboto Slab']">
            Договориться о участии в творческих занятиях можно, связавшись с
            нами через контактный номер телефона (WhatsApp, Telegram), или же
            через электронную почту.
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <a href="https://2gis.ru/yakutsk/firm/70000001039809779">
          <img className="rounded-[20px]" src="/images/map.png" />
        </a>
      </div>
    </div>
  );
}

export default PageContacts;

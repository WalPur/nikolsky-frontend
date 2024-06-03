function SliderImageGroup() {
  return (
    <div className="flex gap-20">
      <div
        className={`w-96 h-96 rounded-3xl bg-slider1 bg-cover bg-no-repeat bg-center`}
      />
      <div
        className={`w-96 h-96 rounded-3xl bg-slider2 bg-cover bg-no-repeat bg-center`}
      />
      <div
        className={`w-96 h-96 rounded-3xl bg-slider3 bg-cover bg-no-repeat bg-center`}
      />
    </div>
  );
}

export default SliderImageGroup;

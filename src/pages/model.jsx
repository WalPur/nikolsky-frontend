import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BabylonScene from "../widgets/babylon";

function PageModel() {
  const { name } = useParams();
  return <BabylonScene modelsName={name} />;
}

export default PageModel;

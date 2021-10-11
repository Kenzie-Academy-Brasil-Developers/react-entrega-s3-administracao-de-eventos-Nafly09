import FlexButton from "../botão";
import { Card, Picture } from "./styles";

import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";

const ProductsList = ({ type }) => {
  const { catalogue, formatura, casamento, confraternização } =
    useContext(CatalogueContext);

  return (
    <ul>
      {type === "catalogue" &&
        catalogue.map((item, index) => (
          <Card key={index}>
            {item.name} <Picture src={item.image_url} alt={`${item.name}`} />
            <FlexButton type={"formatura"} item={item} />
            <FlexButton type={"casamento"} item={item} />
            <FlexButton type={"confraternização"} item={item} />
          </Card>
        ))}

      {type === "formatura" &&
        formatura.map((item, index) => (
          <Card key={index}>
            {item.name} <Picture src={item.image_url} alt={`${item.name}`} />
            <FlexButton type={type} item={item} toRemove removeText />
          </Card>
        ))}

      {type === "casamento" &&
        casamento.map((item, index) => (
          <Card key={index}>
            {item.name} <Picture src={item.image_url} alt={`${item.name}`} />
            <FlexButton type={type} item={item} toRemove removeText />
          </Card>
        ))}
      {type === "confraternização" &&
        confraternização.map((item, index) => (
          <Card key={index}>
            {item.name} <Picture src={item.image_url} alt={`${item.name}`} />
            <FlexButton type={type} item={item} toRemove removeText />
          </Card>
        ))}
    </ul>
  );
};

export default ProductsList;

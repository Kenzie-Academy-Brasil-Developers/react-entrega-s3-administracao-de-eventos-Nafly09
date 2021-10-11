import { Button } from "@material-ui/core";
import { useContext } from "react";
import { CatalogueContext } from "../../providers/catalogue";

const FlexButton = ({ type, item, toRemove = false, removeText = false }) => {
  const {
    addToFormatura,
    addToConfraternização,
    addToCasamento,
    removeFromCasamento,
    removeFromFormatura,
    removeFromConfraternização,
  } = useContext(CatalogueContext);

  const text =
    type === "casamento"
      ? "Adicionar ao casamento"
      : type === "formatura"
      ? "Adicionar á formatura"
      : type === "confraternização"
      ? "Adicionar á confraternização"
      : null;

  const textToRemove =
    type === "casamento"
      ? "Remover do casamento"
      : type === "formatura"
      ? "Remover da formatura"
      : type === "confraternização"
      ? "Remover da confraternização"
      : null;

  const handleClick = () => {
    if (type === "casamento") {
      addToCasamento(item);
    } else if (type === "formatura") {
      addToFormatura(item);
    } else {
      addToConfraternização(item);
    }
  };

  const handleClickRemove = () => {
    if (type === "casamento") {
      removeFromCasamento(item);
    } else if (type === "formatura") {
      removeFromFormatura(item);
    } else {
      removeFromConfraternização(item);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={toRemove ? handleClickRemove : handleClick}
      >
        {removeText ? textToRemove : text}
      </Button>
    </>
  );
};

export default FlexButton;

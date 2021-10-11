import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([]);
  const [casamento, setCasamento] = useState([]);
  const [formatura, setFormatura] = useState([]);
  const [confraternização, setConfraternização] = useState([]);

  const addToConfraternização = (item) => {
    setConfraternização([...confraternização, item]);
  };
  const addToCasamento = (item) => {
    setCasamento([...casamento, item]);
  };
  const addToFormatura = (item) => {
    setFormatura([...formatura, item]);
  };

  const removeFromConfraternização = (item) => {
    const newConfraternização = confraternização.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    );
    setConfraternização(newConfraternização);
  };
  const removeFromCasamento = (item) => {
    const newCasamento = casamento.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    );
    setCasamento(newCasamento);
  };
  const removeFromFormatura = (item) => {
    const newFormatura = formatura.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    );
    setFormatura(newFormatura);
  };

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => setCatalogue(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CatalogueContext.Provider
      value={{
        catalogue,
        casamento,
        formatura,
        confraternização,
        addToCasamento,
        addToConfraternização,
        addToFormatura,
        removeFromCasamento,
        removeFromConfraternização,
        removeFromFormatura,
      }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};

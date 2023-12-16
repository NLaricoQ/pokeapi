import { useContext, useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { getAllTypes } from "../services/getAllTypes";
import { UserNameContext } from "../context/UserNameContext";

const FilterForm = ({ nameInitial, typeInitial }) => {
  const { setCurrentPage } = useContext(UserNameContext);

  const [types, setTypes] = useState([]);
  const [pokemonName, setPokemonName] = useState(nameInitial);
  const [typeValue, setTypeValue] = useState(typeInitial);

  const handlePage = () => {
    setCurrentPage(0);
  };
  const handleChange = (e) => {
    const newValue = e.target.value;
    setPokemonName(newValue);
  };

  const handleSelect = (e) => {
    const newValue = e.target.value;
    setTypeValue(newValue);
  };
  useEffect(() => {
    const loadTypes = async () => {
      const typesList = await getAllTypes();
      setTypes(typesList);
    };
    loadTypes();
  }, []);
  useEffect(() => {
    setPokemonName(nameInitial);
    setTypeValue(typeInitial);
  }, [nameInitial, typeInitial]);

  return (
    <Form className="flex flex-col mx-10">
      <div className="flex flex-col items-center gap-5">
        <input
          className="p-2 rounded-md w-3/4 lg:w-1/2"
          type="text"
          placeholder="Pokemon name"
          name="pokemonName"
          value={pokemonName}
          onChange={handleChange}
        />
        <div className="flex flex-row gap-5">
          <select name="pokemonType" value={typeValue} onChange={handleSelect}>
            <option value="">All</option>
            {types.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="border-2 p-2 bg-slate-950 text-white uppercase font-bold"
            onClick={handlePage}
          >
            Search
          </button>
        </div>
      </div>
    </Form>
  );
};

export default FilterForm;

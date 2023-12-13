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
      console.log(typesList);
    };
    loadTypes();
  }, []);
  useEffect(() => {
    setPokemonName(nameInitial);
    setTypeValue(typeInitial);
  }, [nameInitial, typeInitial]);

  return (
    <Form className="flex flex-col">
      <h2>Search Filter</h2>
      <div>
        <input
          className="p-2 rounded-md"
          type="text"
          placeholder="Pokemon name"
          name="pokemonName"
          value={pokemonName}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="p-2 rounded-md w-1/2 "
          onClick={handlePage}
        >
          Search
        </button>
        <select name="pokemonType" value={typeValue} onChange={handleSelect}>
          <option value="">All</option>
          {types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
    </Form>
  );
};

export default FilterForm;

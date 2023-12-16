import { useContext, useState } from "react";
import { UserNameContext } from "../context/UserNameContext";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from ?? "/pokedex";

  const [name, setName] = useState("");

  const { saveUserName, setCurrentPage } = useContext(UserNameContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    saveUserName(name);
    navigate(from);
  };
  const handlePage = () => {
    setCurrentPage(0);
  };
  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-between "
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/d4/74/7b/d4747bc5cd2fed9b4a699ef2a97bb2ca.png')",
        }}
      >
        <img
          className="w-3/4 md:w-1/4 my-10 "
          src="https://pokedex-vuejs-lucasdev.vercel.app/img/logo.17f7b40c.svg"
          alt="pokedex"
        />
        <div className="rounded flex flex-col  items-center  bg-transparent my-20 gap-5 mx-10 ">
          <h2 className="text-4xl  text-white font-bold">Welcome Trainer</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center gap-5">
              <label
                className="text-3xl text-white font-bold"
                htmlFor="username"
              >
                Write your name before start
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-black rounded-sm p-2"
                id="username"
                placeholder="Your Name"
              />
            </div>
            <div className="flex items-center my-5 justify-center">
              <button
                type="submit"
                className="bg-white p-2 font-bold"
                onClick={handlePage}
              >
                Start Adventure!
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import { UserNameProvider } from "./context/UserNameContext";
// import Layout from "./layouts/Layout";
// import ProtectedRoute from "./layouts/ProtectedRoute";
// import Home from "./components/Home";
// import Pokedex from "./components/Pokedex";
// import PokemonCard from "./components/PokemonCard";
import { router } from "./route";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  //   <React.StrictMode>
  //     <UserNameProvider>
  //       <Routes>
  //         <Route path="/" element={<Layout />}>
  //           <Route index element={<Home />} />
  //         </Route>
  //         <Route path="/pokedex" element={<ProtectedRoute />}>
  //           <Route index element={<Pokedex />} />
  //           <Route path=":pokemonId" element={<PokemonCard />} />
  //         </Route>
  //       </Routes>
  //     </UserNameProvider>
  //   </React.StrictMode>
  // </BrowserRouter>

  <React.StrictMode>
    <UserNameProvider>
      <RouterProvider router={router} />
    </UserNameProvider>
  </React.StrictMode>
);

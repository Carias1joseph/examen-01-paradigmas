import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-8">
        Bienvenido a GameStore
      </h1>

      <div className="flex justify-center gap-6 mb-8 flex-wrap">

        <div className="border rounded-lg p-8 w-60 shadow-2xl">
          <p className=" text-gray-500 mb-1">Juegos Disponibles</p>
          <p className="text-4xl font-bold text-red-600">120</p>
        </div>

        <div className="border rounded-lg p-8 w-60 shadow-2xl">
          <p className="text-sm text-gray-500 mb-1">Ofertas</p>
          <p className="text-4xl font-bold text-red-600">35</p>
        </div>

      </div>

      <Link to="/catalog"
        className="bg-red-600 text-white px-4 py-3 rounded hover:bg-red-700">
        Ver catálogo
      </Link >
    </div>
  );
};

export default HomePage;

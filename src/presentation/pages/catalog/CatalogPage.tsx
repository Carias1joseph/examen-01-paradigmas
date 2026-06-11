import { useState } from "react";
import { Computer, Diamond, Play, Volleyball } from "lucide-react";
import GameCard from "../../components/games/GameCard";

export const CatalogPage = () => {
  const [carrito, setCarrito] = useState(0);
  const [total, setTotal] = useState(0);
  const [mostrar, mostrarCarrito] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-600 text-center mb-6">
        Catálogo de Juegos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GameCard title="Mario Bros" genre="Aventura"
          price={59.99} available={true}
          icon={<Play size={30} />}
        />

        <GameCard
          title="FIFA 26"
          genre="Deportes"
          price={49.99}
          available={true}
          icon={<span><Volleyball size={30}/></span>}
        />

        <GameCard
          title="Minecraft"
          genre="Sandbox"
          price={29.99}
          available={true}
          icon={<span><Diamond size={30}/></span>}
        />

        <GameCard
          title="Call of Duty"
          genre="Acción"
          price={69.99}
          available={false}
          icon={<span><Computer size={30}/></span>}
        />
      </div>

      <div className="flex m-3 gap-4 mb-4">
        <button
          onClick={() => {
            setCarrito(carrito + 1);
            setTotal(total + 59.99);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Agregar al carrito
        </button>

        <button
          onClick={() => {setCarrito(0); setTotal(0);
}}
          className="bg-red-600 text-white px-4 py-2 rounded">
        Vaciar carrito
        </button>

        <button
          onClick={() => mostrarCarrito(!mostrar)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          {mostrar ? "Ocultar Carrito" : "Ver carrito"} 
        </button>
      </div>

      {mostrar && (
        <div className="border p-7 rounded-3xl">
          <h2>Resumen del carrito</h2>
          <p>Juegos: {carrito}</p>
          <p>Total: ${total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
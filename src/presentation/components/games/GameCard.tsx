import GameBadge from "./GameBadge";

interface Props {
  title: string;
  genre: string;
  price: number;
  available: boolean;
  icon?: React.ReactNode;
}

export const GameCard = ({ title, genre, price, available, icon }: Props) => {
  return (

    <div className="bg-white rounded-lg shadow-md p-5">
      {icon && <div className="mb-2">{icon}</div>}
      <h2 className="font-bold text-gray-900">{title}</h2>
      <p className="text-gray-500 text-sm">{genre}</p>
      <p className="mt-1 text-gray-800">${price.toFixed(2)}</p>
      <div className="mt-2">
        {available ? (
          <GameBadge label="Disponible" color="bg-green-500" />
        ) : (
          <GameBadge label="Agotado" color="bg-gray-500" />

        )}
      </div>
    </div>
  );
};

export default GameCard;
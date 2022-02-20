import { Link, NavLink } from "remix";
import { FilmCharacter } from "~/api/films.api";

type CharachertListProps = {
  characters?: FilmCharacter[];
};

export default function CharactersList({ characters }: CharachertListProps) {
  return (
    <div className="flex-1 max-w-md">
      <h2 className="text-3xl font-semibold py-2">Characters</h2>
      <ul className="space-y-3 my-3">
        {characters?.map((character) => (
          <li key={character?.id}>
            <NavLink
              to={`characters/${character?.id}`}
              className={({ isActive }) =>
                `w-full hover:underline p-3 rounded border-2 border-white inline-block ${
                  isActive
                    ? "bg-slate-200 text-black font-bold border-2"
                    : "text-black"
                }`
              }
            >
              {character?.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

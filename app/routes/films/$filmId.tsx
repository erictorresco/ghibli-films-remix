import { LoaderFunction, MetaFunction, Outlet, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { Film, getFilmById } from "~/api/films.api";
import CharactersList from "~/components/CharactersList";
import FilmBanner from "~/components/FilmBanner";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.filmId, 'Expected param "filmId" not supplied');
  const film = await getFilmById(params.filmId);
  return film;
};

export const meta: MetaFunction = ({ data }) => {
  return { title: data.title };
};
export default function Film() {
  const film = useLoaderData<Film>();
  return (
    <div className="border-2 border-white rounded-lg overflow-hidden">
      <FilmBanner film={film} />
      <div className="p-5">
        <p className="">{film.description}</p>
        <div className="flex py-5 space-x-5">
          <CharactersList characters={film.characters} />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

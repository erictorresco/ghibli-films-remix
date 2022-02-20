import { Form, LoaderFunction, MetaFunction, useLoaderData, Link } from "remix";
import { Film, getFilms } from "~/api/films.api";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");

  return getFilms(title);
};

export const meta: MetaFunction = () => {
  return {
    title: "Films | Studio Ghibli",
    description: "List of Studio Ghibli's films",
  };
};

export default function FilmsIndex() {
  const films = useLoaderData<Film[]>();
  return (
    <div className="grid grid-cols-4 gap-5 p-6 border-2 border-white rounded-lg">
      {films.map((film) => (
        <Link
          to={film.id}
          key={film.id}
          title={film.title}
          className="hover:shadow-xl hover:scale-105 hover:font-semibold cursor-pointer"
          prefetch="intent"
        >
          <div className="font-sans">{film.title}</div>
          <img src={film.image} alt={film.title} />
        </Link>
      ))}
    </div>
  );
}

import { Link } from "remix";
import { Film } from "~/api/films.api";

type FilmBannerProps = {
  film: Film;
};

export default function FilmBanner({ film }: FilmBannerProps) {
  return (
    <div className="aspect-w-3 aspect-h-1">
      <img className="object-cover" src={film.movie_banner} alt={film.title} />
      <div className="flex flex-col justify-between">
        <div>
          <Link
            to="/films"
            className=" bg-black/25 text-white text-2xl px-3 py-2 hover:underline inline-block"
          >
            Go Back
          </Link>
        </div>
        <div>
          <h2 className="bg-black/25 px-5 py-2 text-6xl font-bold font-sans italic text-white inline-block">
            {film.title}
          </h2>
        </div>
      </div>
    </div>
  );
}

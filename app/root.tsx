import {
  Form,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import type { MetaFunction } from "remix";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#109ceb] text-white">
        <div className="max-w-7xl mx-auto my-5">
          <h2 className="text-5xl  font-mono font-thin uppercase text-center my-5">
            Studio Ghibli Films
          </h2>

          <Form reloadDocument method="get" action="/films" className="my-5">
            <label htmlFor="title" className="pr-3 font-black">
              <input
                type="text"
                name="title"
                placeholder="Search for a title..."
                className="border-2 border-white rounded-lg py-2 px-3"
              />
            </label>
            <button
              type="submit"
              className="bg-yellow-200 border-2 font-semibold text-white border-white px-3 py-2 rounded-lg hover:bg-amber-50"
            >
              {" "}
              Search
            </button>
          </Form>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

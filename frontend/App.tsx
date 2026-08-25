import React from "react";
import "./App.css";
import { Paths } from "./Paths";

interface SignProps
{
  readonly href: string;
  readonly label: string;
  readonly points: string;
};

const signs: SignProps[] = [
  {
    href: "/home",
    label: "Wonderland Trail",
    points: "789,353 1036,353 1276,357 1278,468 1037,473 787,472",
  },
  {
    href: "/route",
    label: "I Know My Route",
    points: "875,499 1037,494 1209,502 1208,544 1225,569 1208,593 1204,636 1042,630 884,637"
  },
  {
    href: "/build",
    label: "Help Me Build It",
    points: "882,659 1039,656 1210,663 1213,799 1038,789 878,801",
  },
  {
    href: "/permit",
    label: "Find Me a Permit",
    points: "873,812 1036,814 1199,829 1191,951 1094,950 1035,950 859,948",
  },
];

export function App(): React.ReactElement {
  return (
    <main className="wonderland-witch">
      <div className="wonderland-witch__artwork">
        <img
          src={Paths.images.homeBackground}
          alt="Wonderland Witch — plan your way around Mount Rainier on the Wonderland Trail"
        />

        <svg
          className="wonderland-witch__hotspots"
          viewBox="0 0 1402 1122"
          aria-label="Wonderland Witch navigation"
        >
          {signs.map((sign) => (
            <a
              key={sign.href}
              href={sign.href}
              aria-label={sign.label}
            >
              <polygon points={sign.points} />
            </a>
          ))}
        </svg>
      </div>
    </main>
  );
}
import React from "react";
import "./App.css";
import { Paths } from "./Paths";
import { ClickableImage, type ClickableImageProperties } from "./ClickableImage";
import { ClickableRegion } from "./ClickableRegion";

const trailMirrors: ClickableImageProperties = {
  path: Paths.images.trailMirrors,
  description: "Wonderland Witch — plan your way around Mount Rainier on the Wonderland Trail",
  ariaLabel: "Wonderland Witch navigation",
  width: 655,
  height: 527,
  regions: [
    ClickableRegion.createEllipse({
      label: "I Know My Route",
      targetUrl: "/",
      center: { x: 186, y: 267 },
      radius: { x: 52, y: 74 },
    }),
    ClickableRegion.createPolygon({
      label: "Help Me Build It",
      targetUrl: "/",
      points: [
        {
          "x": 281,
          "y": 205
        },
        {
          "x": 318,
          "y": 184
        },
        {
          "x": 355,
          "y": 204
        },
        {
          "x": 361,
          "y": 224
        },
        {
          "x": 361,
          "y": 311
        },
        {
          "x": 352,
          "y": 326
        },
        {
          "x": 318,
          "y": 343
        },
        {
          "x": 280,
          "y": 326
        },
        {
          "x": 273,
          "y": 311
        },
        {
          "x": 272,
          "y": 223
        },
      ],
    }),
    ClickableRegion.createEllipse({
      label: "Find My Circuit",
      targetUrl: "/",
      center: { x: 452, y: 267 },
      radius: { x: 49, y: 80 },
    }),
  ],
};

const trailSigns: ClickableImageProperties = {
  path: Paths.images.trailSigns,
  description: "Wonderland Witch — plan your way around Mount Rainier on the Wonderland Trail",
  ariaLabel: "Wonderland Witch navigation",
  width: 1402,
  height: 1122,
  regions: [
    ClickableRegion.createPolygon({
      targetUrl: "/",
      label: "Wonderland Trail",
      points: [[789, 353], [1036, 353], [1276, 357], [1278, 468], [1037, 473], [787, 472]],
    }),
    ClickableRegion.createPolygon({
      targetUrl: "/",
      label: "I Know My Route",
      points: [[875, 499], [1037, 494], [1209, 502], [1208, 544], [1225, 569], [1208, 593], [1204, 636], [1042, 630], [884, 637]],
    }),
    ClickableRegion.createPolygon({
      targetUrl: "/",
      label: "Help Me Build It",
      points: [[882, 659], [1039, 656], [1210, 663], [1213, 799], [1038, 789], [878, 801]],
    }),
    ClickableRegion.createPolygon({
      targetUrl: "/",
      label: "Find Me a Permit",
      points: [[873, 812], [1036, 814], [1199, 829], [1191, 951], [1094, 950], [1035, 950], [859, 948]],
    }),
  ],
}

export function App(): React.ReactElement
{
  return <>
    <div className="content">
      <ClickableImage {...trailMirrors}/>
    </div>
    <div className="content">
      <ClickableImage {...trailSigns}/>
    </div>
  </>;
}
import type React from "react";
import "./ClickableImage.css";
import type { ClickableRegion } from "./ClickableRegion";

export interface ClickableImageProperties
{
    readonly path: string;
    readonly description: string;
    readonly ariaLabel: string;
    readonly width: number;
    readonly height: number;
    readonly regions: ClickableRegion[];
}

export function ClickableImage(properties: ClickableImageProperties): React.ReactElement
{
    return (
        <div className="clickable-image">
            <img
                className="image"
                src={properties.path}
                alt={properties.description}
            />
            <svg
                className="clickable-regions"
                viewBox={`0 0 ${properties.width} ${properties.height}`}
                aria-label={properties.ariaLabel}
            >
                {properties.regions.map((region: ClickableRegion) => region.createElement())}
            </svg>
        </div>
    );
}
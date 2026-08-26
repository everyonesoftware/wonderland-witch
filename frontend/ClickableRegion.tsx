import type React from "react";
import { isArray, isNumber, isString, join, PreCondition } from "@everyonesoftware/common";

/**
 * Options that can be passed to all new {@link ClickableRegion}s.
 */
export interface ClickableRegionBaseOptions
{
    /**
     * The URL that the region will link to.
     */
    readonly targetUrl: string;
    /**
     * A label that describes the region.
     */
    readonly label: string;
}

/**
 * Options that can be used to create a new polygon-based {@link ClickableRegion}.
 */
export interface ClickableRegionPolygonOptions extends ClickableRegionBaseOptions
{
    /**
     * The points that make up the new polygon-based {@link ClickableRegion}.
     */
    readonly points: string | [number, number][] | { x: number, y: number }[];
}

/**
 * Options that can be used to create a new polygon-based {@link ClickableRegion}.
 */
export interface ClickableRegionEllipseOptions extends ClickableRegionBaseOptions
{
    /**
     * The center of the ellipse-based {@link ClickableRegion}.
     */
    readonly center: [number,number] | { x: number, y: number };
    /**
     * The horizontal and vertical radii of the ellipse-based {@link ClickableRegion}.
     */
    readonly radius: number | [number,number] | { x: number, y: number };
}

/**
 * A region within a {@link ClickableImage}.
 */
export class ClickableRegion
{
    public readonly targetUrl: string;
    public readonly label: string;
    /**
     * The {@link React.ReactElement} that defines the boundaries of this {@link ClickableRegion}.
     */
    private readonly elementFunction: () => React.ReactElement;

    private constructor(targetUrl: string, label: string, elementFunction: () => React.ReactElement)
    {
        PreCondition.assertNotEmpty(targetUrl, "targetUrl");
        PreCondition.assertNotEmpty(label, "label");
        PreCondition.assertNotUndefinedAndNotNull(elementFunction, "elementFunction");

        this.targetUrl = targetUrl;
        this.label = label;
        this.elementFunction = elementFunction;
    }

    public static createPolygon(options: ClickableRegionPolygonOptions): ClickableRegion
    {
        let pointsString: string;
        if (isString(options.points))
        {
            pointsString = options.points;
        }
        else
        {
            pointsString = join(" ", options.points.map((point: [number, number] | { x: number, y: number }) =>
            {
                return isArray(point) ? `${point[0]},${point[1]}` : `${point.x},${point.y}`;
            }));
        }
        return new ClickableRegion(options.targetUrl, options.label, () =>
            <a
                key={options.label}
                href={options.targetUrl}
                aria-label={options.label}
            >
                <polygon points={pointsString} />
            </a>
        );
    }

    public static createEllipse(options: ClickableRegionEllipseOptions): ClickableRegion
    {
        let cx: number;
        let cy: number;
        let rx: number;
        let ry: number;
        if (isArray(options.center))
        {
            cx = options.center[0];
            cy = options.center[1];
        }
        else
        {
            cx = options.center.x;
            cy = options.center.y;
        }

        if (isNumber(options.radius))
        {
            rx = options.radius;
            ry = options.radius;
        }
        else if (isArray(options.radius))
        {
            rx = options.radius[0];
            ry = options.radius[1];
        }
        else
        {
            rx = options.radius.x;
            ry = options.radius.y;
        }

        return new ClickableRegion(options.targetUrl, options.label, () =>
            <a
                key={options.label}
                href={options.targetUrl}
                aria-label={options.label}
            >
                <ellipse
                    cx={cx}
                    cy={cy}
                    rx={rx}
                    ry={ry}
                />
            </a>
        );
    }

    public createElement(): React.ReactElement
    {
        return this.elementFunction();
    }
}
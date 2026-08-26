import { join } from "@everyonesoftware/common";

function getImagePath(fileName: string): string
{
    return join("/", [".", fileName]);
}

export const Paths = {
    images: {
        trailSigns: getImagePath("trail-signs.jpeg"),
        trailMirrors: getImagePath("trail-mirrors.jpeg"),
    },
};
import { join } from "@everyonesoftware/common";

function getImagePath(fileName: string): string
{
    return join("/", [".", fileName]);
}

export const Paths = {
    images: {
        homeBackground: getImagePath("home-background.jpeg"),
    },
};
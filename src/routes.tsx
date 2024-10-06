import Main from "./layout/Main";
import Landing from "./page/landing";
import Map from "./page/map";

export default [
    {
        path: "/",
        element: <Main />,
        children: [
            {
                name: "Map",
                path: "/map",
                element: <Map />
            }
        ]
    }
];

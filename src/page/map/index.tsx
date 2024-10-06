import { useOutletContext } from "react-router-dom";
import styles from "./index.module.css";
import ArcGISMap, {
    Building,
    getBuildingIds,
    parseBuildingIds
} from "./ArcGISMap";
import { useState } from "react";
import { Button, Divider, Grid, TextField } from "@mui/material";

export default function () {
    const buildings: Building[] = [
        {
            name: "Rhythm Garden",
            cameraConfig: {
                position: {
                    spatialReference: { latestWkid: 3857, wkid: 102100 },
                    x: 12712761.708343705,
                    y: 2550921.6821695897,
                    z: 594.8709146445617
                },
                heading: 11.61164518523839,
                tilt: 59.852602216232796
            },
            buildingIds: [
                1108223218, 1108223277, 1108223429, 1108223573, 1108223589,
                1108223597, 1108223611, 1108223740, 1108223792, 1108223905,
                1108223930, 1108223955, 1108224018, 1108245422, 1108245481,
                1810092543, 1810094889
            ]
        },
        {
            name: "Queen Elizabeth School",
            cameraConfig: {
                position: {
                    spatialReference: { latestWkid: 3857, wkid: 102100 },
                    x: 12709301.89094751,
                    y: 2550121.8904088037,
                    z: 274.8530669985339
                },
                heading: 33.11870194048707,
                tilt: 55.88355086079985
            },
            buildingIds: [1108231303, 1108231684, 1108231747]
        }
    ];
    const [height] = useOutletContext() as number[];
    const [buildingIdList, setBuildingIdList] = useState<string>(
        buildings.flatMap((building) => building.buildingIds).join(",")
    );
    const [building, setBuilding] = useState<Building>();

    return (
        <>
            <div style={{ position: "relative" }}>
                <div
                    style={{
                        position: "absolute",
                        top: "24px",
                        right: "24px",
                        width: "320px",
                        backgroundColor: "white",
                        padding: "24px 24px 24px 24px"
                    }}
                >
                    {buildings.map((building, index) => (
                        <>
                            <Grid
                                container
                                spacing={2}
                                key={"building-" + index}
                            >
                                <Grid item xs={12} sm={12} md={12}>
                                    {building.name}
                                </Grid>
                                <Grid item xs={6} sm={6} md={6}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={() => {
                                            setBuilding(building);
                                        }}
                                    >
                                        Locate
                                    </Button>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6}>
                                    <Button fullWidth variant="contained">
                                        Details
                                    </Button>
                                </Grid>
                            </Grid>
                        </>
                    ))}
                </div>
            </div>
            <ArcGISMap
                height={height}
                buildingIdList={buildingIdList}
                selectedBuilding={building}
                onClick={(response) => {}}
            />
        </>
    );
}

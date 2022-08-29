import { Card, CardContent, Grid } from "@mui/material";
import Numpad from "./Numpad";
import Operations from "./Operations";

export default function Keypad(props){
    const {value, setValue} = props;
    return(
        <Card className="keypad" style={{
            backgroundColor: 'black',
        }}>
            <CardContent>
                <Grid container>
                    <Grid item xs={12} md={10}>
                        <Numpad {...props} />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Operations {...props} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
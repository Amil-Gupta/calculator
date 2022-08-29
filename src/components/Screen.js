import { Card, CardContent } from "@mui/material";
import Keypad from "./Keypad";

export default function Screen(props){
    const {display, setDisplay} = props;
    return (
        <Card className="screen" style={{
            backgroundColor: 'green'
        }}>
            <CardContent>
                {display}
            </CardContent>
        </Card>
    )
}
import { Grid, Button } from "@mui/material"
import { OPERATIONS } from "../constants"

export default function Numpad(props){
    const {value, setValue} = props

    const keys = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '00', '.']

    const handleClick = (digit)=>{
        setValue((value)=>{
            value = value + ''
            if(digit === '.'){
                const operations = OPERATIONS
                let lastOperator = -1
                for(let i=0; i<operations.length; i++){
                    let lastIndex = value.lastIndexOf(operations[i])
                    if(lastIndex > lastOperator){
                        lastOperator = lastIndex
                    }
                }
                if(value.lastIndexOf('.') > lastOperator){
                    return value
                }
                return (value + '.')
            }
            else if(value === '0' || value === 'Infinity' || value === 'NaN'){
                return (parseInt(digit) === 0) ? 0 : digit
            }
            else{
                return(value + "" + digit)
            }
        })
    }

    return(
        <Grid container className="numpad">
            {keys.map((digit)=>{
                return(
                    <Grid item xs={4} key={digit} className="numButtonItem">
                        <Button className="numButton" style={{
                            color: 'white',
                            backgroundColor: 'gray',
                            margin: '.2vw',
                            padding: '2vh 4vw',
                            fontSize: '3vw',
                            width: '3rem'
                        }}
                        onClick={()=>{handleClick(digit)}}
                        >
                            {digit}
                        </Button>
                    </Grid>
                )
            })}
        </Grid>
    )
}
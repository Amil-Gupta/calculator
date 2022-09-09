import { Button, Grid } from "@mui/material";
import { CLEAR, OPERATIONS } from "../constants";

export default function Operations(props){
    const {value, setValue} = props
    const operators = OPERATIONS;
    const handleDelete = ()=>{
        setValue((value)=>{
            value = value + ''
            if((value + '').length <= 1 || value === 'MathException'){
                return '0'
            }
            else{
                return(value.substring(0, value.length - 1));
            }
        })
    }

    const handleOperation = (operator)=>{
        setValue((value)=>{
            value = value + ''
            let lastChar = value[value.length - 1]
            if(operators.indexOf(lastChar) >= 0){
                return(value.substring(0, value.length - 1) + operator)
            }
            else{
                return(value + operator)
            }
        })
    }

    const handleEval = ()=>{
        setValue((value)=>{
            try{
                let res = eval(value)
                if(parseInt(res) != res){
                    return 'MathException'
                }
                return res
            }
            catch(error){
                console.log(error)
                return 'MathException'
            }
        })
    }

    return(
        <Grid container className='operators'>
            <Grid item xs={12}>
            <Button className="opButton"
            onClick={()=>{handleDelete()}}
            style={{
                color: 'white',
                backgroundColor: 'red',
                margin: '.2vw',
                padding: '2vh 4vw',
                fontSize: '3vw',
                width: '100%',
                height: '4.5rem',
                maxHeight: '6vh'
            }}>
                {CLEAR}
            </Button>
            </Grid>
            {
                operators.map((operator)=>(
                    <Grid item xs={6} md={12} key={operator}
                    style={{
                        textAlign: 'center'
                    }}
                    >
                        <Button className="opButton" style={{
                            color: 'white',
                            backgroundColor: 'gray',
                            margin: '.2vw',
                            padding: '2vh 4vw',
                            fontSize: '3vw',
                            width: '90%',
                            height: '4.5rem',
                            maxHeight: '8vh',
                        }}
                        onClick={()=>{
                            handleOperation(operator);
                        }}
                        >
                            {operator}
                        </Button>
                    </Grid>
                ))
            }
            <Grid item xs={12}>
                <Button className="opButton"
                style={{
                    color: 'white',
                    backgroundColor: 'gray',
                    margin: '.2vw',
                    padding: '2vh 4vw',
                    fontSize: '3vw',
                    width: '100%',
                    height: '4.5rem',
                    maxHeight: '8vh'
                }}
                onClick = {()=>{handleEval()}}
                >
                    =
                </Button>
            </Grid>
        </Grid>
    )
}
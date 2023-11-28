import { useEffect, useState } from "react";
import { UseProductArgs } from "../interfaces/interfaces";



export const useProduct = ({ onChange, product, value = 0 }: UseProductArgs ) => {
    
    const [counter, setCounter] = useState( value );

    const increaseBy = ( value: number ) =>{

        const newValue = Math.max( counter + value, 0 );
        setCounter( newValue );
    
        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        setCounter( value );
    }, [value])
    

    return {
        counter,
        increaseBy
    }
}
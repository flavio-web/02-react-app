import { useEffect, useRef, useState } from "react";
import { UseProductArgs } from "../interfaces/interfaces";



export const useProduct = ({ onChange, product, value = 0, initialValues }: UseProductArgs ) => {
    
    console.log(initialValues?.count);
    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    //const isMounted = useRef(false);
    const increaseBy = ( value: number ) =>{

        let newValue = Math.max( counter + value, 0 );
        if( initialValues?.maxCount ){
            newValue = Math.min( newValue, initialValues?.maxCount );
        }
        setCounter( newValue );
        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        setCounter( initialValues?.count || value );
    }, [ value, initialValues ]);

   /*  useEffect(() => {
        if( !isMounted.current ) return;
        setCounter( value );
    }, [ value ]); */
    
    /* useEffect(() => {
        isMounted.current = true;
    }, []); */

    const reset = () =>{
        setCounter( initialValues?.count || value );
    }
    
    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && initialValues?.maxCount === counter,
        
        increaseBy,
        reset
    }
}
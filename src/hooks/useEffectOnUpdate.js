import { useEffect, useRef } from "react";

const useEffectOnUpdate = (effectFunction, deps) => {

    const firstRender = useRef(true) // To prevent callback to run in first render

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            effectFunction();
        }
    }, deps)

}

export default useEffectOnUpdate
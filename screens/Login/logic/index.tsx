import { useState, useEffect, useCallback, useContext } from 'react';
/* import { useBetween } from 'use-between';
import { useDispatch } from 'react-redux'; */

// ----------- Sharabled State -----------
const useLogicStates = () => {
    const [example, setExample] = useState([]);
    const [loading, setLoading] = useState(true);

    return {
        example,
        setExample,
        loading,
        setLoading,
    };
};

// ----------- All Shared States -----------
/* export const useSharedState = () => useBetween(useLogicStates); */

//= ==============================================================================================
export function useInit() {
    const { example } = useSharedState();

    useEffect(() => {
        (async () => {})();
    }, [example]);
}

//= ==============================================================================================
export function useExample() {
    // const dispatch = useDispatch();
    // const { getViagem } = useContext(AuthContext);

    return useCallback(async () => {}, []); // Make sure to include any dependencies in the dependency array if needed
}

//= ==============================================================================================

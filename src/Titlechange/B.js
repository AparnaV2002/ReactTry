import {useEffect} from 'react';

function useDocTitle(count){
    useEffect(()=>{
        document.title=`clicked ${count} times`
    },[count])
}

export default useDocTitle
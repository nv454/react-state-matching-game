import {useEffect,useRef,useState} from 'react';


function useHover(){
const ref = useRef();
const [hovered,setHovered]=useState(false);

enter=()=>{
    setHovered(true);
}

leave=()=>{
    setHovered(false);
}

useEffect (()=>{

    const refCopy=ref;
    refCopy.current.addEventListener('mouseenter',enter())
    refCopy.current.addEventListener('mouseleave',leave())
    return(()=>{
        removeEventListener('mouseenter',enter());
        removeEventListener('mouseleave',leave());
    })
})



return [ref,hovered]
};

export default UseHover;
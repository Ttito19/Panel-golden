import React, { useState, createRef } from "react";

function useActivateItem(classNameElement){
    const refElementHide = createRef();

    const onPress = () => {
        const element = refElementHide.current;
        if(element.classList.contains(classNameElement)){
            element.classList.remove(classNameElement);
        }else{
            element.classList.add(classNameElement);
        }
    } 

    return {
        onPress,
        refElementHide
    }
}

export default useActivateItem;
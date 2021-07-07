import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
    if(isShowing==true){
        console.log("true");
    }else{
        console.log("false");

    }
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;

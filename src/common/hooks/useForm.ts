import { useCallback, useEffect, useRef, useState } from "react";

export const useForm = () => {
  const form = useRef<HTMLFormElement>();
  const [isValid, setIsValid] = useState(false);
  const formRef = useCallback((node) => (form.current = node), []);

  const handleSubmit = () => {
    if (checkValidity()) {
      console.log("W PYTE!!");
    } else {
      console.log("CHUJ");
    }
    // console.log(formRef);
  };

  const checkValidity = () => {
    console.log("cf");
    if (!form.current) return false;
    return form?.current?.checkValidity();
  };

  return { handleSubmit, formRef, isValid };
};

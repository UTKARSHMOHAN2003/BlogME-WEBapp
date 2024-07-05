import { useState, useEffect } from "react";
// custom hook
const useFetch1 = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont= new AbortController();//fetch abort when page switch

    setTimeout(() => {
      fetch(url,{signal:abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name==="AbortError"){
            console.log('fetch aborted');
          }else{
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return ()=>abortCont.abort();
  },[url]);

  return { data, isPending, error }; //useStateProperty return to home page or reuse in different page
};

export default useFetch1;

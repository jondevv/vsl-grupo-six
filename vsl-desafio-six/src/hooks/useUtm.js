import { useState, useEffect } from 'react';
import { initUTMs, buildUTMQueryString } from '../utils/utm';



export function useUTM() {

  //criando useState
  const [utms, setUtms] = useState({});

  //usando useEffect para capturar os utms
  useEffect(() => {
    const captured = initUTMs();
    setUtms(captured);
  }, []);


  //criando função para buildar o link com os utms
  const buildLink = (path) => {
    return `${path}${buildUTMQueryString(utms)}`;
  };

  //retornando o objeto utms e a função buildLink
  return { utms, buildLink };
}
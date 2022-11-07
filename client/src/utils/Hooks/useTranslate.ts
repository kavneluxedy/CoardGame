import { useEffect, useState } from "react";
import keyLangType from "../types/TkeyLangType";
import Trad from "../trad/Trad";


export default function useTranslate () {

  const [lang, setLang] = useState<keyLangType>("fr");
  const [trad, setTrad] = useState(Trad[lang]);
  
  useEffect(() => {
    setTrad(Trad[lang]);
  }, [lang])
  
  const translate = (text: string) => {
    return (trad[text] === undefined) ? "NF " + text + " NF" : trad[text];
  }

  return {setLang, translate}
}
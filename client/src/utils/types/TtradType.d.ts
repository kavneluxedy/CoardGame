import keyLangType from "./TKeyLangType";

type tradType = { [key in keyLangType]: { [key in string]: string } };

export default tradType;
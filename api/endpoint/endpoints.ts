import addUser from "./db/addUser";
import auth from "./db/auth";
import tokenAuth from "./db/tokenAuth";
import createCard from "./db/create";
import createDeck from "./db/createDeck";
import findCard from "./db/find";
import updateCard from "./db/update";
import deleteCard from "./db/delete";

const endpoints = {
  addUser: addUser,
  auth: auth,
  tokenAuth: tokenAuth,

  create: createCard,
  createDeck: createDeck,
  find: findCard,
  update: updateCard,
  remove: deleteCard,
}

export default endpoints;
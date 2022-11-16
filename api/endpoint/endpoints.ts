import addUser from "./db/addUser";
import auth from "./db/auth";
import tokenAuth from "./db/tokenAuth";
import createCard from "./db/create";
import findCard from "./db/find";
import updateCard from "./db/update";
import deleteCard from "./db/delete";

const endpoints = {
  addUser: addUser,
  auth: auth,
  tokenAuth: tokenAuth,

  create: createCard,
  find: findCard,
  update: updateCard,
  remove: deleteCard,
}

export default endpoints;
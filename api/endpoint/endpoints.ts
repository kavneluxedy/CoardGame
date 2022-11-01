import addUser from "./db/addUser";
import auth from "./db/auth";
import createCard from "./db/createCard";
import tokenAuth from "./db/tokenAuth";

const endpoints = {
  addUser: addUser,
  auth: auth,
  createCard: createCard,
  tokenAuth: tokenAuth,
}

export default endpoints;
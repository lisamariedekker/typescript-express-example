import {postGetAllAction} from "./controller/PostGetAllAction";
import {postGetByIdAction} from "./controller/PostGetByIdAction";
import {postSaveAction} from "./controller/PostSaveAction";
import { createUser, getUsers, getUser, updateUser, deleteUser } from "./controller/User";
import { getTurnipPrices, createTurnipPrice } from "./controller/TurnipPrice";

/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: "/posts",
    method: "get",
    action: postGetAllAction
  },
  {
    path: "/posts/:id",
    method: "get",
    action: postGetByIdAction
  },
  {
    path: "/posts",
    method: "post",
    action: postSaveAction
  },
  {
    path: "/users",
    method: "get",
    action: getUsers
  },
  {
    path: "/users/:id",
    method: "get",
    action: getUser
  },
  {
    path: "/users",
    method: "post",
    action: createUser
  },
  {
    path: "/users/:id",
    method: "put",
    action: updateUser
  },
  {
    path: "/users/:id",
    method: "delete",
    action: deleteUser
  },
  {
    path: "/prices",
    method: "get",
    action: getTurnipPrices,
  },
  {
    path: "/prices",
    method: "post",
    action: createTurnipPrice,
  }
];
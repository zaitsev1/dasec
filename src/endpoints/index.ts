import { Router } from "express";
import { cartController } from "./cart";

export function registerEndpoint(router: Router, context: any) {
  router.get("/", (req, res) => res.send("Hello, World!"));
  cartController(router, context);
}
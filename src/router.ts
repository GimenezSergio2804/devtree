import { Router } from "express";

const router = Router();

/** Autenticacion y Registro  **/
router.post("/auth/register", (req, res) => {
  console.log("Desde Register");
});

export default router;

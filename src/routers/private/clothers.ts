import { HTTP_ERRORS } from "../../models/model";
import createHttpError from "http-errors";
import { Clothers } from "../../database/dbClothes";
import { Application, NextFunction, Request, Response } from "express";

export = (app: Application) => {
  app.get(
    "/private/clothers",
    async (req: Request, res: Response, next: NextFunction) => {
      let id_clother = <unknown>req.query.id;

      await Clothers.getClothers(String(id_clother))
        .then((roupas) => {
          res.json({
            message: "Roupas/Cabelos recuperadas com sucess",
            roupas: roupas,
          });
        })
        .catch((error) => {
          next(createHttpError(HTTP_ERRORS.VALIDACAO_DE_DADOS, error));
        });
    }
  );

  app.get(
    "/private/clothersById/:id",
    async (req: Request, res: Response, next: NextFunction) => {
      let id_clother = req.params.id;

      await Clothers.getClothersById(id_clother)
        .then((roupas) => {
          res.json({
            message: "Roupa/Cabelo recuperada com sucesso",
            tasks: roupas,
          });
        })
        .catch((error) => {
          next(createHttpError(HTTP_ERRORS.VALIDACAO_DE_DADOS, error));
        });
    }
  );

  app.put(
    "/private/updateClothers/:id",
    async (req: Request, res: Response, next: NextFunction) => {
      const id_clother = req.params.id;
      const newStatus = req.body.newStatus;

      await Clothers.updateClothers(id_clother, newStatus)
        .then((result) => {
          if (result) {
            res.json({ message: "Status atualizado com sucesso" });
          } else {
            res.status(404).json({ message: "Roupa/Cabelo não encontrado" });
          }
        })
        .catch((error) => {
          next(createHttpError(HTTP_ERRORS.ERRO_INTERNO, error));
        });
    }
  );

  app.delete(
    "/private/deleteClothers/:id",
    async (req: Request, res: Response, next: NextFunction) => {
      const id_clother = req.params.id;

      await Clothers.deleteClothers(id_clother)
        .then((result) => {
          if (result) {
            res.json({ message: "Roupa/Cabelo deletado com sucesso" });
          } else {
            res.status(404).json({ message: "Roupa/Cabelo não encontrado" });
          }
        })
        .catch((error) => {
          next(createHttpError(HTTP_ERRORS.ERRO_INTERNO, error));
        });
    }
  );
};

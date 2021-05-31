import { NextFunction, Request, Response } from "express";
import { Page } from "../../../official-generic-layout/classes/PageController";

export class ConfigurationPipeline extends Page
{
    constructor()
    {
        super("<i class='fa fa-plus' aria-hidden='true'></i> New Job", "/configuration/pipeline", 'configuration/pipeline');
    }

    public async RouteFunction(req: Request, res: Response, next: NextFunction)
    {
        return res.send("Okay!");
    }
}

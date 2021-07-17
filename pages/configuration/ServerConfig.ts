import { NextFunction, Request, Response } from "express";
import { ConfigurationBasePage } from "../../../official-configuaration-page/classes/ConfigurationPage";

export class ConfigurationServer extends ConfigurationBasePage
{
    constructor()
    {
        super("Server Configuration", "/configuration/server", 'configuration/server');
        this.SetDescription("Configure how the server operates.");
    }

    public async RouteFunction(req: Request, res: Response, next: NextFunction)
    {
        return res.send("Okay!");
    }
}

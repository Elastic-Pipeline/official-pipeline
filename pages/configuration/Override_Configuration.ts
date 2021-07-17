import { NextFunction, Request, Response } from "express";
import path from "path";
import { app } from "../../../../API/internal/statics";
import { ConfigurationPage } from "../../../official-configuaration-page/pages/ConfigurationIndex";

export async function OverrideConfigurationFunc(req: Request, res: Response, next: NextFunction) : Promise<any>
{
    app.set('views', path.resolve(__dirname, "../../")); // Hijack the application views.
    res.render('views/pages/Configurations/configurationIndex.ejs', { subPages: ConfigurationPage.GetSubPages() });
}

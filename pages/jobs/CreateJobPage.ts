
import { NextFunction, Request, Response } from "express";
import { Page } from "../../../official-generic-layout/classes/PageController";

export class CreateJobPage extends Page
{
    constructor()
    {
        super("<i class='fa fa-plus' aria-hidden='true'></i> New Job", "/job/create", 'create_job');
    }

    public async RouteFunction(req: Request, res: Response, next: NextFunction)
    {
        console.log(this);
        return res.send("Okay!");
    }
}


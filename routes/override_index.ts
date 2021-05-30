import { Route, ROUTE_FIRST } from "../../../API/Routing/Routing";

export class OverrideIndexPipelineRoute extends Route
{
    constructor()
    {
        super("/");

        this.Get("", async (req, res, next) => 
        {
            res.render('views/index');
        }, "home", ROUTE_FIRST);
    }
}
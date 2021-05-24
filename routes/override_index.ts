import { RouteManager } from "../../../API/internal/RouteManager";
import { Route, ROUTE_FIRST } from "../../../API/Routing";

export class OverrideIndexPipelineRoute extends Route
{
    constructor()
    {
        super("/");

        this.Get("", (req, res, next) => 
        {
            return res.render('views/index');
        }, "home", ROUTE_FIRST);
    }
}
import { Route } from "../../../API/Routing";

export class OverrideIndexPipelineRoute extends Route
{
    constructor()
    {
        super("/");

        this.Get("", (req, res, next) => 
        {
            res.render('views\\index');
        }, "home");
    }
}
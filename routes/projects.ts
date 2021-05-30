import { Route, RouteType } from "../../../API/Routing/Routing";

export class ProjectRoute extends Route
{
    constructor()
    {
        super('projects');

        this.Get(':projectName', async (req, res, next) => 
        {
            res.status(200).send([req.params.projectName].join('|'));
        });

        this.CustomRoute(RouteType.GET | RouteType.POST, ':projectName/build', async (req, res, next) => 
        {
            res.status(200).send([req.params.projectName].join('|'));
        });
        
        this.Get(':projectName/configuration', async (req, res, next) => 
        {
            res.status(200).send([req.params.projectName].join('|'));
        });

        this.Get(':projectName/logs/:logID', async (req, res, next) => 
        {
            res.status(200).send([req.params.projectName, req.params.logID].join('|'));
        });
    }
}
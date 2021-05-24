import { Route, RouteType } from "../../../API/Routing";

export class ProjectRoute extends Route
{
    constructor()
    {
        super('projects');

        this.Get(':projectName', (req, res, next) => 
        {
            return res.status(200).send([req.params.projectName].join('|'));
        });

        this.CustomRoute(RouteType.GET | RouteType.POST, ':projectName/build', (req, res, next) => 
        {
            return res.status(200).send([req.params.projectName].join('|'));
        });
        
        this.Get(':projectName/configuration', (req, res, next) => 
        {
            return res.status(200).send([req.params.projectName].join('|'));
        });

        this.Get(':projectName/logs/:logID', (req, res, next) => 
        {
            return res.status(200).send([req.params.projectName, req.params.logID].join('|'));
        });
    }
}
import { TableFactory } from "../../../API/RenderBits/TableFactory";
import { Route, ROUTE_FIRST } from "../../../API/Routing/Routing";

export class OverrideIndexPipelineRoute extends Route
{
    constructor()
    {
        super("/");

        this.Get("", async (req, res, next) =>
        {
            const projectsTable = new TableFactory();
            projectsTable.SetHeader(['', 'Name', 'Last Successful', 'Last Failed', '']);
            projectsTable.AddRow(
                '<span class="badge bg-success rounded-pill">Successful</span>',
                'Good Job',
                '11h 30m <a href="#">#1</a>',
                'Never',
                '<a class="btn btn-sm btn-primary" href="#"><i class="fa fa-cogs" aria-hidden="true"></i></a>'
            );
            projectsTable.AddRow(
                '<span class="badge bg-warning rounded-pill">Unstable</span>',
                'Unstable Job',
                '5m <a href="#">#2</a>',
                '5h 00m <a href="#">#1</a>',
                '<a class="btn btn-sm btn-primary" href="#"><i class="fa fa-cogs" aria-hidden="true"></i></a>'
            );
            projectsTable.AddRow(
                '<span class="badge bg-danger rounded-pill">Failed</span>',
                'Bad Job',
                'Never',
                '2h 30m <a href="#">#4</a>',
                '<a class="btn btn-sm btn-primary" href="#"><i class="fa fa-cogs" aria-hidden="true"></i></a>'
            );
            projectsTable.SetTableClass("table");
            res.render('views/index', { projectsTable: projectsTable.Display() });
        }, ["home", 'dashboard'], ROUTE_FIRST);
    }
}
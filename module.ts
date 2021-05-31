import { AttachmentAppIntegration, Module, ModuleManager } from "../../API/Modules/Module";
import fs from "fs";
import path from "path";
import { ProjectRoute } from "./routes/projects";
import { OverrideIndexPipelineRoute } from "./routes/override_index";
import { PageController } from "../official-generic-layout/classes/PageController"
import { NavigationController } from "./classes/PageControllers/NavigationController";
import { CreateJobPage } from "./pages/jobs/CreateJobPage";
import { ConfigurationPipeline } from "./pages/configuration/ConfigurePipeline";
import { ConfigurationPage } from "../official-configuaration-page/pages/ConfigurationPage";

class PipelineModule extends Module
{
    constructor()
    {
        super("Official Pipeline", fs.readFileSync(path.resolve(__dirname, "./version.txt")).toString("utf-8"));

        this.RegisterAppIntegration((_app) => {
            // Get the top pages, that we can use.
            _app.locals.sidePages = PageController.GetPages();
            console.log("sidePages?", _app.locals.sidePages);
            _app.locals.navigationPages = NavigationController.GetPages();
        }, AttachmentAppIntegration.PRE);

        PageController.RegisterPage(new CreateJobPage(), 0);
        ConfigurationPage.AddSubPage(new ConfigurationPipeline());

        this.RegisterRoute(new OverrideIndexPipelineRoute());
        this.RegisterRoute(new ProjectRoute());
    }
}
ModuleManager.RegisterModule(new PipelineModule());
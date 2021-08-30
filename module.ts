import { AttachmentAppIntegration, Module, ModuleManager } from "../../API/Modules/Module";
import fs from "fs";
import path from "path";
import { ProjectRoute } from "./routes/projects";
import { OverrideIndexPipelineRoute } from "./routes/override_index";
import { NavigationController } from "./classes/PageControllers/NavigationController";
import { CreateJobPage } from "./pages/jobs/CreateJobPage";
import { PageController } from "../official-generic-layout/classes/PageController"
import { ConfigurationPage } from "../official-configuration-page/pages/ConfigurationIndex";
import { OverrideConfigurationFunc } from "./pages/configuration/Override_Configuration";

class PipelineModule extends Module
{
    constructor()
    {
        super("Official Pipeline", fs.readFileSync(path.resolve(__dirname, "./version.txt")).toString("utf-8"));

        this.RegisterAppIntegration((_app) => {
            // Get the top pages, that we can use.
            _app.locals.sidePages = PageController.GetPages();
            _app.locals.navigationPages = NavigationController.GetPages();
        }, AttachmentAppIntegration.PRE);

        PageController.RegisterPage(new CreateJobPage(), 0);
        ConfigurationPage.func = OverrideConfigurationFunc;

        this.RegisterRoute(new OverrideIndexPipelineRoute());
        this.RegisterRoute(new ProjectRoute());
    }
}
ModuleManager.RegisterModule(new PipelineModule());
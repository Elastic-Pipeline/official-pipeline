import { AttachmentAppIntegration, Module, ModuleManager } from "../../API/Modules/Module";
import fs from "fs";
import path from "path";
import { ProjectRoute } from "./routes/projects";
import { OverrideIndexPipelineRoute } from "./routes/override_index";

class PipelineModule extends Module
{
    constructor()
    {
        super("Official Pipeline", fs.readFileSync(path.resolve(__dirname, "./version.txt")).toString("utf-8"));

        this.RegisterRoute(new OverrideIndexPipelineRoute());
        this.RegisterRoute(new ProjectRoute());
    }
}
ModuleManager.RegisterModule(new PipelineModule());
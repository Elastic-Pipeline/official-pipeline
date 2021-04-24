import { Module, ModuleManager } from "../../API/Module";
import fs from "fs";
import path from "path";
import { OverrideIndexPipelineRoute } from "./views/override_index";

class PipelineModule extends Module
{
    constructor()
    {
        super("Pipeline Module", fs.readFileSync(path.resolve(__dirname, "./version.txt")).toString("utf-8"));
        
        this.RegisterRoute(new OverrideIndexPipelineRoute());
    }
}
ModuleManager.RegisterModule(new PipelineModule());
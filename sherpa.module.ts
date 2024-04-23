import { CreateModuleInterface, SherpaJS } from "sherpa-core";

export type Context = {
    [key: string]: string | number | boolean
}

export default SherpaJS.New.module({
    name: "static-flags",
    interface: CreateModuleInterface<Context>
});


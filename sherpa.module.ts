import { SherpaJS } from "sherpa-core";

export default SherpaJS.New.module({
    name: "static-flags",
});


export type ContextSchema = {
    [key: string]: string | number | boolean
}

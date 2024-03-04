import { NewModule } from "sherpa-core";

export default NewModule({
    version: 1,
    name: "static-flags",
});

export type SHERPA_PROPERTIES = {
    [key: string]: string | number | boolean
}

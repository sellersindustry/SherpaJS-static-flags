import { SherpaJS } from "sherpa-core";
import { Context } from "./sherpa.module";

export default SherpaJS.New.server<Context>({
    context: {
        test: true,
        string: "hello world",
        food: 124.3
    }
});

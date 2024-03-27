import { SherpaJS } from "sherpa-core";

export default SherpaJS.New.server({
    context: {
        test: true,
        string: "hello world",
        food: 124.3
    }
});

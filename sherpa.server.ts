import { NewServer } from "sherpa-core";

export default NewServer({
    version: 1,
    app: {
        module: ".",
        properties: {
            exampleProperty: "hello world"
        }
    }
});

import { Response, Request, Environment } from "sherpa-core";


export function GET(req:Request, env:Environment) {
    let key   = req.params["key"];
    let props = env.GetProperties();
    if (key in props) {
        return Response(props[key]);
    } else {
        return Response("", { status: 404 });
    }
}

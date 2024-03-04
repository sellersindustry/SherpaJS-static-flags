import { Response, Request, Environment } from "sherpa-core";


export function GET(_:Request, env:Environment) {
    return Response(env.GetProperties());
}

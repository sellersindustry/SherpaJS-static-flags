# SherpaJS Static Flags
![NPM Version](https://img.shields.io/npm/v/sherpajs-static-flags)

> Create static flags of booleans, strings, or numbers for [SherpaJS](https://github.com/sellersindustry/SherpaJS) modular microservice platform.


## Features
- ✅ [SherpaJS](https://github.com/sellersindustry/SherpaJS) Module, an Agnostic and Modular Serverless Platform
- ✅ Expose static flags like booleans, strings, and numbers
- ✅ Endpoint to expose all flags or singular flag

## Installation
```
npm install sherpajs-static-flags
```

## Example Usage
```typescript
// sherpa.server.ts
import { NewServer } from "sherpa-core";

export default NewServer({
    version: 1,
    app: {
        module: "sherpajs-static-flags",
        properties: {
            example: "hello world",
            test: 2
            foo: false
        }
    }
});
```

**Endpoint `/`**
```json
{
    "example": "hello world",
    "test": 2
    "foo": false
}
```

**Endpoint `/example`**
```json
hello world
```

**Endpoint `/test`**
```json
2
```

**Endpoint `/test`**
```json
false
```
# links-api

Install

```
npm i tirij-api
```

Example

Free use

```js
import { LinkService } from "tirij-api"

const service = new LinkService()
await service.createFree(longUrl);

```

Basic Auth use

```js
import { LinkService } from "tirij-api"

const service = new LinkService({}, { username, password })
await service.create({
  longUrl: longUrl,
  expireType: expireType,
  expireAt: expireAt,
  clickCount:{
    max: max,
    count: count
  },
});

```

Create Qr

```js
import { LinkService } from "tirij-api"

const service = new LinkService({}, { username, password })
await service.createQr({
  slug: slug,
  _id: _id,
  type: "short" || "long",
});

```
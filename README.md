# tirij-api

Install

```
npm i tirij-api
```

Example

Free use

Links created in free use 7-day type and qr <strong>cannot be created</strong>.

```js
import { LinkService } from "tirij-api"

const service = new LinkService()
await service.createFree(longUrl);

```

Basic Auth use

|Feild     |Type                       |Description                  |
|----------|---------------------------|-----------------------------|
| username |string                     | Api public key              |
| password |string                     | Api secret key              |
| slug     |string                     | Store slug                  |
| expireType  |string ("never" or "date", or "count") | Expire type                   |
| expireAt     |string ( "Date(1650611871048)" or "Date(2022-04-22T07:08:34.090Z)" or "2022-04-22T07:08:34.090Z") | Expire date                   |
| clickCount  |{ max: number, count: number }             | Click Count|

You can shorten any type of link you want through a store belonging to your account.

```js
import { LinkService } from "tirij-api"

const service = new LinkService({}, { username, password })
await service.create(slug, {
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

|Feild     |Type                       |Description                  |
|----------|---------------------------|-----------------------------|
| username |string                     | Api public key              |
| password |string                     | Api secret key              |
| slug     |string                     | Store slug                  |
| _id      |string                     | Link id                     |
| type     |string ("short" or "long") | Link type                   |
| options  |ILinkQrOptions             | qr-code-styling-node-options|

While creating qr, [qr-code-styling-node](https://www.npmjs.com/package/qr-code-styling-node) package was used. You can forward all qr-code-styling-node settings from options.

```js

import { LinkService } from "tirij-api"

const service = new LinkService({}, { username, password })
const result = await service.createQr(slug, _id, "short" || "long", { type: "svg"});

require("fs").writeFile(`${result.data._id}.svg`, result.data.base64, 'base64', function(err) {
  console.log(err);
});

```
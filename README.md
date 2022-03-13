# links-api

Install

```
npm i links-api
```

Example

Free use

```js
LinkService.create("https://recepozen.com");
```

Account use

```js
new LinkService().login("recep@bordo.io", "123456").then((linkService) => {
  linkService.create("store-1", {
    slug: "store-1",
    longUrl: "https://recepozen.com",
    expireType: EExpireType.NEVER,
  });
});
```
# links-api

Install

```
npm i links-api
```

Example

```js
new LinkService().login('recep@bordo.io', '123456').then(linkService => {
  linkService.create({
    longUrl: 'https://recepozen.com',
    expireType: EExpireType.NEVER
  })
})
```
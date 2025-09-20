# Simple Image Proxy

Not widely tested. 建议自建。

## 使用方法

/api?url=${href_ue}

## 示例

https://xizeyoupan-simple-imag-61.deno.dev/api?url=https://rsshub.app/logo.png

## 部署

### Deno Deploy

fork本项目后新建一个[project](https://dash.deno.com/new_project)。`Entrypoint`选`deno.js`。

### Docker

`docker run -d --name simple-image-proxy -p 3000:3000 --restart=unless-stopped intemd/simple-image-proxy:latest`

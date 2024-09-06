# cloudflare_translate

## 接口名称

### 1) 请求地址

>https://translateapi.011102.xyz/?text=此处替换成需要翻译的文本&source_language=zh&target_language=en&secret=123456

### 2) 调用方式：HTTP get

### 3) 接口描述：

* 这是一个利用cloudflare的workers搭建一个翻译的api及简单的网页。

* 翻译用到的api地址为:https://translateapi.011102.xyz

* 提交的参数包括翻译文本、原始语言、目标语言、api密钥等，workers中设置允许跨域，解决了直接用网页调用api最终出现问题的情况。

* 您可以尝试访问以下网址进行体验：https://translate.011102.xyz

* 如果您想要自行配置Cloudflare则可以将index.js传入workers下，并将app.js和index.html放入pages中。(最新修改写成一个index.html中去，单文件即可使用。)

* 注意：由于防火墙政策，workers.dev在大陆地区无法访问，您需要拥有一个个人域名并绑定到workers或者您也可以请求如下api接口

* 本站已设置允许跨域，您可以随意调用！

### 4) 请求参数:

#### GET参数:
|字段名称       |字段说明         |类型            |必填            |备注     |
| -------------|:--------------:|:--------------:|:--------------:| ------:|
|text|需要翻译的文本信息|string|Y|缺少则内部服务器错误|
|source_language|等待翻译的文本的语言（如中文、英文等）|string|Y|缺少则内部服务器错误|
|target_language|翻译成的文本的语言（如中文、英文等）|string|Y|缺少则内部服务器错误|
|secret|密钥填入123456|string|Y|缺少则会显示无权访问|



### 5) 请求返回结果:

```
{
    "code": 0,
    "msg": "ok",
    "text": "Replace the text that needs translation."
}
```


### 6) 请求返回结果参数说明:
|字段名称       |字段说明         |类型            |必填            |备注     |
| -------------|:--------------:|:--------------:|:--------------:| ------:|
|code|这个不用管，用于返回服务器的相关代码，调试使用|string|Y|-|
|msg|返回成功与否，与code字段结合来看|string|Y|-|
|text|翻译的结果文本|string|Y|-|


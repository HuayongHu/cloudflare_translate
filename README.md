# cloudflare_translate
这是一个利用cloudflare的workers搭建一个翻译的api及简单的网页。
翻译用到的api地址为:https://translateapi.011102.xyz
提交的参数包括翻译文本、原始语言、目标语言、api密钥等，workers中设置允许跨域，解决了直接用网页调用api最终出现问题的情况。
您可以尝试访问以下网址进行体验：https://translate.011102.xyz
如果您想要自行配置Cloudflare则可以将index.js传入workers下，并将app.js和index.html放入pages中。
（注意：由于防火墙政策，workers.dev在大陆地区无法访问，您需要拥有一个个人域名并绑定到workers），或者您也可以请求如下地址进行访问：
https://translateapi.011102.xyz/?text=此处中文替换成您需要翻译的文字&source_language=zh&target_language=en&secret=123456

本站已设置允许跨域，您可以随意调用！

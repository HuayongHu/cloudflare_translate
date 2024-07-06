const SECRET_PASS = "123456";  
// 设置CORS头部  
const corsHeaders = {  
  'Access-Control-Allow-Origin': '*', // 或者替换为特定的域名，如 'https://yourfrontend.com'  
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',  
  'Access-Control-Allow-Headers': 'Content-Type',  
  'Access-Control-Max-Age': '86400'  
};  
  
export default {  
  async fetch(request, env) {  
    const urlStr = request.url;  
    const urlObj = new URL(urlStr);  
    let text = urlObj.searchParams.get('text');  
    let source_language = urlObj.searchParams.get('source_language');  
    let target_language = urlObj.searchParams.get('target_language');  
    let secret = urlObj.searchParams.get('secret');  
  
    // 检查secret  
    if (secret !== SECRET_PASS) {  
      // 返回包含CORS头部的错误响应  
      return new Response(JSON.stringify({ code: 1, msg: "无权访问", text, source_language, target_language: target_language, secret }), {  
        status: 401,  
        headers: {  
          ...corsHeaders,  
          'Content-Type': 'application/json'  
        }  
      });  
    }  
  
    const inputs = {  
      text,  
      source_lang: source_language,  
      target_lang: target_language,  
    };  
  
    try {  
      const response = await env.AI.run('@cf/meta/m2m100-1.2b', inputs);  
  
      // 检查翻译结果是否包含错误  
      if (response.translated_text.indexOf('ERROR') === 0) {  
        // 返回包含CORS头部的错误响应  
        return new Response(JSON.stringify({ code: 2, msg: "翻译错误", text: response.translated_text }), {  
          headers: {  
            ...corsHeaders,  
            'Content-Type': 'application/json'  
          }  
        });  
      }  
  
      // 返回包含CORS头部的成功响应  
      return new Response(JSON.stringify({ code: 0, msg: "ok", text: response.translated_text }), {  
        headers: {  
          ...corsHeaders,  
          'Content-Type': 'application/json'  
        }  
      });  
    } catch (error) {  
      // 处理任何在翻译过程中发生的错误  
      return new Response(JSON.stringify({ code: 3, msg: "内部服务器错误", error: error.toString() }), {  
        status: 500,  
        headers: {  
          ...corsHeaders,  
          'Content-Type': 'application/json'  
        }  
      });  
    }  
  }  
};

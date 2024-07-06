async function translateText() {  
    const text = document.getElementById('text').value;  
    const sourceLanguage = document.getElementById('source_language').value;  
    const targetLanguage = document.getElementById('target_language').value;  
    const secret = '123456'; // 这里应该是你的秘钥，但最好不要在前端硬编码  
  
    // 构建请求 URL  
    const url = `https://translateapi.011102.xyz/?text=${encodeURIComponent(text)}&source_language=${sourceLanguage}&target_language=${targetLanguage}&secret=${secret}`;  
    // 发送请求  
    try {  
        const response = await fetch(url);  
        if (!response.ok) {  
            throw new Error('Network response was not ok');  
        }  
        const data = await response.json();  
        // 显示结果  
        document.getElementById('result').textContent = `翻译结果: ${data.text}`;  
        // 可以根据 data.code 来处理不同的响应情况  
        if (data.code !== 0) {  
            alert(`错误: ${data.msg}`);  
        }  
    } catch (error) {  
        console.error('Error:', error);  
        document.getElementById('result').textContent = '翻译失败';  
    }  
}

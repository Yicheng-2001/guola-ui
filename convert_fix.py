import os
import re

files = {
    'Login.vue': '过啦登录页.html',
    'BuyPoints.vue': '过啦购买积分页.html',
    'Workbench.vue': '过啦视频生成界面_new_logo.html',
    'PaySuccess.vue': '过啦支付成功页.html'
}

route_map = {
    '过啦登录页.html': '/',
    '过啦购买积分页.html': '/buy-points',
    '过啦视频生成界面_new_logo.html': '/workbench',
    '过啦支付成功页.html': '/pay-success'
}

src_dir = '/Users/guolintao/Desktop/GuolaYa过啦_副本5'
vue_dir = '/Users/guolintao/Desktop/GuolaYa_Vue/src/views'
os.makedirs(vue_dir, exist_ok=True)

for vue_name, html_name in files.items():
    with open(os.path.join(src_dir, html_name), 'r', encoding='utf-8') as f:
        content = f.read()
    
    body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL | re.IGNORECASE)
    body_attrs_match = re.search(r'<body([^>]*)>', content, re.IGNORECASE)
    body_attrs = body_attrs_match.group(1) if body_attrs_match else ""
    
    if not body_match: continue
    body_content = body_match.group(1)
    
    script_match = re.search(r'<script>(.*?)</script>', body_content, re.DOTALL | re.IGNORECASE)
    script_content = ""
    if script_match:
        script_content = script_match.group(1)
        body_content = body_content.replace(script_match.group(0), '')
        
    style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL | re.IGNORECASE)
    style_content = style_match.group(1) if style_match else ""
    
    wrapper_class = ""
    class_match = re.search(r'class="([^"]+)"', body_attrs)
    if class_match:
        wrapper_class = class_match.group(1)
        
    for old_href, new_route in route_map.items():
        body_content = body_content.replace(f"window.location.href='{old_href}'", f"$router.push('{new_route}')")
        body_content = body_content.replace(f"window.location.href = '{old_href}'", f"$router.push('{new_route}')")
        script_content = script_content.replace(f"window.location.href='{old_href}'", f"router.push('{new_route}')")
        script_content = script_content.replace(f"window.location.href = '{old_href}'", f"router.push('{new_route}')")
        
    events = ['onclick', 'oninput', 'onscroll', 'onpaste', 'ondragover', 'ondragleave', 'ondrop']
    for event in events:
        def event_replacer(m):
            attr_val = m.group(1)
            attr_val = re.sub(r'\bthis\b', '$event.currentTarget', attr_val)
            attr_val = re.sub(r'\bevent\b', '$event', attr_val)
            return f'@{event[2:]}="{attr_val}"'
        body_content = re.sub(rf'{event}="([^"]+)"', event_replacer, body_content)

    # Change DOMContentLoaded and window.onload to onMounted logic
    # Also change window.onload = function...
    script_content = re.sub(r"document\.addEventListener\(['\"]DOMContentLoaded['\"],\s*(function\s*\(\)|\(\)\s*=>)\s*\{", "onMounted(() => {", script_content)
    script_content = re.sub(r"window\.onload\s*=\s*function\s*\(\)\s*\{", "onMounted(() => {", script_content)
    script_content = re.sub(r"window\.onload\s*=\s*([a-zA-Z0-9_]+);", r"onMounted(() => { \1(); });", script_content)

    template = f"""<template>
  <div class="{wrapper_class}">
    {body_content}
  </div>
</template>

<script setup>
import {{ onMounted, onUnmounted }} from 'vue'
import {{ useRouter }} from 'vue-router'

const router = useRouter()

{script_content}

onMounted(() => {{
  if (typeof lucide !== 'undefined') {{
    lucide.createIcons();
  }}
}})
</script>

<style scoped>
{style_content}
</style>
"""
    with open(os.path.join(vue_dir, vue_name), 'w', encoding='utf-8') as f:
        f.write(template)

print("Conversion with hooks completed.")

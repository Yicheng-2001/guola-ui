import os
import re

vue_file = '/Users/guolintao/Desktop/GuolaYa_Vue/src/views/Workbench.vue'

with open(vue_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix lucide.createIcons() to be safe
content = content.replace('lucide.createIcons();', "if(typeof lucide !== 'undefined') lucide.createIcons();")

# Expose functions to window to prevent innerHTML onclick errors
functions = re.findall(r'function\s+([a-zA-Z0-9_]+)\s*\(', content)
# deduplicate
functions = list(set(functions))

expose_code = "\n".join([f"        if(typeof window !== 'undefined') window.{f} = {f};" for f in functions])

# add expose_code inside onMounted
onmounted_pattern = r'onMounted\(\(\) => \{'
content = content.replace('onMounted(() => {', f'onMounted(() => {{\n{expose_code}', 1)

# Ensure title observer triggers by making sure we unhide it if observer fails
# Actually, let's just make it visible initially to avoid missing title
content = content.replace('opacity-0 translate-y-12', '')

with open(vue_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixes applied to Workbench.vue")

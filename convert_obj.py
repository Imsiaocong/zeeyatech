"""将 OBJ 线框模型压缩为紧凑 JSON，供 Three.js 直接加载"""
import json, struct, gzip, os, re

OBJ_PATH = os.path.join(os.path.dirname(__file__), 'ComfyUI_00002_.obj')
OUT_JS  = os.path.join(os.path.dirname(__file__), 'logo_data.js')

# 1. 读取 OBJ
verts = []
faces = []
with open(OBJ_PATH, 'r') as f:
    for line in f:
        if line.startswith('v '):
            parts = line.strip().split()
            verts.append((float(parts[1]), float(parts[2]), float(parts[3])))
        elif line.startswith('f '):
            # 格式: f 40367//40367 56//56 63//63
            nums = [int(x.split('//')[0]) - 1 for x in line.strip().split()[1:]]
            faces.append(nums)

print(f'顶点: {len(verts)}, 面: {len(faces)}')

# 2. 计算包围盒 & 归一化
xs = [v[0] for v in verts]; ys = [v[1] for v in verts]; zs = [v[2] for v in verts]
cx = (min(xs) + max(xs)) / 2
cy = (min(ys) + max(ys)) / 2
cz = (min(zs) + max(zs)) / 2
scale = 1.0 / max(max(xs)-min(xs), max(ys)-min(ys), max(zs)-min(zs))

# 3. 量化到 int16（紧凑存储）
def quantize(val, lo, hi):
    return int((val - lo) / (hi - lo) * 65535)

vx_min, vx_max = min(xs), max(xs)
vy_min, vy_max = min(ys), max(ys)
vz_min, vz_max = min(zs), max(zs)

qverts = []
for x, y, z in verts:
    qverts.append(quantize(x, vx_min, vx_max))
    qverts.append(quantize(y, vy_min, vy_max))
    qverts.append(quantize(z, vz_min, vz_max))

# 4. 展平 face 索引
flat_faces = []
for f in faces:
    flat_faces.extend(f)

data = {
    'vx_range': [vx_min, vx_max],
    'vy_range': [vy_min, vy_max],
    'vz_range': [vz_min, vz_max],
    'center': [cx, cy, cz],
    'scale': scale,
    'verts': qverts,
    'faces': flat_faces,
    'vert_count': len(verts),
}

# 5. 写入 JS（gzip 后 base64，运行时解压）
json_str = json.dumps(data, separators=(',', ':'))
compressed = gzip.compress(json_str.encode('utf-8'))
b64 = compressed.hex()  # hex 编码，比 base64 更紧凑且 JS 友好

js = f'''/* 智鸭科技 LOGO 3D 模型 — 自动生成，请勿手动编辑 */
const LOGO_MODEL_DATA = "{b64}";
'''

with open(OUT_JS, 'w', encoding='utf-8') as f:
    f.write(js)

print(f'输出: {OUT_JS}  ({len(js)/1024:.1f} KB)')

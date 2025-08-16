import json
import os

# Buat folder icons jika belum ada
os.makedirs('icons', exist_ok=True)

# Definisi kategori
filters = {
    "🎨 Filter Media": [],
    "🤖 AI / Generatif": [],
    "📷 Lens / Kamera": [],
    "🔒 Konten / Keamanan": [],
    "🧭 Navigasi / Marketplace": [],
    "🛠️ Editing Lanjutan": []
}

# Generate 644 filter + subfilter + SVG dummy
for i in range(1, 645):
    filter_name = f"Filter {i}"
    subfilters = [f"Subfilter {i}.{j}" for j in range(1, 4)]
    icon_path = f"icons/filter{i}.svg"

    # Tentukan kategori
    if i <= 107: category = "🎨 Filter Media"
    elif i <= 214: category = "🤖 AI / Generatif"
    elif i <= 321: category = "📷 Lens / Kamera"
    elif i <= 428: category = "🔒 Konten / Keamanan"
    elif i <= 535: category = "🧭 Navigasi / Marketplace"
    else: category = "🛠️ Editing Lanjutan"

    # Tambahkan ke kategori
    filters[category].append({
        "name": filter_name,
        "icon": icon_path,
        "subfilters": subfilters
    })

    # Buat SVG dummy
    with open(icon_path, 'w') as f:
        f.write(f'<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">'
                f'<text x="10" y="50" font-size="20">{filter_name}</text></svg>')

# Simpan JSON
with open('filters.json', 'w') as f:
    json.dump(filters, f, indent=2)

print("✅ filters.json dan folder icons/ berhasil dibuat.")

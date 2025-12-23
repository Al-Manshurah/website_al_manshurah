# 📝 Content Management System - Panduan Artikel

## Cara Menambah Artikel Baru

Sistem artikel menggunakan **Markdown** (seperti Hugo) dengan **Static Site Generation (SSG)**.

### 1. Buat File Markdown Baru

Buat file `.md` di folder: `content/articles/`

**Contoh:** `content/articles/nama-artikel-baru.md`

### 2. Format Frontmatter

Setiap artikel harus memiliki **frontmatter** di awal file:

```markdown
---
title: "Judul Artikel Anda"
date: "2024-12-24"
author: "Nama Penulis"
category: "Kategori"
excerpt: "Ringkasan singkat artikel (ditampilkan di list)"
image: "/images/articles/gambar.jpg"
tags: ["tag1", "tag2", "tag3"]
---

# Isi Artikel Dimulai Di Sini

Paragraf pertama...
```

### 3. Field Frontmatter

| Field      | Wajib?  | Deskripsi                                  |
| ---------- | ------- | ------------------------------------------ |
| `title`    | ✅ Ya    | Judul artikel                              |
| `date`     | ✅ Ya    | Format: YYYY-MM-DD                         |
| `author`   | ✅ Ya    | Nama penulis (Ustadz/Ustadzah)             |
| `category` | ✅ Ya    | Kategori: Aqidah, Fiqih, Hadits, Ilmu, dll |
| `excerpt`  | ✅ Ya    | Ringkasan 1-2 kalimat                      |
| `image`    | ❌ Tidak | Path gambar (optional)                     |
| `tags`     | ❌ Tidak | Array tags                                 |

### 4. Menulis Konten

Gunakan **Markdown syntax** standar:

#### Heading
```markdown
# Heading 1
## Heading 2
### Heading 3
```

#### Paragraf
```markdown
Ini adalah paragraf biasa.

Paragraf baru dengan baris kosong di antaranya.
```

#### Bold & Italic
```markdown
**Teks tebal**
*Teks miring*
```

#### Blockquote (untuk Ayat/Hadits)
```markdown
> "Katakanlah: 'Dia-lah Allah, Yang Maha Esa.'" (QS. Al-Ikhlas: 1)
```

#### List
```markdown
- Item 1
- Item 2
- Item 3

1. Nomor 1
2. Nomor 2
3. Nomor 3
```

#### Link
```markdown
[Teks Link](https://example.com)
```

### 5. Slug/URL Artikel

Slug otomatis dibuat dari **nama file**:

- File: `mengenal-tauhid.md`
- URL: `/artikel/mengenal-tauhid`

**Tips:** Gunakan huruf kecil, pisahkan dengan `-` (dash)

### 6. Build & Deploy

Setelah menambah artikel:

```bash
# Development (auto-reload)
pnpm run dev

# Production build
pnpm run build
```

Artikel akan di-generate sebagai **static HTML** saat build! ⚡

---

## Contoh Artikel Lengkap

```markdown
---
title: "Mengenal Tauhid: Fondasi Keimanan Seorang Muslim"
date: "2024-12-24"
author: "Ustadz Ahmad Abdullah"
category: "Aqidah"
excerpt: "Tauhid adalah pondasi utama dalam Islam. Artikel ini membahas pentingnya tauhid dan bagaimana mengaplikasikannya dalam kehidupan sehari-hari."
image: "/images/articles/tauhid.jpg"
tags: ["tauhid", "aqidah", "iman"]
---

# Mengenal Tauhid: Fondasi Keimanan Seorang Muslim

## Pendahuluan

Tauhid adalah pondasi utama dalam Islam yang wajib dipahami oleh setiap muslim.

## Pengertian Tauhid

Tauhid secara bahasa berarti **mengesakan**. Secara istilah, tauhid adalah mengesakan Allah dalam:
- Rububiyah (Ketuhanan)
- Uluhiyah (Peribadatan)  
- Asma wa Sifat (Nama dan Sifat)

## Dalil

> "Katakanlah: 'Dia-lah Allah, Yang Maha Esa.'" (QS. Al-Ikhlas: 1)

## Kesimpulan

Tauhid adalah fondasi Islam yang harus dipahami dan diamalkan. Wallahu a'lam.
```

---

## 📂 Struktur Folder

```
website_al_manshurah/
├── content/
│   └── articles/          ← Semua artikel Markdown di sini
│       ├── mengenal-tauhid.md
│       ├── adab-menuntut-ilmu.md
│       └── artikel-baru.md
├── src/
│   ├── app/
│   │   └── artikel/
│   │       ├── page.js              ← List artikel
│   │       └── [slug]/
│   │           └── page.js          ← Detail artikel
│   └── lib/
│       └── articles.js              ← Utility parsing Markdown
└── public/
    └── images/
        └── articles/      ← Gambar artikel (optional)
```

---

## 🎨 Styling Konten

Artikel menggunakan **Tailwind Typography** dengan custom styling:
- ✅ Headings: Font Kufam, warna primary
- ✅ Blockquotes: Border kiri, background primary/5
- ✅ Links: Warna primary dengan hover underline
- ✅ Code: Background abu-abu dengan border radius

---

## ✨ Fitur SSG

✅ **Static Generation**: Semua artikel di-build menjadi HTML statis  
✅ **Fast Loading**: Tidak ada database query di runtime  
✅ **SEO Friendly**: Pre-rendered HTML untuk search engines  
✅ **Markdown Support**: Menulis dengan format yang simple  
✅ **Frontmatter**: Metadata terstruktur seperti Hugo  

---

## 📊 Kategori yang Tersedia

Gunakan salah satu kategori berikut:
- **Aqidah**: Tauhid, keimanan
- **Fiqih**: Hukum Islam, ibadah
- **Hadits**: Kajian hadits
- **Sirah**: Sejarah Nabi dan sahabat
- **Akhlak**: Adab dan akhlak Islam
- **Ilmu**: Pendidikan dan menuntut ilmu
- **Muamalah**: Transaksi dan ekonomi Islam

---

## 🚀 Quick Start

1. **Buat file baru**: `content/articles/artikel-saya.md`
2. **Copy template** frontmatter di atas
3. **Tulis konten** dalam Markdown
4. **Save** file
5. **Refresh** browser (dev server auto-reload)
6. **Lihat** di `/artikel`

Selesai! 🎉

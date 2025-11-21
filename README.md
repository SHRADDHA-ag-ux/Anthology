Anthology of Indian Textiles

Overview
- This is a responsive single-page site showcasing major Indian textile traditions with sections, images, and a gallery.

Files created
- `index.html` — main site with sections for Banarasi, Bandhani, Maheshwari, Ikat, Warli, Chintz, Kantha, Pichwai, and a gallery.
- `css/styles.css` — responsive styling.
- `js/main.js` — lightbox and smooth scrolling.

Images
- The site currently references image files found in the local `assets/` folder:
  - `assets/vibrant-colored-patterned-textiles-row-generated-by-ai.jpg`
  - `assets/groom-green-shirt-touches-his-red-sherwani.jpg`
  - `assets/Screenshot 2025-11-21 095436.png`
  - `assets/Screenshot 2025-11-21 095750.png`
  - `assets/view-person-creating-digital-diy-craft-content.jpg`

Notes & next steps
- Your instruction asked for images in an `img/` folder and to map images by textile name. I could not find an `img/` folder: images were present in `assets/`. I placed those images as placeholders in relevant sections and in the gallery with descriptive alt text noting they are placeholders.
- If you have labeled images (e.g., `img/banarasi.jpg`, `img/bandhani.png`), please add them to the workspace and I will remap them to their correct sections and update alt text.
- To preview locally (PowerShell):

```powershell
# from the project root
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Citations
- Short references included in the site; for detailed citations please provide any preferred academic sources and I'll add footnotes.

If you'd like, I can:
- Move or copy current images into a new `img/` folder and rename them to match textile names (I'll ask before overwriting anything).
- Replace placeholder alt tags with precise descriptions if you provide labels for each image file.
- Split the site into separate pages per tradition instead of a single-page layout.

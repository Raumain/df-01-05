# MindSync Solutions - 2000s Vaporware Hackathon Project

A satirical "consciousness uploading" B2C/B2B startup website built for the 2000s website hackathon.

## Project Structure

```
/mindsync
├── index.html       (Landing page)
├── scanner.html     (Neural assessment tool)
├── result.html      (Post-scan fake dashboard)
├── pricing.html     (Upload subscription plans)
├── style.css        (Shared 2000s styling)
├── app.js           (Shared application logic & i18n)
└── /assets
    ├── logo.gif     (Optional - app gracefully handles missing images)
    ├── brain-map.jpg (Optional - app gracefully handles missing images)
    └── construction.gif (Optional - app gracefully handles missing images)
```

## Technology Stack

- **HTML**: Table-based layout with marquee elements (strict 2000s style)
- **CSS**: Pure CSS (no frameworks) with 2000s corporate aesthetic
- **JavaScript**: Vanilla JS only (no libraries/frameworks)
- **State Management**: Browser `localStorage`

## Key Features

### 1. Bilingual Support (EN/FR)
- Language toggle on every page (persisted in `localStorage.lang`)
- All UI text is translatable via the `i18n` object in `app.js`
- Call `t(key)` to get translated text or use `data-i18n="key"` attribute on HTML elements

### 2. End-to-End Funnel
1. **index.html** → Landing page with CTA to scanner
2. **scanner.html** → 3-question quiz + brain map interaction + fake upload sequence
3. **result.html** → Displays dynamically pulled data from upload
4. **pricing.html** → Subscription plans with upsell messaging

### 3. Scanner Interaction Flow
- Quiz requires all 3 questions answered (gated upload)
- Brain map (HTML `<map>` + `<area>` tags) requires Frontal Lobe selection (gated upload)
- Error messages display in-page if validation fails
- Once validated, fake upload sequence runs for ~6 seconds with:
  - Loading bar (table cells fill with blue)
  - Console log output with required sequence
  - Automatic redirect to `result.html` with persisted data

### 4. Data Persistence
Stored in `localStorage`:
- **lang**: Current language preference (en/fr)
- **scanData**: JSON object with:
  - `answers`: Quiz answers {q1, q2, q3}
  - `compatibility`: Random 80-100% score
  - `timestamp`: ISO 8601 timestamp of transfer

### 5. Asset Fallback Handling
- Missing images degrade gracefully to visible placeholders
- Placeholders maintain proper dimensions to prevent layout shifts
- Brain map has SVG fallback diagram for interaction
- All pages remain functional and navigable

## Running the Project

1. Open `index.html` in any modern browser (Chrome/Firefox/Safari/Edge)
2. Navigate through the funnel:
   - Click "Start Neural Scanner" button
   - Answer all 3 quiz questions
   - Click on the brain diagram's Frontal Lobe
   - Click "UPLOAD NOW"
   - Wait ~6 seconds for fake upload sequence
   - Automatically redirected to results page
3. Try the EN/FR language toggle on any page
4. Visit pricing page for subscription options

## Design System

### Colors (2000s Corporate)
- Primary: Metallic Gray (#c0c0c0, #a9a9a9)
- Accent: Royal Blue (#4169e1)
- Text: Black (#000), Navy (#000080)
- Links: Dark Blue (#0000cd)
- Success: Green (#00aa00)
- Alert: Red (#cc0000), Orange (#ff6600)

### Typography
- Font: Verdana, Tahoma, Arial (2000s standard)
- Sizes: 10px-12px for body, 14px for headings
- Heavy bold weights, minimal spacing

### UI Elements
- 3D beveled buttons (outset/inset borders)
- Table-based layouts everywhere
- `<marquee>` scrolling text (authentically 2000s)
- Blinking button animation for CTAs

## Customization

### Adding Translations
Edit `app.js` in the `i18n` object:
```javascript
i18n.fr.myNewKey = "French translation here";
i18n.en.myNewKey = "English translation here";
```

Then use in HTML:
```html
<span data-i18n="myNewKey">English translation here</span>
```

Or in JavaScript:
```javascript
const text = t('myNewKey');
```

### Modifying Copy
All visible text is in `app.js` under the `i18n` object. Change values there to update all pages simultaneously.

### Styling Changes
Edit `style.css` to modify colors, fonts, or layout. The stylesheet is designed to be simple and hackathon-friendly (no preprocessors).

## Browser Compatibility

- Tested on: Chrome, Firefox, Safari, Edge (latest versions)
- Target: Modern desktop browsers only
- localStorage support required
- No IE11 support (by design)

## Acceptance Criteria Met

✓ End-to-end journey works (all 4 pages wired)  
✓ EN/FR toggle persisted in localStorage  
✓ Scanner upload gated by quiz completion + Frontal Lobe click  
✓ Upload sequence runs ~6 seconds with console log  
✓ Result page displays persisted scan data  
✓ No frameworks/libraries used  
✓ Missing assets degrade gracefully  
✓ All visible strings are bilingual  

## Notes

- This is a parody project for entertainment purposes only
- MindSync Solutions is not a real company
- "Consciousness uploading" is not scientifically possible
- All content is satirical commentary on 2000s startup culture

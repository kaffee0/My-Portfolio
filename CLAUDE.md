# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a customized portfolio website based on the tsuchifumazu template. The site has been personalized for "kae feuring" with a custom color palette.

This repository contains a static HTML/CSS/JavaScript portfolio website with an interactive, retro-inspired UI featuring:
- MIDI/keyboard-controlled interface
- Work portfolio viewer with filtering (MusicVideo, LiveDir., Graphic, Ads, Others)
- Multiple view modes: WORK NUMS MODE, WORK INDEX MODE, and ABOUT page
- Interactive visual effects (DVD bouncing logo, wiggle animations, sound effects)
- Responsive design with Japanese language content

## Development Setup

### Running the Site Locally

```bash
# Start local development server
python3 -m http.server 8000

# Then open in browser
# http://localhost:8000/
```

Alternative servers:
```bash
# Using PHP
php -S localhost:8000

# Using Node.js (if http-server is installed)
npx http-server -p 8000
```

## Architecture

### File Structure

```
myportfolio/
├── index.html          # Main HTML file (single-page application)
├── css/
│   └── style.css       # All styles (includes CSS reset, animations, layout)
├── js/
│   └── script.js       # Bundled/minified JavaScript (webpack output)
└── img/                # Images, SVG icons, audio files, profile photos
    ├── *.svg           # UI icons (social media, controls)
    ├── *.jpg           # Profile photos
    ├── *.wav           # Sound effects (tap_01.wav, hover.wav)
    └── *.png           # Logo, OGP, placeholder images
```

### Key Technical Details

**Frontend Stack:**
- Vanilla HTML/CSS/JavaScript (no build process required)
- jQuery 3.2.1
- GSAP 3.12+ with plugins (ScrollTrigger, ScrambleText, CustomWiggle, CustomEase)
- Leader Line 1.0.7 (for connecting UI elements)
- YouTube IFrame API (for video embeds)

**JavaScript:**
- `js/script.js` is a webpack-bundled output (minified/obfuscated)
- To modify JavaScript behavior, you would need to either:
  1. Work with the minified code directly (not recommended)
  2. Request the original source files from the project
  3. Reverse-engineer the bundled code

**CSS:**
- Single file architecture
- Uses CSS custom properties for colors
- Includes Meyer CSS Reset
- Google Fonts: Zen Old Mincho, Doto, Exo, Noto Sans JP
- Adobe Typekit fonts
- Heavy use of animations and transitions

### UI Components

**Page Modes** (controlled via left panel buttons):
1. **WORK NUMS MODE** - Main portfolio view with numbered work selection
2. **WORK INDEX MODE** - Alternative list-based portfolio view
3. **ABOUT** - Information about the creative unit and members

**Work Filtering** (categories):
- ALL
- MusicVideo
- LiveDir. (Live Direction)
- Graphic
- Ads (Advertisements)
- Others

**Interactive Elements:**
- Range sliders for visual effects
- DVD-style bouncing logo (`#dvdLogo`)
- Sound effects on tap/hover
- Keyboard and MIDI controller input support
- Three-tab work viewer: IMAGES / VIDEOS / CREDIT

### Important HTML Structure

- `.wrapper > .main > .middle` - Main layout container
- `.left` - Navigation, effects controls, page menu
- `.center` - Sort options and work list
- `.center2` - About page content (hidden by default)
- `.right` - Work detail viewer
- `.right2` - Team member profiles (hidden by default)
- `.bottom` - Animated text marquee

## Known Limitations

### Missing Assets
The original site uses many assets under `/img/` (work images, photos, icons). This scaffold includes:
- Profile photos (watakemi.jpg, kairi.jpg)
- Logo and basic UI icons (SVG)
- Placeholder images for basic functionality
- Required sound effects (tap_01.wav, hover.wav)

**To get missing work images:** Use Chrome DevTools Network tab while loading the original tsuchifumazu.com site and download the `/img/*` assets.

### Relative vs Absolute Paths
The original site uses absolute paths (`/css/style.css`). This local version uses relative paths (`css/style.css`) - see index.html:44 comment.

## Metadata & SEO

The site includes comprehensive metadata:
- Google Analytics (gtag) integration
- OGP (Open Graph Protocol) tags for social sharing
- Twitter Card meta tags
- Canonical URL pointing to tsuchifumazu.com
- Japanese language (`lang="ja"`)

## External Dependencies

All loaded via CDN (no npm/package.json):
- jQuery 3.2.1 (ajax.googleapis.com)
- GSAP 3.12+ and plugins (cdnjs.cloudflare.com, cdn.jsdelivr.net)
- Leader Line 1.0.7 (cdnjs.cloudflare.com)
- YouTube IFrame API
- Google Fonts API
- Adobe Typekit fonts (use.typekit.net)

## Making Changes

### Current Color Palette

The site uses a custom 5-color palette inspired by retro design:
- **#D54636** (Red) - Primary accent, active buttons, selected states
- **#059665** (Green/Teal) - Display areas, secondary backgrounds
- **#CDA609** (Gold/Yellow) - Main panel backgrounds, buttons, text accents
- **#D69A89** (Rose Pink) - UI panels, secondary elements
- **#CE8817** (Orange/Gold) - Originally used, may still appear in some places

**Important:** When changing colors:
1. Update both `css/style.css` AND `js/script.js` (colors are hardcoded in minified JS)
2. Use find-replace for consistency (e.g., replace `tomato` with `#D54636` in both files)
3. Test thoroughly as JavaScript dynamically applies colors to UI elements

### Modifying Styles
Edit `css/style.css` directly. The file includes:
- Color utility classes (`.txt_white`, `.txt_pink`, etc.)
- Keyframe animations (`@keyframes flowing`, etc.)
- Component-specific styles
- Responsive breakpoints

**Color-related styles to be aware of:**
- `.button_active` - Active button state color
- `.moji_color` - Text color in info display
- `.orange` and `.blue` classes - Flow text colors
- Background colors for `.main`, `.moji_area`, `.bbs3`, etc.

### Modifying HTML Content
Edit `index.html` directly for:
- Meta tags and SEO
- Static text content
- Structure changes
- External dependency versions

### Modifying Behavior
The JavaScript is bundled/minified, making direct modification difficult. For significant behavioral changes, consider:
1. Adding custom scripts after the bundled `script.js`
2. Using jQuery to override/extend functionality
3. Obtaining source files if available

**Critical: Removing UI Elements**
The minified `js/script.js` expects certain DOM elements to exist. If you need to remove UI elements:
- **DO NOT** delete elements that JavaScript references (like `#inputRange`, `#inputRange2`)
- **Instead:** Use `display: none` in CSS or inline styles to hide them
- **Or:** Create dummy elements with the expected IDs to prevent JavaScript errors
- Removing elements that JS expects will cause `TypeError: Cannot read properties of null` and break other functionality

Example: The EFFECTS sliders were removed but dummy elements are created via inline script to prevent errors.

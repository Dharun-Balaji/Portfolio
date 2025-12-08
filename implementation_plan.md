# Dark & Light Mode Polish Implementation Plan

## Goal Description
Make dark mode the default and significantly improve its aesthetics to be "polished and shippable". The current design is too minimal. We will aim for a premium, modern look with depth, better contrast, and subtle visual effects (glassmorphism, glows). **Additionally, we will polish the Light Mode to ensure it is not "ass"**, giving it a clean, crisp, and premium feel that matches the quality of the dark mode.

## User Review Required
- **Design Direction**:
    - **Dark Mode**: "Premium Dark" with deep blue/black backgrounds and subtle indigo/purple accents.
    - **Light Mode**: "Clean & Crisp" with slightly off-white backgrounds to reduce harshness, sharp typography, and refined shadows/borders.

## Proposed Changes

### Configuration
#### [MODIFY] [layout.tsx](file:///home/dharun/Desktop/wb/Portfolio/src/app/layout.tsx)
- Change `ThemeProvider` `defaultTheme` from `"system"` to `"dark"`.

### Global Styles
#### [MODIFY] [globals.css](file:///home/dharun/Desktop/wb/Portfolio/src/app/globals.css)
- **Dark Mode (`.dark`)**:
    - **Background**: Deep, rich dark tone (e.g., `hsl(224, 71%, 4%)`).
    - **Foreground**: Off-white for readability.
    - **Primary**: Vibrant accent (Indigo/Violet).
    - **Card**: Slightly lighter than background with transparency/glass effect.
- **Light Mode (`:root`)**:
    - **Background**: Change from pure white to a very subtle off-white/cool grey (e.g., `hsl(240 5% 98%)`) to reduce eye strain and look more premium.
    - **Card**: Pure white `hsl(0 0% 100%)` with refined shadows to pop against the off-white background.
    - **Border**: Slightly darker to define edges clearly.
- Add a global background pattern or subtle gradient for both modes.
- Enhance `.glass-card` utility to work beautifully in both modes (white glass in light, dark glass in dark).

### Components
#### [MODIFY] [ProjectCard.tsx](file:///home/dharun/Desktop/wb/Portfolio/src/components/ProjectCard.tsx)
- Update styling to use the new "glass" effect.
- Add a hover effect that uses the primary accent color.
- Ensure shadows and borders look premium in Light Mode (avoiding dirty grey shadows).

#### [MODIFY] [Hero.tsx](file:///home/dharun/Desktop/wb/Portfolio/src/components/Hero.tsx)
- Update text gradient to use the new accent colors (ensure visibility in Light Mode).
- Add a subtle background glow/blur.

#### [MODIFY] [Navbar.tsx](file:///home/dharun/Desktop/wb/Portfolio/src/components/Navbar.tsx)
- Ensure navbar blends well with the new background (glass effect).

## Verification Plan
### Manual Verification
- **Default Theme**: Verify app defaults to dark mode.
- **Dark Mode Aesthetics**: Check depth, glass effects, and contrast.
- **Light Mode Aesthetics**: Check that it doesn't look "washed out" or "basic". Verify shadows, card contrast, and text readability.
- **Switching**: Toggle between modes to ensure smooth transitions and consistent quality.

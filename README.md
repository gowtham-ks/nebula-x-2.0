# NEBULA X 2.0 — The Forgotten Space Archive

NEBULA X is an interactive educational space-archaeology experience about NASA equipment and scientific hardware that remains on the Moon, Mars, in asteroid environments, or on deep-space trajectories.

The application combines a navigable 3D solar-system view with source-referenced mission records, planetary surface maps, narrated equipment stories, evidence inspection, a student field guide, a quiz, comparison tools, and a downloadable certificate. It is designed to make historical space hardware understandable without separating the story from its scientific and archival evidence.

> **Project context:** The project was created for the 2026 NASA Space Apps Challenge theme *“Abandoned but not Forgotten: Storytelling about NASA’s Discarded Equipment on the Moon and Mars.”* Mission content is organized around NASA/NSSDCA catalog records and the repository’s scientific-integrity audit.

## Contents

- [Highlights](#highlights)
- [Quick start](#quick-start)
- [Available commands](#available-commands)
- [How to use the archive](#how-to-use-the-archive)
- [Application architecture](#application-architecture)
- [Data and scientific integrity](#data-and-scientific-integrity)
- [Persistence and browser storage](#persistence-and-browser-storage)
- [Testing](#testing)
- [Production build and deployment](#production-build-and-deployment)
- [Repository layout](#repository-layout)
- [Development notes](#development-notes)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Known limitations](#known-limitations)
- [License and attribution](#license-and-attribution)

## Highlights

### Explore a 3D archive

- Start in a solar-system scene containing the Moon, Mars, and deep-space destinations.
- Select a destination to enter its dedicated planetary or deep-space view.
- Inspect equipment pins and, where available, select individual landing or resting locations.
- Orbit, zoom, and pan the scene with the 3D camera controls.
- Use the interface’s pause/play controls for the animated exploration view.

### Read the evidence behind each artifact

Each equipment group includes structured archival content such as:

- Mission and equipment identity
- Destination and surface coordinates
- Mission status and historical context
- Engineering, telemetry, science, and status evidence
- Timeline entries
- An Earth-connection explanation
- A student field guide for ages 13–18
- Source records with publisher, URL, supported claims, and verification status

Content is labeled with classification badges including:

- `DOCUMENTED FACT`
- `SCIENTIFIC INTERPRETATION`
- `EDUCATIONAL DRAMATIZATION`

This distinction is intentional: the narrated first-person stories are educational dramatizations, while the evidence panels separate documented records from interpretation.

### Learn and complete activities

- Read or listen to narrated artifact stories.
- View a transcript for narrated content.
- Perform an explicit evidence scan to earn scan XP.
- Complete the Mission Control quiz and retain progress between sessions.
- Compare equipment groups in the Comparison Lab.
- Inspect associated NASA images in the Image Inspector.
- Review the source policy and source list.
- Generate and download a visual certificate as PNG or print it to PDF.

## Quick start

### Prerequisites

- Node.js with npm. Node.js 18+ is recommended for current Vite and React tooling.
- A modern browser with WebGL support. Chrome, Firefox, Safari, and Edge are the intended targets.
- Internet access is recommended for Google Fonts and remote NASA image assets used by the interface. The application code and mission records are bundled locally.

### Install and run

```bash
git clone <repository-url>
cd nebula-x-2.0
npm install
npm run dev
```

Open the local URL printed by Vite, normally:

```text
http://localhost:5173
```

Vite provides hot module replacement while editing source files. Press `Ctrl+C` in the terminal to stop the development server.

### Verify the project locally

Run the automated checks before making or reviewing changes:

```bash
npm test
npm run build
```

`npm test` runs the Node test suite. `npm run build` creates the deployable static output in `dist/`.

## Available commands

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies from `package-lock.json`. |
| `npm run dev` | Start the Vite development server with hot reload. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run preview` | Serve the production build locally for verification. Run `npm run build` first. |
| `npm test` | Run tests with Node’s built-in test runner. |

## How to use the archive

1. **Enter the archive.** Launch the app and use the main exploration view to orient yourself in the solar system.
2. **Choose a destination.** Select the Moon, Mars, or Deep Space from the scene or navigation controls.
3. **Choose an equipment group.** Click a marker on the destination scene. Markers can represent a group of related machines or multiple verified locations.
4. **Inspect the record.** Read the overview, evidence, timeline, student guide, source references, and Earth connection.
5. **Scan the evidence.** Use the explicit scan action when available. The first scan of an equipment group awards XP; repeated scans do not award duplicate XP.
6. **Use supporting activities.** Open Mission Control for the quiz, Comparison Lab to compare records, Image Inspector for mission photography, and the certificate view for a progress summary.
7. **Return to navigation.** Use the back controls or the NEBULA X brand control to return to the solar-system or destination view.

### Keyboard and accessibility behavior

The interface includes semantic buttons, accessible labels for icon controls, responsive layouts, and keyboard handling for open modal states. The design contract in [`DESIGN.md`](./DESIGN.md) is the authoritative reference for responsive behavior, hierarchy, contrast, focus, and accessibility requirements.

Because the main experience is 3D, a mouse, trackpad, or touch input is useful for camera navigation. The textual record, controls, quiz, source list, and supporting modals remain available as standard interface content.

## Application architecture

NEBULA X is a client-side React application built with Vite.

```text
index.html
    └── src/main.jsx
          ├── React UI, navigation, modal state, and progress state
          ├── React Three Fiber / Three.js scenes
          ├── src/machinesData.js       mission records and evidence
          ├── src/textures.js            procedural scene textures
          ├── src/coords.js              latitude/longitude projection
          ├── src/certificateRenderer.js canvas certificate renderer
          └── src/styles.css             visual system and responsive layout
```

### Rendering stack

- **React and React DOM** provide the application and interface composition.
- **Vite** provides development, module handling, and production bundling.
- **Three.js** provides the 3D primitives, materials, lights, and scene math.
- **React Three Fiber** renders Three.js scenes through React components.
- **`@react-three/drei`** supplies scene helpers such as orbit controls, stars, HTML labels, and lines.
- **Lucide React** supplies interface icons.
- **Canvas 2D** is used by `certificateRenderer.js` to generate the high-resolution certificate artwork.

### Main state domains

The main application separates several user activities rather than treating every interaction as the same kind of progress:

- **Exploration:** equipment groups the visitor has opened.
- **Evidence scanning:** equipment groups explicitly scanned for evidence and XP.
- **Quiz progress:** completed cases, selected answers, score, and quiz XP.
- **Navigation:** current destination, selected equipment group, selected location, and active view.
- **Presentation state:** open modals, narration status, image zoom, mobile menu, and camera/scene controls.

This separation prevents merely opening an artifact from incorrectly awarding scan XP.

## Data and scientific integrity

The primary content source is [`src/machinesData.js`](./src/machinesData.js). The project currently models 13 equipment groups across three destination categories:

- **Moon:** Apollo Lunar Module descent stages, Lunar Roving Vehicles, ALSEP scientific packages, and Surveyor landers.
- **Mars:** Sojourner, Spirit and Opportunity, Viking landers, Phoenix and InSight, and Ingenuity.
- **Deep Space and asteroids:** Pioneer 10 and 11, Dawn, and Eros-related deep-space records.

The exact set and location counts are validated by the test suite. Some equipment groups contain multiple landing sites or escape vectors, so a group’s marker count is not necessarily the same as its number of physical artifacts.

### Source policy

Mission records use NASA/NSSDCA catalog identifiers and source URLs. The UI exposes source metadata and classification badges so visitors can distinguish a catalog-backed record from interpretation or dramatized narration.

The repository includes supporting audit and quality documentation:

- [`docs/SCIENTIFIC_INTEGRITY_AUDIT.md`](./docs/SCIENTIFIC_INTEGRITY_AUDIT.md) — source-validation findings and corrections.
- [`docs/NASA_SOURCE_VERIFICATION_MATRIX.md`](./docs/NASA_SOURCE_VERIFICATION_MATRIX.md) — verification matrix for NASA source coverage.
- [`docs/PHASE_2_FUNCTIONAL_RELIABILITY.md`](./docs/PHASE_2_FUNCTIONAL_RELIABILITY.md) — functional reliability notes.
- [`docs/PHASE_3_EDUCATIONAL_QUALITY.md`](./docs/PHASE_3_EDUCATIONAL_QUALITY.md) — educational quality and field-guide coverage.
- [`docs/PHASE_2_3_TEST_REPORT.md`](./docs/PHASE_2_3_TEST_REPORT.md) — phase test report.

When changing mission facts, update the structured record and its source metadata together. Do not add an unsupported factual claim only to the narrative copy.

### Coordinate projection

`src/coords.js` converts latitude and longitude to a Cartesian point on a sphere. The helper is exported from `src/main.jsx` so it can be tested independently:

```js
import { latLonToVector3 } from './src/coords.js';

const point = latLonToVector3(0, 0, 1.25);
// [x, y, z] with a magnitude of approximately 1.25
```

The tests cover the equator, North Pole, South Pole, and radius preservation.

## Persistence and browser storage

The app does not require a backend or account. Progress is kept in the current browser origin using `localStorage`:

| Key | Contents |
|---|---|
| `nebula-explored-v1` | IDs of equipment groups opened during exploration. |
| `nebula-scanned-v1` | IDs of equipment groups scanned for evidence. |
| `nebula-scanned-v2` | Current scan-state compatibility copy used by the app. |
| `nebula-quiz-progress-v1` | Quiz answers, completed case IDs, score, XP, and completion timestamp. |

The quiz loader validates and recovers from malformed or truncated JSON by returning an empty progress state. The UI also provides a quiz reset action.

To clear all local progress manually, open the browser developer console on the running app and execute:

```js
localStorage.removeItem('nebula-explored-v1');
localStorage.removeItem('nebula-scanned-v1');
localStorage.removeItem('nebula-scanned-v2');
localStorage.removeItem('nebula-quiz-progress-v1');
location.reload();
```

This only clears local browser data. It does not change repository files or shared project data.

## Testing

The test suite lives in [`tests/phase2_3.test.js`](./tests/phase2_3.test.js) and uses Node’s built-in `node:test` and `node:assert/strict` modules.

The current tests cover:

- Presence of all 13 equipment groups.
- Valid destination assignment and NSSDCA identifiers.
- Distinct multi-location landing sites and deep-space vectors.
- Latitude/longitude to 3D spherical projection.
- Separation between exploration and evidence-scanning state.
- One-time scan XP behavior.
- Quiz progress persistence and corrupted-data recovery.
- Prevention of duplicate quiz XP awards.
- Complete student field guides for every equipment group.
- Valid content classifications.

Run the suite with:

```bash
npm test
```

When adding a new non-trivial content rule, state transition, parser, or coordinate behavior, add a focused assertion to the existing test file rather than introducing a new testing dependency.

## Production build and deployment

The project produces a static site and can be deployed to any host that serves a Vite build, including GitHub Pages, Netlify, Vercel, Cloudflare Pages, or an object-storage static website.

```bash
npm ci
npm test
npm run build
npm run preview
```

Deploy the contents of `dist/` after the build succeeds. Configure the host to serve `dist/index.html` for the root route. The current app is primarily a single-page experience, so a host that does not rewrite unknown paths to `index.html` should still work as long as navigation remains client-side.

### Asset and network considerations

- Mission image records use remote NASA image URLs stored in `machinesData.js`.
- Fonts are loaded from Google Fonts in `src/styles.css`/the HTML entry path.
- A fully offline deployment may show fallback fonts and unavailable remote images unless those assets are mirrored and the references are changed.
- WebGL performance varies substantially between devices. Test the production build on both desktop and mobile hardware before publishing.

## Repository layout

```text
.
├── data/
│   └── nssdc_archive.json       Indexed NASA/NSSDCA archive data
├── docs/                        Audit, verification, quality, and test reports
├── dist/                        Generated Vite production output
├── src/
│   ├── certificateRenderer.js   Canvas-based certificate generator
│   ├── coords.js                Geographic-to-3D coordinate helper
│   ├── machinesData.js          Equipment, location, evidence, and source records
│   ├── main.jsx                 React app, scenes, flows, and UI components
│   ├── styles.css               Visual system, layout, and responsive styles
│   └── textures.js              Procedural planetary and space textures
├── tests/
│   └── phase2_3.test.js         Functional and educational-content tests
├── DESIGN.md                    Mandatory design and responsive behavior contract
├── index.html                   Vite HTML entry point
├── package.json                 Scripts and dependencies
└── package-lock.json            Locked dependency tree
```

`dist/` is generated output. Edit `src/`, `index.html`, or the data files instead of editing built files directly.

## Development notes

### Adding or editing an equipment group

Add the record to `src/machinesData.js` and keep the existing shape consistent. At minimum, verify:

1. `id` is unique.
2. `destination` is one of `moon`, `mars`, or `deep`.
3. `nssdcId`, `catalogUrl`, and source metadata identify the archival basis.
4. `lat`, `lon`, and `locations` are coherent for the selected destination.
5. The evidence fields have matching classification fields.
6. The seven student-guide questions are present and substantive.
7. The record works with the existing image, narration, scan, comparison, and certificate flows.

After changing data, run:

```bash
npm test
npm run build
```

### Updating the 3D experience

Most scene components and the application state live in `src/main.jsx`. Before changing shared handlers or state transitions, inspect all callers because navigation, modals, XP, and persistence are coordinated in the same file. Keep scene-only rendering changes separate from progress logic where possible.

### Following the design contract

Read [`DESIGN.md`](./DESIGN.md) before changing layout or visual behavior. It defines the project’s hierarchy, responsive states, accessibility expectations, use of overlays, preservation of 3D functionality, and visual identity. The design document is normative rather than optional background material.

## Troubleshooting

### The app does not start after installation

Check the Node.js version, remove and reinstall dependencies, then retry:

```bash
node --version
rm -rf node_modules
npm ci
npm run dev
```

Only remove `node_modules`; do not remove `package-lock.json` or source files.

### The 3D scene is blank or very slow

- Confirm that hardware acceleration and WebGL are enabled in the browser.
- Try a current desktop browser.
- Close other GPU-intensive tabs.
- Test `npm run build && npm run preview` to rule out development-server behavior.
- Check the browser console for WebGL or shader errors.

### Images are missing

The mission image URLs are external NASA assets. Confirm network access and inspect the browser Network panel for failed image requests. The text record and evidence content should still be available when an image cannot load.

### Progress appears to be missing

Progress is origin- and browser-specific. Switching browsers, using a different port, opening a private window, or clearing site data creates a different storage context. Verify the app’s `localStorage` keys before resetting anything.

## Contributing

1. Create a focused branch for the change.
2. Read [`DESIGN.md`](./DESIGN.md) for UI changes and the relevant audit documents for mission-content changes.
3. Keep the change scoped; reuse existing components, dependencies, and data structures.
4. Add or update tests for changed behavior and content invariants.
5. Run `npm test` and `npm run build`.
6. Review the rendered experience at narrow and wide viewport sizes, including a mobile-sized viewport.
7. Include source links and classification metadata for factual mission-content changes.

For scientific-content changes, prefer primary NASA/NSSDCA records and document uncertainty rather than presenting an inference as a fact.

## Known limitations

- There is no server-side account, synchronization, or shared progress system; progress stays in one browser origin.
- The app depends on WebGL for its primary 3D exploration experience.
- Some image and font assets are loaded remotely and therefore are not guaranteed to be available offline.
- The repository does not currently define a lint or formatting command in `package.json`.
- The test suite focuses on data integrity and state rules; it does not replace manual browser testing of WebGL rendering, responsive layout, audio, or downloads.
- The generated certificate is a visual achievement artifact, not an official NASA credential.

## License and attribution

This repository does not currently declare a software license in `package.json` or a root `LICENSE` file. Treat reuse and redistribution as subject to the project owner’s permission until a license is added.

NASA/NSSDCA records, mission information, and linked images remain subject to their respective source terms and attribution requirements. NEBULA X’s educational dramatizations and interface code should not be presented as official NASA communications or endorsements.

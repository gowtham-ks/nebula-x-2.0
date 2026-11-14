# NEBULA X 2.0 — Design System and Interface Contract

**Status:** Mandatory project design specification  
**Applies to:** Every page, route, panel, modal, control, responsive state, and 3D interface in NEBULA X 2.0  
**Primary design authority:** Apple Human Interface Guidelines (HIG), applied to the web platform  
**Implementation:** React, Vite, CSS, Three.js / React Three Fiber  
**Audience:** Designers, frontend engineers, code-generation agents, and Impeccable

---

## 1. Purpose and authority

This document defines how NEBULA X 2.0 must look, behave, organize information, and adapt to different available screen sizes. It is a binding design specification. It is not a collection of optional suggestions.

Apple's Human Interface Guidelines are the design baseline. The supplied Apple HIG **Layout** guidance is the primary source for the layout rules in this document. Apply its principles to the web platform without copying native iOS, iPadOS, macOS, tvOS, watchOS, or visionOS components that do not belong in a browser application.

The design must help visitors understand the project, explore abandoned lunar and Martian equipment, inspect scientific and historical information, and move between immersive 3D exploration and readable evidence. The interface must feel like one coherent product. Every screen must use the same rules for hierarchy, alignment, spacing, behavior, and responsive adaptation.

### 1.1 Mandatory references

- Apple Human Interface Guidelines: <https://developer.apple.com/design/human-interface-guidelines/>
- Apple HIG — Layout: <https://developer.apple.com/design/human-interface-guidelines/layout>
- Apple HIG — Design principles: <https://developer.apple.com/design/human-interface-guidelines/design-principles>
- Apple HIG — Accessibility: <https://developer.apple.com/design/human-interface-guidelines/accessibility>
- Apple HIG — Typography: <https://developer.apple.com/design/human-interface-guidelines/typography>
- Apple HIG — Color: <https://developer.apple.com/design/human-interface-guidelines/color>

Use the current official HIG content when a design decision needs clarification. Do not treat a screenshot, trend, template, or personal preference as a replacement for HIG guidance.

### 1.2 Rule precedence

The following rules apply in this order:

1. User safety, factual accuracy, privacy, and accessibility must not be weakened.
2. Applicable Apple HIG principles and this `DESIGN.md` are mandatory.
3. Existing NEBULA X functionality, project architecture, content, data, 3D assets, and established visual identity must be preserved.
4. Impeccable may improve execution only inside these boundaries.

A conflict between these requirements is a **design blocker**. Do not silently choose one rule, invent an exception, or continue with a contradictory implementation. Report the conflict and identify the affected screen or component.

### 1.3 Meaning of “no deviation”

No implementation may ignore, contradict, or casually reinterpret a rule in this document. Do not add a new visual pattern because it is fashionable. Do not remove a required feature because a simpler mockup is easier to produce. Do not replace a working interface with an unrelated Apple-style imitation.

The HIG describes principles and platform-specific behavior. It does not require a web application to use SwiftUI, UIKit, Liquid Glass, Dynamic Island behavior, or native Apple controls. For NEBULA X, implement the equivalent user-centered result with semantic HTML, CSS, React, and browser capabilities.

---

## 2. Product identity and design intent

NEBULA X 2.0 is an educational space-exploration experience. Its visual language must support planetary science, engineering history, mission records, discovery, and evidence-based storytelling.

The interface must communicate three things clearly:

1. **Where the visitor is:** the current mission, equipment group, scene, panel, or activity.
2. **What the visitor is viewing:** a 3D object, location, historical event, scientific record, interpretation, or activity.
3. **What the visitor can do next:** inspect, navigate, compare, read, listen, answer, or return.

Use a deliberate, technically credible visual style. It may feel immersive and cinematic, but it must remain readable and useful. Atmosphere must never reduce information clarity.

### 2.1 Preserve the project identity

- Retain the existing NEBULA X logo, established color palette, typography choices, 3D art direction, textures, and recognizable visual features unless a documented defect requires a correction.
- Do not replace the product identity with a generic dashboard, generic SaaS layout, copied Apple interface, or unrelated space-game template.
- Do not add decorative elements that compete with the mission equipment or the information about it.
- Use visual effects to support depth, context, and focus. Do not use effects only to make a screen look more complex.
- Keep the distinction between the 3D environment and the interface controls clear.

### 2.2 Feature preservation is mandatory

A design task is not permission to reduce product scope. Preserve all existing equipment groups, models, scenes, textures, environments, lighting, animations, camera controls, navigation, story content, source references, scanning and discovery flows, quiz functions, comparison tools, narration, image inspection, and certificate generation.

Do not replace a 3D scene with a static image. Do not remove a feature because it needs a different responsive arrangement. Do not use placeholder content to represent a completed feature. If a feature cannot fit in the current layout, redesign its presentation while retaining its behavior.

---

## 3. Layout foundations

Layout is the structure that helps visitors understand the content from the moment a screen opens. It must establish familiar relationships between information and controls. A visitor must be able to identify the main content, understand related controls, and move through the experience without having to guess.

### 3.1 Establish a clear page structure

Every screen must have a deliberate structure. Define its primary content region, supporting content, navigation, and actions before adjusting visual details.

- Place the most important content in the first visible reading area.
- Keep navigation in a consistent location and use consistent labels and behavior.
- Keep primary actions close to the content they affect.
- Keep supporting information visually subordinate to the primary task.
- Give each page one clear visual starting point.
- Avoid layouts in which several panels compete for equal attention without a clear reason.
- Do not hide essential information below decorative elements or behind controls.

Do not force every screen into an identical template. Use a consistent design system, but allow the structure to fit the content and task.

### 3.2 Reading order and visual hierarchy

Order information by importance. Visitors generally scan from top to bottom and from the leading side to the trailing side. Place the page title, primary subject, essential status, and principal action where visitors can find them early.

- Use heading levels in a logical sequence. Do not select a heading level only because its default size looks convenient.
- Use size, weight, contrast, spacing, and position to communicate importance.
- Keep the main heading visually distinct from section headings and supporting labels.
- Keep labels close to the controls or values they describe.
- Do not use color as the only way to communicate status or meaning.
- Avoid large, low-value headings that push the actual content out of the first view.
- Keep important actions visible without making every action visually primary.

The hierarchy must remain understandable when the layout becomes narrow, short, or text-heavy.

### 3.3 Alignment and indentation

Alignment makes information easier to scan. Visitors interpret aligned items as related. They can interpret indentation as a sign that an item belongs to, or is subordinate to, the item above it.

- Align related headings, body text, metadata, controls, and card edges to a deliberate grid.
- Use the same alignment rule for repeated components of the same type.
- Use indentation only when it expresses a real information relationship.
- Do not use arbitrary offsets to create visual variation.
- Do not align unrelated content in a way that suggests a false relationship.
- Keep text columns readable. Do not stretch long paragraphs across the full width of a large display.

### 3.4 Group related content

Group information and actions that belong together. Use spacing first. Use borders, background surfaces, or separators only when they make the relationship clearer.

- Keep a title, description, metadata, and related action together.
- Separate unrelated sections with enough space to make the boundary clear.
- Use a card only when the content forms a meaningful unit.
- Do not wrap every paragraph, label, or small control in its own card.
- Use separators consistently. A separator must clarify structure, not decorate empty space.
- Keep repeated items consistent in their internal spacing and alignment.

### 3.5 Progressive disclosure

Present the information needed for the current task first. Reveal secondary or advanced information when the visitor asks for it or reaches the relevant step.

Use tabs, accordions, expandable details, menus, nested views, or scrollable sections only when they reduce complexity and remain discoverable.

- Do not hide essential facts, warnings, evidence, or primary actions behind an unnecessary interaction.
- Label expandable controls so visitors understand what they reveal.
- Preserve the visitor's place when a panel expands or closes.
- Keep the open/closed state clear.
- Do not use progressive disclosure to conceal missing content or avoid explaining a complex subject.

### 3.6 Separate controls from content

Controls must look and behave like controls. Content must look and behave like content. A visitor must not mistake a decorative element for an action or mistake a control for a heading or data value.

- Give buttons, navigation, inputs, toggles, and other interactive elements a consistent control style.
- Provide clear hover, focus, pressed, selected, disabled, and loading states where applicable.
- Keep controls visually distinct from the 3D scene and from scientific evidence.
- Do not place essential controls over visually busy areas without a legible supporting surface.
- Do not use blur, transparency, glow, or glass effects as a substitute for contrast.
- Use translucent surfaces only when they preserve legibility over every supported background state.

### 3.7 Full-screen backgrounds and overlays

A background may extend across the full viewport when it supports the experience. Navigation, inspectors, and control panels must remain readable when placed over it.

- Keep important subject details visible when side panels or overlays cover part of the background.
- Position and scale background artwork deliberately. Do not distort its aspect ratio.
- Use a controlled gradient, solid surface, or blur only when needed to protect text and controls.
- Do not let a background image, animation, or star field reduce text contrast.
- On scroll, keep fixed or sticky controls visually separate from the moving content.
- Prevent overlays and panels from covering the only usable navigation or the main interactive target.

Liquid Glass is an Apple platform material. It is not a requirement to imitate that material in a web application. Use a web-appropriate surface that meets the same purpose: clear separation between controls and content, readable text, and predictable interaction.

---

## 4. Adaptability and responsive behavior

The interface must adapt to the space that is actually available. Do not design only for one device, one screen size, or one orientation. A visitor may resize a browser window, use a tablet in split view, rotate a device, zoom the page, enlarge text, or use a display with a different aspect ratio.

### 4.1 Use available space, not device labels

Choose layout changes based on the available viewport and component space. Do not use device-name detection as the primary layout rule. A tablet can have a narrow window. A desktop window can be narrow. A phone can be in landscape orientation.

Use CSS media queries, container queries, flexible grids, and content-driven breakpoints. A breakpoint must exist because the current layout no longer has enough space, not because a device is called a phone, tablet, or desktop.

### 4.2 Required layout states

Design and test all four width/height conditions. These are web equivalents of the compact and regular size combinations described in Apple HIG. They are not Apple device classifications.

| Available space | Required behavior |
|---|---|
| Compact width, compact height | Use a compact composition. Prioritize the main subject and essential controls. Allow secondary panels to become drawers, dialogs, or clearly labeled expandable sections. Avoid controls that require excessive vertical space. |
| Compact width, regular height | Use a single primary content column. Stack content that cannot remain readable side by side. Keep the main action near the relevant content. Permit vertical scrolling where needed. |
| Regular width, compact height | Reduce unnecessary vertical spacing. Keep the primary subject and essential controls visible. Use horizontal arrangements only when they do not compress text or controls. |
| Regular width, regular height | Use the available space for a balanced composition. Side-by-side content is allowed when it improves comparison or exploration. Keep text columns constrained and preserve clear separation between the 3D scene and supporting information. |

Do not assume that a particular orientation always produces a particular layout state. Measure available space and test the actual combinations.

### 4.3 Preserve functionality across layout states

The function of the product must remain consistent as the viewport changes. A smaller screen may show fewer controls at one time, but it must not remove the underlying capability.

- Keep all navigation destinations available.
- Move secondary actions into a clearly labeled overflow or disclosure control when required.
- Keep the same data, mission details, and interactions available across sizes.
- Do not disable a feature only because the screen is narrow.
- Do not change the meaning of a control when it moves to another location.
- Keep responsive changes recognizable and predictable.

### 4.4 Text resizing and content growth

The interface must tolerate browser zoom, larger text settings, longer labels, translated text, and content that spans multiple lines.

- Do not use fixed heights for text containers when the content can grow.
- Allow buttons, rows, cards, and panels to increase in height when text wraps.
- Let horizontal groups stack when the available width is insufficient.
- Prevent text from overlapping icons, badges, or adjacent controls.
- Do not clip headings or labels to preserve a preferred visual shape.
- Use scalable CSS units and responsive type sizes where appropriate.
- Test the layout at 200% browser zoom.

### 4.5 Background artwork and aspect ratio

When the viewport changes, scale background artwork to maintain a deliberate composition. Do not stretch an image or texture to force it into a new aspect ratio.

- Preserve the source artwork's aspect ratio.
- Use `object-fit`, `background-size`, and `object-position` intentionally.
- Keep the important subject inside the visible crop.
- Allow nonessential artwork to extend beyond the visible edge when required.
- Test very wide, short, narrow, and tall viewports.
- Do not crop away a mission object, navigation label, or important contextual feature.

### 4.6 Responsive validation

Test the smallest and largest supported layouts first. Then test intermediate sizes and unusual aspect ratios. Look for clipped content, overlapping controls, unreadable text, excessive empty space, broken scroll behavior, and changes in the 3D camera composition.

Do not mark a layout responsive because it has a media query. It is responsive only when the complete screen remains usable at the tested sizes.

---

## 5. Safe areas, margins, and content guides

A content guide is an alignment boundary that helps position and size interface elements. A safe area is the part of the visible window that is not obstructed by browser chrome, device cutouts, or persistent interface controls.

### 5.1 Page margins and content width

- Use consistent horizontal page margins at the same layout state.
- Keep primary content aligned to a shared content grid.
- Constrain long-form text to a readable measure.
- Allow immersive artwork and the 3D scene to use more width when the experience requires it.
- Do not make every content section full width by default.
- Keep enough space between the viewport edge and interactive controls.
- Avoid horizontal scrolling unless it is a deliberate, discoverable interaction such as a carousel.

### 5.2 Browser and device safe areas

Respect browser viewport constraints and device safe-area insets when the application uses edge-to-edge layouts or fixed controls.

- Use the CSS `env(safe-area-inset-*)` values where supported and relevant.
- Keep fixed navigation and action bars away from device cutouts and system gesture areas.
- Ensure sticky headers and overlays do not cover the focused element or the current section heading.
- Ensure the final content item can scroll fully above a fixed footer or action bar.
- Do not copy Apple TV's fixed point margins or other native platform measurements into the web application. Use responsive web spacing based on actual viewport and content needs.

### 5.3 Sticky and fixed controls

Persistent controls must remain useful without taking too much space.

- Use sticky positioning only when it helps the current task.
- Keep sticky elements visually separated from scrolling content.
- Do not place critical controls at the bottom edge where they can be obscured by browser UI or device gestures.
- On short windows, allow controls to move into the normal document flow or a compact menu.
- Prevent fixed elements from covering important content, form fields, or keyboard focus.

---

## 6. Grids, cards, and collections

Grids are for related items that benefit from repeated alignment. Use a grid for equipment collections, mission cards, related records, or image collections only when the relationship is clear.

### 6.1 Grid structure

- Select the number of columns from the available content width and the minimum readable item width.
- Use consistent horizontal and vertical gaps.
- Keep card widths and internal padding consistent within the same grid.
- Allow columns to reduce or stack as the available width decreases.
- Avoid fixed column counts that cause horizontal overflow.
- Do not squeeze text or controls to preserve a chosen number of columns.
- Align row titles and the items that belong to them.

Use CSS Grid or Flexbox according to the structure. Do not simulate a grid with arbitrary margins or absolute positioning.

### 6.2 Card behavior

A card must represent a complete, meaningful item. Its content order must be consistent: identity, key information, supporting details, and the action when present.

- Keep the most useful identifying information easy to scan.
- Use a consistent image ratio for cards in the same collection unless the content requires a documented exception.
- Keep card actions in a predictable location.
- Do not make a whole card clickable when it contains several independent actions unless the interaction model is unambiguous and accessible.
- Make focus and hover states clear without causing nearby cards to overlap.
- Ensure long titles and metadata wrap without changing the card into an unusable shape.

### 6.3 Carousels and partially visible content

A carousel must communicate that more content is available. Do not use a carousel when a simple grid or list makes comparison easier.

- Keep navigation controls visible and keyboard accessible.
- Do not make the next item look accidentally clipped.
- If partial items are used to signal additional content, keep the visible edge treatment balanced.
- Provide enough spacing so focus, hover, and expanded states do not collide with adjacent content.
- Support touch, pointer, and keyboard interaction where applicable.
- Do not trap keyboard focus inside a carousel.

---

## 7. NEBULA X 3D layout and spatial content

The 3D experience is a core product feature. It must remain visually important and fully functional. The surrounding interface must support it without obstructing it.

### 7.1 3D scene composition

- Give the scene a clearly defined container with a predictable aspect ratio or a deliberate full-viewport composition.
- Keep the model, target object, and important scene context inside the visible camera frame.
- Resize the renderer when its container changes size.
- Keep camera framing and controls usable at compact and regular widths.
- Avoid allowing labels, panels, or buttons to collide with the model.
- Place inline 3D content inside the content layout with enough inset space to avoid clipping at the container edge.
- Use a dedicated immersive area when the primary task is 3D exploration.
- Do not force a large 3D model into a small decorative card if the visitor needs to inspect it.

### 7.2 Scene controls and overlays

Controls that affect the 3D scene must be grouped and clearly associated with that scene.

- Keep camera, zoom, reset, inspect, and scene navigation controls in predictable positions.
- Provide visible labels or accessible names for icon-only controls.
- Use a legible control surface when controls overlay a complex scene.
- Keep the scene interactive when supporting panels open, unless a modal intentionally blocks the scene.
- Do not let a panel cover the selected object or the only available scene control.
- Provide a clear close or return action for inspectors and overlays.

### 7.3 Responsive 3D behavior

- Recalculate renderer dimensions when the scene container changes size.
- Preserve model proportions. Never stretch the rendered scene to fill a new container.
- Adjust camera framing for compact layouts when necessary.
- Keep touch gestures and pointer controls from conflicting with page scrolling.
- Provide an accessible alternative path to important information contained in the scene.
- Respect reduced-motion preferences where possible. Do not rely on animation alone to communicate state.
- Avoid unnecessary particle effects, camera shake, or continuous movement that makes reading or interaction difficult.

### 7.4 3D scene integrity

Do not replace the project's actual models, materials, textures, environments, lighting, and animations with generic stock assets or static placeholders. A visual refinement must preserve the identity and behavior of each scene. Any required scene change must be tested against every affected equipment group, not only the first scene that appears.

---

## 8. Visual system

This section defines how visual styles must be used. It does not authorize an arbitrary redesign of the existing NEBULA X palette or brand.

### 8.1 Color

Preserve the project's established color palette. First inspect the existing design tokens and stylesheets. Then assign semantic roles to the existing colors, such as page background, elevated surface, primary text, secondary text, border, accent, success, warning, and error.

- Use color to communicate hierarchy and state, not as decoration without purpose.
- Keep text readable on every background and overlay.
- Do not rely on color alone for status or meaning.
- Use one consistent meaning for each semantic color.
- Avoid adding new accent colors without a documented need.
- Keep gradients and glows restrained. They must not compete with content.
- Test color contrast in default, hover, focus, selected, disabled, and error states.

Use WCAG 2.2 AA as the minimum implementation target: 4.5:1 contrast for normal text, 3:1 for large text, and 3:1 for meaningful non-text controls and visual boundaries. If the existing palette does not meet these values, correct the affected combination without changing the identity unnecessarily.

### 8.2 Typography

Typography must establish a clear reading order and remain readable at every supported size.

- Preserve the established project typeface unless a verified readability or rendering issue requires a change.
- Use a small, consistent type scale with clear roles for display titles, page headings, section headings, body text, labels, metadata, and captions.
- Use weight to distinguish hierarchy. Do not use bold text everywhere.
- Keep body text comfortable to read and constrain long text blocks.
- Use line height that supports scanning and reading.
- Avoid long passages in all caps.
- Do not use tiny labels for essential information.
- Ensure numbers, units, dates, and mission identifiers remain legible.
- Allow text to wrap and containers to grow.

### 8.3 Spacing and density

Use the existing spacing tokens when available. If the project has no consistent spacing scale, establish a 4 CSS-pixel base scale and apply it consistently. This is a project implementation token, not a claim that Apple HIG mandates a 4-pixel web grid.

- Use smaller spacing for related elements.
- Use larger spacing to separate different groups and sections.
- Keep internal padding consistent across components of the same type.
- Do not use spacing to conceal weak hierarchy.
- Avoid both cramped layouts and excessive empty space.
- Keep the density appropriate to the task: evidence panels may contain more information than a landing screen, but they must remain structured and scannable.

### 8.4 Surfaces, borders, and depth

Use surfaces to show hierarchy and interaction boundaries. Keep the visual system restrained and consistent.

- Define a small set of surface levels and use them consistently.
- Use borders when a boundary needs to be explicit.
- Use shadows only when they clarify elevation or focus.
- Do not apply a heavy shadow to every card.
- Do not stack multiple blur or glass layers without a clear functional purpose.
- Keep text and controls legible over translucent surfaces.
- Avoid unnecessary rounded containers inside other rounded containers.

### 8.5 Icons and imagery

- Use one consistent icon family and consistent stroke or fill treatment.
- Use icons that communicate a known action or category.
- Give icon-only controls accessible names.
- Do not use emoji as a replacement for functional icons.
- Preserve the aspect ratio and quality of project imagery and textures.
- Use imagery that supports the specific mission or equipment being described.
- Do not use decorative images that imply false mission evidence.

---

## 9. Controls and interaction behavior

Every control must communicate what it does and provide feedback after interaction.

### 9.1 Buttons and actions

- Use one primary action for the main task in a given region.
- Use secondary styling for supporting actions.
- Use destructive styling only for actions that remove or reset user data or state.
- Use action labels that describe the result, not vague labels such as “Click here”.
- Keep button size and spacing consistent within the same context.
- Prevent duplicate submission while an action is processing.
- Provide a visible disabled state and explain unavailable actions when the reason is not obvious.

### 9.2 Navigation

- Keep navigation labels and destinations consistent.
- Show the current location clearly.
- Ensure navigation works with keyboard and pointer input.
- On compact layouts, use a clear alternative such as a menu or drawer without removing destinations.
- Preserve the visitor's context when moving between related views where practical.

### 9.3 Dialogs and inspectors

- Use a dialog only when the task requires focused attention or a temporary decision.
- Keep the dialog's title, content, and actions in a clear hierarchy.
- Provide a clear close or cancel action.
- Keep dialogs within the visible viewport and allow their content to scroll when required.
- Do not open a dialog for information that belongs naturally in the page.
- Return focus to the element that opened the dialog when it closes.

### 9.4 Interaction states

Every interactive component must have the states that apply to it: default, hover, focus-visible, pressed, selected, disabled, loading, and error. State changes must be visible and must not depend on color alone.

Do not use hover as the only way to reveal important information. Touch devices and keyboard users do not have the same hover behavior as a mouse user.

---

## 10. Accessibility and input support

Accessibility is part of the layout and interaction design. It is not a final visual patch.

- Use semantic HTML elements for headings, navigation, buttons, forms, lists, and dialogs.
- Keep heading order logical.
- Support full keyboard navigation.
- Provide a clearly visible focus indicator.
- Do not remove the browser focus outline without providing an equally visible replacement.
- Give form fields persistent labels and useful error messages.
- Give meaningful images alternative text. Treat purely decorative images as decorative.
- Provide accessible names for icon-only buttons.
- Maintain sufficient contrast for text, controls, focus states, and status indicators.
- Do not use motion, sound, or color as the only way to communicate important information.
- Respect `prefers-reduced-motion`.
- Ensure modals manage focus correctly and do not create keyboard traps.
- Make important information available as text, even when it is also shown in the 3D scene or through narration.

Test with keyboard-only navigation and at least one screen reader supported by the target browser environment.

---

## 11. Motion, audio, and feedback

Motion and sound must support the task. They must not prevent visitors from reading, navigating, or understanding the interface.

- Use animation to show a state change, transition, spatial relationship, or meaningful event.
- Avoid continuous decorative movement behind long-form text.
- Keep transitions consistent in speed and behavior.
- Respect reduced-motion settings and provide a usable static state.
- Do not use flashing effects.
- Keep narration controls visible and understandable.
- Provide clear play, pause, stop, and replay behavior where applicable.
- Stop or clean up audio resources when narration ends, when the visitor stops it, or when the related view is removed.
- Do not start unexpected audio without a clear visitor action.
- Give feedback after scan, quiz, comparison, and certificate actions.
- Do not award progress before the visitor completes the action that the progress represents.

---

## 12. Content, evidence, and trust

Visual design must not make unverified information look official or scientifically confirmed.

- Separate documented mission facts from interpretation, dramatization, and unverified information.
- Place source references near the claims they support.
- Use consistent labels for source and verification status.
- Do not use “NASA verified”, “official NASA”, “NASA accredited”, or equivalent claims unless the project has direct evidence and authorization for that exact claim.
- Describe generated certificates as project-generated certificates. Do not present a random code as an external verification service.
- Do not use a decorative badge or seal that implies government or agency approval.
- Keep dates, mission names, equipment names, and location labels consistent with the evidence available to the project.

A visually polished false claim is still a design failure.

---

## 13. Responsive implementation rules

Impeccable and all implementation agents must follow these rules when changing code.

1. Inspect the existing page, components, CSS tokens, and responsive behavior before editing.
2. Identify the content hierarchy and the current layout constraints.
3. State the specific problem and the HIG principle that applies.
4. Make the smallest complete change that solves the problem.
5. Reuse existing components and design tokens where possible.
6. Use responsive CSS rather than hard-coded device detection.
7. Keep semantic structure and accessible interactions intact.
8. Preserve all project features, assets, data, and 3D behavior.
9. Test the affected component at compact and regular widths and heights.
10. Test long text, zoom, keyboard focus, and overlays where relevant.
11. Check for regressions in adjacent components and all scenes that share the changed styles.
12. Record any test that could not be completed. Never report an untested state as verified.

### 13.1 CSS and component quality

- Prefer shared tokens and reusable components over repeated one-off values.
- Avoid broad selectors that unintentionally change unrelated screens.
- Avoid `!important` unless a documented integration constraint makes it necessary.
- Avoid absolute positioning for normal document layout.
- Use fixed positioning only for controls that must remain attached to the viewport.
- Avoid fixed heights for content that can grow.
- Avoid horizontal overflow at supported widths.
- Keep component state and visual state synchronized.
- Remove obsolete styles only after confirming that no component or 3D scene depends on them.
- Do not introduce a new dependency for a small styling change without a clear technical reason.

### 13.2 Strict prohibitions

Impeccable must not:

- Redesign the product from scratch.
- Replace the NEBULA X identity with an Apple clone or generic template.
- Remove, hide, stub, or disable an existing feature.
- Replace 3D models or scenes with static images.
- Replace real project content with placeholder text or fake data.
- Change scientific claims without checking the project's source evidence.
- Add unsupported NASA or agency approval language.
- Break keyboard access to simplify the visual layout.
- Use blur, gradients, shadows, animation, or glow as decoration without a defined purpose.
- Make a layout that works only at one screen size.
- Claim that a change is complete without testing the affected behavior.

---

## 14. Required design review and acceptance criteria

A change is complete only when all applicable checks pass. Use the following status values in the review report:

- **PASS** — tested and meets the requirement.
- **FAIL** — tested and does not meet the requirement.
- **PARTIALLY VERIFIED** — some, but not all, required states were tested.
- **NOT TESTED** — no test was performed.
- **BLOCKED** — a dependency or missing requirement prevented testing.

### 14.1 Layout and hierarchy

- [ ] The primary purpose of the screen is clear on first view.
- [ ] The main subject and primary action have the correct visual priority.
- [ ] Related content and controls are grouped logically.
- [ ] Alignment and indentation communicate real relationships.
- [ ] Secondary information uses progressive disclosure only when appropriate.
- [ ] Controls are visually distinct from content.
- [ ] Text blocks remain readable and do not become excessively wide.

### 14.2 Adaptability

- [ ] Compact width and compact height are usable.
- [ ] Compact width and regular height are usable.
- [ ] Regular width and compact height are usable.
- [ ] Regular width and regular height are usable.
- [ ] Portrait and landscape layouts are usable where supported.
- [ ] Browser resizing does not break the layout.
- [ ] 200% zoom does not hide or overlap content.
- [ ] Longer text does not clip, overlap, or break controls.
- [ ] Background artwork keeps its aspect ratio and important subject details.
- [ ] No unintended horizontal scrolling occurs.

### 14.3 Grid and components

- [ ] Repeated items use consistent alignment and spacing.
- [ ] Grid columns adapt to the available width.
- [ ] Cards do not clip long text or important actions.
- [ ] Hover and focus states do not cause unwanted overlap.
- [ ] Carousels, if used, expose additional content and support keyboard input.

### 14.4 3D experience

- [ ] The scene resizes with its container.
- [ ] Models keep their proportions.
- [ ] Camera framing remains useful at compact and regular sizes.
- [ ] Scene controls remain visible and operable.
- [ ] Panels and dialogs do not block essential scene interaction.
- [ ] All affected equipment scenes retain their models, materials, textures, lighting, and behavior.

### 14.5 Accessibility and interaction

- [ ] Keyboard users can reach and operate every interactive control.
- [ ] Focus is visible and not hidden by overlays.
- [ ] Buttons and fields have meaningful accessible names or labels.
- [ ] Interaction states are clear.
- [ ] Contrast meets the stated WCAG 2.2 AA targets.
- [ ] Reduced-motion preferences are respected.
- [ ] Audio starts, stops, and cleans up correctly.
- [ ] Dialogs open, close, and return focus correctly.

### 14.6 Integrity and regression

- [ ] Existing features remain available and functional.
- [ ] Mission and equipment content remains intact.
- [ ] Sources and verification labels remain accurate.
- [ ] No unsupported official or NASA accreditation claim is introduced.
- [ ] No unrelated page or scene regressed because of a shared CSS change.
- [ ] The production build and relevant tests were run, or the report clearly states why they were not run.

---

## 15. Required report from Impeccable

After each design task, provide a short report with:

1. **Scope:** the pages and components inspected or changed.
2. **HIG basis:** the relevant layout or interaction principle applied.
3. **Changes:** the specific visual and structural changes made.
4. **Preservation check:** the features, assets, and 3D scenes confirmed unchanged.
5. **Responsive checks:** the viewport states tested.
6. **Accessibility checks:** keyboard, focus, text, contrast, and reduced-motion checks performed.
7. **Build and test result:** exact commands run and their result.
8. **Open issues:** every failed, partially verified, untested, or blocked item.

Do not use statements such as “fully responsive”, “pixel perfect”, “HIG compliant”, or “all tests passed” unless the report contains the tests and evidence that support the statement.

---

## 16. Final directive

Treat this file as the mandatory design contract for NEBULA X 2.0. Apply Apple HIG principles to every applicable design decision. Follow the exact layout requirements in this document. Preserve the existing product identity, functionality, scientific integrity, and 3D experience.

**Do not deviate from this `DESIGN.md` or applicable Apple HIG guidance. Do not invent exceptions. When a requirement is unclear or conflicts with the current implementation, stop that part of the work and report the precise blocker.**

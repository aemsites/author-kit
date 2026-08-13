# Author Kit
For projects that want a few more batteries. Built by the team who brought you da.live and adobe.com.

## Getting started

### 1. Github
1. Use this template to make a new repo.
1. Install [AEM Code Sync](https://da.live/bot).

### 2. DA content
1. Browse to https://da.live/start.
2. Follow the steps.

### 3. Local development
1. Clone your new repo to your computer.
1. Install the AEM CLI using your terminal: `sudo npm install -g @adobe/aem-cli`
1. Start the AEM CLI: `aem up`.
1. Open the `{repo}` folder in your favorite code editor and build something.
1. **Recommended:** Install common npm packages like linting and testing: `npm i`.

## Syncing from template
Every project made from this template gets its own history and is a snapshot in time. If you want the latest code from this template, the following commands are helpful. Be mindful of [the release notes](https://github.com/aemsites/author-kit/releases) for any potential impact to your existing project.

### Add remote named `template`
```bash
git remote add template https://github.com/aemsites/author-kit.git
```

### Get latest branches from the `template` remote
```bash
git fetch template
```

### Check out the file you want
```bash
git checkout template/main -- scripts/ak.js
```

## Docs

* [`AGENTS.md`](AGENTS.md) — how the code is organised: the load pipeline, the block contract, and
  the authoring conventions encoded in code. Written for coding agents, and the fastest orientation
  for people too.
* [`docs/adr/`](docs/adr/) — architecture decision records. Why the page lifecycle lives in
  `ak.js`, why sections load one at a time, why the browser floor has no fallbacks. Read these
  before changing something that looks arbitrary.
* [`docs/specs/`](docs/specs/) — designs for larger bodies of work.

## Features

### Flexible section authoring
* Optional containers to constrain content
* Grids: 1-6
* Columns: 1-12
* Color scheme: light, dark
* Gap: xs, s, m, l, xl, xxl
* Spacing: xs, s, m, l, xl, xxl
* Background: token / image / color / gradient

### Base content
* Universal buttons w/ extensive styles
* Images w/ retina breakpoint
* Color scheme support: light, dark
* Modern favicon support
* New window support
* Deep link support
* Modal support

### Icons / SVGs
* Turns `:name:` into `<svg ...><use href="/img/icons/<name>.svg#icon"></use></svg>`
* Supports `currentColor` via `fill` and `stroke`
* Supports design tokens — `style="fill: var(--color-<token>)"` in the file, following light/dark
* Complex use cases like off-origin or deep CSS selection supported via `loadHrefSvg` in `svg.js`
* Sanitize supplied SVGs with the [`svg-prep`](.agents/skills/svg-prep/SKILL.md) skill

### Header and footer content
* Brand - First link in header
* Main Menu - First list in header
* Actions - Last section of header
* Menu & mega menu support
* Disable header/footer via meta props

### Localization & globalization
* Language only support - Ex: en, de, hi, ja
* Region only support - Ex: en-us, en-ca, de-de, de-ch
* Hybrid support - Ex: en, en-us, de, de-ch, de-at
* Fragment-based localized 404s
* Localized Header & Footer
* Do not translate support (#_dnt)

### Scheduled content
* Schedule content using spreadsheets

### Sidekick & pre-production
* Quick Edit
* Extensible plumbing for plugins
* Schedule simulator
* Convert production links to relative

### Performance
* Extensible LCP detection

### Developer tools
* Environment detection
* Extensible logging (console, coralogix, splunk, etc.)
* Buildless reactive framework support (Lit)
* Hash utils patterns (#_blank, #_dnt, etc)
* Modern CSS scoping & nesting
* AEM Operational Telemetry

### Operations
* Cloudflare Worker reference implementation

## Patterns
### Page
A page is what holds your content. It can be styled using a metadata property called `template` which will load styles that apply to the entire page.

### Section
A section is a sub-section of your page. It can be styled using a `section-metadata` block. A section will control the layout of blocks.

### Block
Blocks are children of sections. A block adds visual context to parts of a page.

### Auto Block
An auto block is a block generated from a pre-defined piece of content. Often times from a link that matches a particular pattern. Link-based auto blocks can be helpful when additional nesting of content is required.

### Default content
Default content is content that lives outside a block.

## Design System

### Spacing & Gap
XS, S, M, L, XL, XXL

### Emphasis
quiet, default, strong, negative

### Buttons
accent, primary, secondary, negative
(w/ outline variations)

### Columns
1 - 12

### Grid
1 - 6

### Color tokens
blue, gray, green, magenta, orange, red, purple, yellow
(w/ 100-900 variations)

### Color schemes
light, dark

# PDF-to-HTML accessibility test suite

Open `index.html` locally or upload the entire directory to any static web host (for example, GitHub Pages, Codeberg Pages, or a plain HTTP server). Keep the HTML, CSS, and JS files in the same folder. There is no build process.

Nine test cases: 1A/1B (inline emphasis), 2A/2B/2C (pagination marker strategies), 3A/3B/3C/3D (page navigation strategies).

These represent ordinary HTML documents with page numbers corresponding to a hypothetical PDF, **not EPUB**. All sample documents refer to four numbered source pages. A page marker may occur in a paragraph, list item or table cell for the span strategy. The HR and section versions necessarily split structures.

The tests compare markup, not page layout fidelity. All page labels and navigation targets are generated explicitly. `3D.html` is the only case requiring JavaScript.

Known difference: splitting a list item at a source page boundary cannot preserve a single list item when using per-page sections or HR in between blocks; this is intentional and part of the test.

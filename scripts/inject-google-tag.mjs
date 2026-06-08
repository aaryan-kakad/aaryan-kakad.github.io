import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const measurementId = "G-E41VNBFVWM";

const snippet = `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${measurementId}');
</script>
`;

const existingTagPattern = new RegExp(
  `<!-- Google tag \\(gtag\\.js\\) -->[\\s\\S]*?gtag\\('config', '${measurementId}'\\);[\\s\\S]*?</script>\\s*`,
  "g"
);

function htmlFiles(dir) {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      files.push(...htmlFiles(fullPath));
    } else if (entry.endsWith(".html")) {
      files.push(fullPath);
    }
  }

  return files;
}

for (const file of htmlFiles(outDir)) {
  const html = readFileSync(file, "utf8");
  const withoutExistingTag = html.replace(existingTagPattern, "");

  if (!withoutExistingTag.includes("<head>")) {
    continue;
  }

  const withTag = withoutExistingTag.replace("<head>", `<head>${snippet}`);
  writeFileSync(file, withTag);
}

const fs = require('fs');

/**
 * Returns all entrypoint chunks (JS and CSS) of the React app. These chunks
 * will not need to be precached because they're already requested from the HTML
 * file)
 *
 * @param {string} assetManifestPath: Path to the asset manifest file from which
 * the entrypoint files can be read
 */
function getEntrypoints(assetManifestPath) {
  if (!fs.existsSync(assetManifestPath)) {
    throw Error(
      `Cannot determine entrypoints: No asset manifest found at path ${assetManifestPath}`
    );
  }
  const manifest = fs.readFileSync(assetManifestPath, { encoding: 'utf8' });
  const manifestContent = [];

  for (const [key, value] of Object.entries(JSON.parse(manifest))) {
    manifestContent.push(value);
  }

  return manifestContent;
}

module.exports = getEntrypoints;

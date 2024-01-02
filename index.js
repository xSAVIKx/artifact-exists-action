const core = require("@actions/core");
const artifactClient = require("@actions/artifact");
const fs = require("fs");

async function run() {
  try {
    const name = core.getInput("name", { required: true });
    const tempArtifactPath = fs.mkdtempSync("artifactExists") + `/${name}`;
    // download a single artifact
    core.info(
      `Starting download for ${name}. Temporary storing at ${tempArtifactPath} if exists.`,
    );
    try {
      const downloadResponse = await artifactClient.getArtifact(name);
      core.info(
        `Artifact ${downloadResponse.artifact.name} exists and has ID ${downloadResponse.artifact.id}.`,
      );
      core.setOutput("exists", true);
    } catch (err) {
      core.info(`Artifact ${name} does not exist.`);
      core.setOutput("exists", false);
    }
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();

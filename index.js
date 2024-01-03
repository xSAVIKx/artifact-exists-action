const core = require("@actions/core");
const artifactClient = require("@actions/artifact");
const fs = require("fs");

async function getArtifact(name) {
  try {
    const allArtifacts = await artifactClient.listArtifacts();
    core.warning(`AllArtifacts: ${JSON.stringify(allArtifacts)}`)
    const getArtifactResponse = await artifactClient.getArtifact(name);
    core.info(
        `Artifact ${getArtifactResponse.artifact.name} exists 
        and has ID ${getArtifactResponse.artifact.id}.`,
    );
    return getArtifactResponse;
  } catch (err) {
    core.info(`Artifact ${name} does not exist.`);
  }
  return null;
}

async function run() {
  try {
    const name = core.getInput("name", { required: true });
    const tempArtifactPath = fs.mkdtempSync("artifactExists") + `/${name}`;
    // download a single artifact
    core.info(
      `Starting download for ${name}. Temporary storing at ${tempArtifactPath} if exists.`,
    );
    let artifactResponse = await getArtifact(name);
    if (artifactResponse == null && !name.endsWith(".zip")) {
      artifactResponse = await getArtifact(`${name}.zip`);
    }
    if (artifactResponse != null) {
      core.setOutput("exists", true);
    } else {
      core.setOutput("exists", false);
    }
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();

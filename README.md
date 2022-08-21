# Artifact Exists Action

This action checks if an artifact exists and is available in the workflow.

## Inputs

* `name`(**Required**) - The name of the artifact to be checked.

## Outputs

* `exists` - Determines if the artifact with the provided name is present.

## Example usage

```yaml
uses: xSAVIKx/artifact-exists-action@v0
with:
  name: 'coverage-artifact'
```

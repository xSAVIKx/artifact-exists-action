# Artifact Exists Action

This action checks if an artifact exists and is available in the workflow.

**Note**: The action is currently only compatible with `upload-artifact` action v1-v3 
(the v4 version) has migrated to the newer API where the `artifact-id` is now required over 
the artifact name.

## Inputs

- `name`(**Required**) - The name of the artifact to be checked.

## Outputs

- `exists` - Determines if the artifact with the provided name is present.

## Example usage

```yaml
uses: xSAVIKx/artifact-exists-action@v0
with:
  name: "coverage-artifact"
```

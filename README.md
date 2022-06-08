# Artifact Exists Action

This actions checks if a particular artifact exists and is available in the worfklow.

## Inputs

## `name`

**Required** The name of the artifact to be checked.

## Outputs

## `exists`

Determines if the artifact is present or not.

## Example usage

```yaml
uses: actions/xSAVIKx/artifact-exists-action@v0
with:
  name: 'coverage-artifact'
```

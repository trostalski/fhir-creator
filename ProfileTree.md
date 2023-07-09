# ProfileTree
The engine behind the Fhir-creator is the profile tree. It is the internal data structure that is used to represent the FHIR data during the process of editing.
When editing is finished the actual json is created from the profileTree.

When doing backend development on FHIR-creator one will have to use the ProfileTree in one way or the other. Therefore this page provides a short overview of it's structure.

The profile tree is an array containing js objects.

[{},{}]

Each object represent a node in the tree. For each node the following properties are defined:
- baseID
- basePath
- childPaths
- dataPath
- element
  - base
  - comment
  - constraint [0]
    - expression
    - human
    - key
    - severity
    - source
    - xpath
  - definition
  - id
  - isModifier
  - isSummary
  - mapping
  - max
  - min
  - requirements
  - short
  - type
- isPrimitive
- isRootPrimitive
- parentDataPath
- value

The information contained in the nodes properties are extracted from the profiles structure definition.

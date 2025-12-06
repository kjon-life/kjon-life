# Cursor Rules for kjon-life

## Core Development Rules - MANDATORY
- [development_standards.mdc](./rules/development_standards.mdc) - Project Development standards and best practices
- [core-engineering.mdc](./rules/core-engineering.mdc) - Core engineering best practices
- [coding_style.mdc](./rules/coding_style.mdc) - Code formatting and style standards
- [type_boundary_standards.mdc]() - Type boundary consistency not clarified yet
- [writing_good_interfaces.mdc](./rules/writing_good_interfaces.mdc) - rules for writing good interfaces

## Language-Specific Rules
- [javascript_standards.mdc](./rules/javascript-standards.mdc) - JavaScript development with pnpm package manager

## Project-Specific Rules
- 

## Workflow Rules
- [current_workflow.mdc](./rules/current-workflow.mdc) - Task breakdown for 10-minute sprints

## Usage
Reference rules in development by using: `[rule_name]` in comments or commit messages.

Example commit message:
```
fix(types): apply consistent type boundaries [type_boundary_standards]

- Convert ScanList dictionary access to dataclass attributes
- Update parsers to accept ScanDetails dataclass instead of dict
- Maintain API->Client->Consumer type flow
```

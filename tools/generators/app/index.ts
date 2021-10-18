import {
  Rule,
  SchematicContext,
  Tree,
  chain,
  externalSchematic,
} from '@angular-devkit/schematics';

export default function generate({ name }: any): Rule {
  return (tree: Tree, _context: SchematicContext) =>
    chain([
      externalSchematic('@nrwl/angular', 'app', {
        name,
      }),
      externalSchematic('@angular/pwa', 'pwa', {
        project: name,
      }),
    ]);
}

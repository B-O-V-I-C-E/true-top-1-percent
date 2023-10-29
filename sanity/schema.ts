import { type SchemaTypeDefinition } from 'sanity'
import home from './schemas/home'
import projects from './schemas/projects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, projects],
}

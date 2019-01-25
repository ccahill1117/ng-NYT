import { Editor } from './models/editor.model';
import * as faker from 'faker';

export const EDITORS: Editor[] = [
  new Editor({name: faker.name.findName()}),
]

import { writeFile } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

export let createFile = promisify(writeFile);

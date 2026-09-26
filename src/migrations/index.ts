import * as migration_20260926_220141_initial from './20260926_220141_initial';

export const migrations = [
  {
    up: migration_20260926_220141_initial.up,
    down: migration_20260926_220141_initial.down,
    name: '20260926_220141_initial'
  },
];

import * as migration_20260926_220141_initial from './20260926_220141_initial';
import * as migration_20260927_010853_site_settings_navigation_developer_role from './20260927_010853_site_settings_navigation_developer_role';

export const migrations = [
  {
    up: migration_20260926_220141_initial.up,
    down: migration_20260926_220141_initial.down,
    name: '20260926_220141_initial',
  },
  {
    up: migration_20260927_010853_site_settings_navigation_developer_role.up,
    down: migration_20260927_010853_site_settings_navigation_developer_role.down,
    name: '20260927_010853_site_settings_navigation_developer_role'
  },
];

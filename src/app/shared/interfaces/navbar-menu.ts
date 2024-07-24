export interface Menu {
  title: string;
  path?: string;
  icon?: any;
  key: string;
  children?: MenuItem[];
}

export type MenuItem = Pick<Menu, 'title' | 'path'>;

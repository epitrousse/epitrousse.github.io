export interface BulletWithSubBullets {
  text: string;
  bullets: (string | BulletWithSubBullets)[];
}

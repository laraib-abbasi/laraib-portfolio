import { sql } from 'drizzle-orm'
import { db } from './db'
export type Project = { id:number; title:string; description:string; imageUrl:string|null; projectUrl:string|null; githubUrl:string|null; tags:string[]; featured:boolean; sortOrder:number }
export async function getProjects() { const result = await db.execute(sql`SELECT "id", "title", "description", "imageUrl", "projectUrl", "githubUrl", "tags", "featured", "sortOrder" FROM "projects" ORDER BY "sortOrder" ASC, "createdAt" DESC`); return result.rows as unknown as Project[] }

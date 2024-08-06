import { text, timestamp, pgTable, uuid } from 'drizzle-orm/pg-core';

export const profiles = pgTable('profile', {
    id: uuid('id').primaryKey(),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow()
});

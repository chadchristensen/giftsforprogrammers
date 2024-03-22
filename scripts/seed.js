import { db } from '@vercel/postgres';
import { categories, posts } from '../src/lib/mocks/seed-data.js';

async function seedCategories(client) {
    try {
        // ? What is EXTENSION?
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "categories" table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS categories (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(80) NOT NULL
        );
      `;

        console.log(`Created "categories" table`);

        // Insert data into the "categories" table
        const insertedCategories = await Promise.all(
            categories.map(async (category) => {
                return client.sql`
          INSERT INTO categories (id, name)
          VALUES (${category.id}, ${category.name})
          ON CONFLICT (id) DO NOTHING;
        `;
            }),
        );

        console.log(`Seeded ${insertedCategories.length} categories`);

        return {
            createTable,
            posts: insertedCategories,
        };
    } catch (error) {
        console.error('Error seeding categories:', error);
        throw error;
    }
}

async function seedPosts(client) {
    try {
        // ? What is EXTENSION?
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "posts" table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS posts (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          slug VARCHAR(255) NOT NULL UNIQUE,
          category_id UUID,
          description TEXT,
          image_src TEXT,
          image_alt_text VARCHAR(255),
          publish_date DATE,
          is_affiliate_link BOOLEAN DEFAULT FALSE,
          cta_text VARCHAR(120),
          cta_link TEXT,
          created_at TIMESTAMP DEFAULT NOW()
          updated_at TIMESTAMP
        );
      `;

        console.log(`Created "posts" table`);

        // Insert data into the "posts" table
        const insertedPosts = await Promise.all(
            posts.map(async (post) => {
                return client.sql`
          INSERT INTO posts (title, slug, category_id, description, image_src, image_alt_text, publish_date, is_affiliate_link, cta_text, cta_link)
          VALUES (${post.title}, ${post.slug}, ${post.categoryId}, ${post.description}, ${post.imageSrc}, ${post.imageAltText}, ${post.publishDate}, ${post.isAffiliateLink}, ${post.callToActionText}, ${post.callToActionLink})
          ON CONFLICT (id) DO NOTHING;
        `;
            }),
        );

        console.log(`Seeded ${insertedPosts.length} posts`);

        return {
            createTable,
            posts: insertedPosts,
        };
    } catch (error) {
        console.error('Error seeding posts:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedCategories(client);
    await seedPosts(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
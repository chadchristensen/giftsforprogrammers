import { faker } from '@faker-js/faker';
import { formatDateToYYYYMMDD, slugify } from '@/lib/utils';
import { Post } from '@/lib/definitions';

function createMockPosts(numberOfPosts = 5): Post[] {
    return Array.from(Array(numberOfPosts)).map((value) => {
        const postTitle = faker.lorem.words();
        const publishDate = faker.helpers.arrayElement([undefined, faker.date.past(), faker.date.future()]);
        const today = new Date();
        const status = !publishDate ? 'Draft' : publishDate > today ? 'Scheduled' : 'Published';

        return ({
            id: faker.string.uuid(),
            title: postTitle,
            slug: slugify(postTitle),
            description: faker.lorem.paragraphs({ min: 1, max: 4 }),
            category: faker.helpers.arrayElement(['Crib', 'Tech', 'Threads']),
            imageSrc: faker.image.url(),
            imageAltText: faker.lorem.words(),
            status: status,
            publishDate: publishDate ? formatDateToYYYYMMDD(publishDate.toDateString()) : "",
            isAffiliateLink: faker.datatype.boolean(),
            callToActionText: `Buy from ${faker.lorem.word({ length: { min: 3, max: 7 } })}`,
            callToActionLink: faker.internet.url()
        });
    })
};

const posts = createMockPosts(20);

export { posts };
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
    projectId: 'm77ho4qy',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: 'skJCaN4QA9IwHFtG4J0syyB7XaWxuTKUw1JGDDs7bHu6D0PaEpjdCxOUO4YUL4zeo3mFXEzU6mnYEIkjNCogLIb8Bp8gI6BNfn143QOuFT1YPVjYYpmqoqjZUoWFBEXoIShVDNH77fLjC5H8iwUOReKYQkcxu5OwcfxZ0eU3cm08vbhMCQF8'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
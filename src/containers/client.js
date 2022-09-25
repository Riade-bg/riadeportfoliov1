import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"


export const client = sanityClient ({
    projectId: 'pk9e79s0',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skNmdUjatOCyLeqpRj6JG3AZeXpjIasRMy4XrhQJvVLKYaKwGbQxCFBKfk4syLbYJ7KWHLy2hzYsYxAJVmpoPf8z3EkzljYXOFkSwAydplev7uGu99gsHF2n4BLW6rT3O2Okw9FSKdkZskZf02ZDipjT3m0D5Ezj5SmsG8ccOzgc9kF20Jdy',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
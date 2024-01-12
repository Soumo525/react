const conf = {
    appweiteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appweiteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appweiteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appweiteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appweiteBucketId: String(import.meta.env.VVITE_APPWRITE_BUCKET_ID)
}

export default conf
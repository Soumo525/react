import conf from "../../conf/conf";

import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service{

    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appweiteUrl)
            .setProject(conf.appweiteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);    
    }
////// Create Post
    async createPost({title,slug,content,feimage,status,userid}){
        try {
            return await this.databases.createDocument(
                conf.appweiteDatabaseId,
                conf.appweiteCollectionId,
                slug,
                {
                    title,
                    content,
                    feimage,
                    status,
                    userid
                }
            )
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug,{title,content,feimage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appweiteDatabaseId,
                conf.appweiteCollectionId,
                slug,
                {
                    title,
                    content,
                    feimage,
                    status
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appweiteDatabaseId,
                conf.appweiteCollectionId,
                slug,
                

            )
            return true;
        } catch (error) {
            throw error
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appweiteDatabaseId,
                conf.appweiteCollectionId,
                slug
            )
        } catch (error) {
            throw error
            return false;
        }
    }

    async getPost(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appweiteDatabaseId,
                conf.appweiteCollectionId,
                queries,
                  
                
            )
        } catch (error) {
            throw error
            return false
        }
    }

    //// file Upload

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appweiteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            throw error
            return false
        }
    }
///// Delete File 


    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appweiteBucketId,
                fileId

            )
        } catch (error) {
            throw error
            return false
        }
    }



    /// file Preview
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appweiteBucketId,
            fileId
        )
    }

}


const service = new Service()
export default service
import conf from "../conf/conf";

import {Client ,ID, Databases , Storage , Query } from 'appwrite';

export class Service {

    client = new Client();
    database;
    bucket;

    constructor(){
        this.client 
           .setEndpoint(conf.appwriteUrl)
           .setProject(conf.appwriteProjectId)
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)

    }

    async createPost({title,slug,content , featuredImage,status,userId}){
        try {
            return this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,//as a document id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error);
        }
    }

    //slug as a document id while updating we have direct access that's why here we take it saperatly
    async updatePost(slug,{title,content,featuredImage,status}){
      try {
        return await this.database.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }

        )
      } catch (error) {
        console.log("Appwrite Service :: updatePost :: error ", error);
      }
    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite Services :: deletePost :: error ", error);
            return false
        }
    }

    // get single post 
    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug 
            )
        } catch (error) {
            console.log("Appwrite Services :: getPost :: error ", error);
            return false
        }
    }

    //get all the post 
    async getPosts(quries = [Query.equal("status","active")] ){
       try {
         return await this.database.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
           quries,
    
         )
       } catch (error) {
        console.log("Appwrite Services :: getPosts :: error " , error);
       }
    } 

    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite Services :: uploadFile :: error ", error);
        }
    }

    //delete file
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true 
            
        } catch (error) {
            console.log("Appwrite Services :: deleteFile :: error ", error);
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service();
export default service;

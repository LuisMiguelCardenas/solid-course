import { PostService } from './05-dependency-b';
import { JsonDBService, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {

    const provider = new JsonDBService();

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();
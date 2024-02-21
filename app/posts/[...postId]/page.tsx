export default function PostDetail({params}: {params: {postId: string}}) {
    console.log(params); 
    return <div>Post {params.postId[0]}</div>;
}
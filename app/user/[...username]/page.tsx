
export default function PostPage({params}:Record<string, string[]>) {
  // const router = useSearchParams() 
  // const { slug } = router;

  // console.log(router);
  console.log("LLLLLLLLLLLLLLLL", params)
  
  return (
    <div>
        <p>user</p>
      {/* {slug
        ? `Post Details: ${slug.join('/')}`
        : 'All Posts'} */}
    </div>
  );
}
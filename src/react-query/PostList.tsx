import React from "react";
import usePost from "../hooks/usePost";

const PostList = () => {
  const pageSize = 10;
  //current page                  //function for fetchingNextPage //boolean that lets the browser know it is still fetching
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePost(
    { pageSize }
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* Map each post from the pages and place them in a fragment */}
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
        className="btn btn-primary ms-1"
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;

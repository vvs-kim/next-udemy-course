import React from 'react';
import PostsGrid from './posts-grid';
import classes from './all-posts.module.css';

function AllPosts(props) {
    return (
        <section className={classes.posts}>
            <h1>AllPosts</h1>
            <PostsGrid posts={props.posts} />
        </section>
    );
}

export default AllPosts;

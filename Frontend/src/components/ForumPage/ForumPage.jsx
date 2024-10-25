import React, { useEffect, useState } from 'react';
import PostForm from './PostForm'; // Importa el formulario para crear publicaciones
import PostList from './Publications'; // Importa la lista de publicaciones
import './ForumPage.css'; 

const ForumPage = () => {
 
  return (
    <div className="forum-page">
      <div className='overlay5'></div>
      <PostForm />
      <PostList />
    </div>
  );
};

export default ForumPage;
import React, { useEffect, useState } from 'react';
import BlogPostCard from '../../components/BlogPostCard/BlogPostCard';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy data for blog posts
  const blogPosts = [
    {
      profileImage: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
      username: "Mery Molkas",
      title: "A Journey into the World of Blogging",
      date: "September 23, 2024",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      profileImage: "https://png.pngtree.com/thumb_back/fh260/background/20230614/pngtree-woman-in-sunglasses-standing-in-front-of-a-dark-background-image_2891237.jpg",
      username: "Damon Walf",
      title: "Exploring the Art of Blogging",
      date: "September 23, 2024",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words"
    },
    {
      profileImage: "https://imgcdn.stablediffusionweb.com/2024/6/12/4d688bcf-f53b-42b6-a98d-3254619f3b58.jpg",
      username: "John Doe",
      title: "The Future of Blogging",
      date: "September 23, 2024",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
    {
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s",
      username: "Alice Smith",
      title: "The Power of Storytelling",
      date: "May 20, 2024",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
    },
    {
      profileImage: "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg",
      username: "Bob Johnson",
      title: "Navigating the Blogging Landscape",
      date: "September 23, 2024",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself."
    },
    {
      profileImage: "https://images.pexels.com/photos/6706847/pexels-photo-6706847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Hery",
      title: "A Journey into the World of Blogging",
      date: "November 03, 2024",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    },
    {
      profileImage: "https://images.pexels.com/photos/8358795/pexels-photo-8358795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Molkas",
      title: "A Journey into the World of Blogging",
      date: "September 20, 2024",
      text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty."
    },
    {
      profileImage: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Mery Molkas",
      title: "A Journey into the World of Blogging",
      date: "September 23, 2024",
      text: "the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
    },
    {
      profileImage: "https://images.pexels.com/photos/28998223/pexels-photo-28998223/free-photo-of-young-girl-picking-flowers-in-spring-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Merlkas",
      title: "A Journey into the World of Blogging",
      date: "September 10, 2023",
      text: "it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    },
  ];

  useEffect(() => {
    // Simulate fetching data
    const fetchData = () => {
      setTimeout(() => {
        setPosts(blogPosts);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, [ setPosts, setLoading]);

  return (
    <div className="App bg-gray-100 min-h-screen flex-col flex items-center justify-center p-4">
      {/* Heading and Welcome Message */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Blogging Community</h1>
        <p className="text-lg text-gray-600 mt-2">
          Stay connected, stay inspired, and explore insightful thoughts shared by our amazing bloggers!
        </p>
      </header>

      {/* All Blogs Heading */}
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">All Blogs</h2>

      {/* Loading State */}
      {loading ? (
        <div className="text-gray-600">Loading posts...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <BlogPostCard
              key={index}
              profileImage={post.profileImage}
              username={post.username}
              title={post.title}
              date={post.date}
              text={post.text}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
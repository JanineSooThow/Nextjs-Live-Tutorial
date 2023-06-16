// import React from 'react'
// //put pages in right directory and that is it
// //use localhost:3000/posts/first-post and it will produce this. In page.tsx under app folder showed bootstrap announcement with button 
// export default function FirstPost(){
//     return(
//         <div>Hello this is my first post</div>
//     )
// }

//second part of exercise after 'Hello this is my first post' displayed on screen - for linking 
//this is http://localhost:3000/posts/first-post - clicking link will go back to index.tsx or localhost: 3000. Client side routing 
// import Link from 'next/link';
// //import Link from 'next/link';
// //next/image is an extension of the HTML <img> element evovled for the modern web 
// import Image from 'next/image';
// import Head from 'next/head';
// const YourComponent = () => (
//   <Image
//     src="/images/profile.jpg" // Route of the image file -choose image on internet and right click, save image as and put it in correct directory under Public/images
//     height={144} // Desired size with correct aspect ratio
//     width={144} // Desired size with correct aspect ratio
//     alt="Your Name"
//   />
// );
// //file name should  be lower case, upper case should be in code 
// //import Link from 'next/link';
// export default function FirstPost() {
//   return (
//     <>
//     <Head>
//         <title>First Post</title>
//       </Head>
//       <h1>First Post</h1>
//       <h2>
//         <YourComponent/>
//         <Link href="/">Back to home</Link>
//       </h2>
//     </>
//   );
// }

//COPY AND PASTE SECOND PART OF CODE INTO app/posts/first-post/page.tsx and get rid of head part and then DELETE THIS FILE AS THERE WILL BE A CONFLICT . HOWEVER THIS FILE WILL BE RENAMED 
//AND KEPT FOR LEARNING PURPOSES TO FIRST-POST2



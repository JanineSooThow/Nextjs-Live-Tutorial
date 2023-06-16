import Link from 'next/link';
//import Link from 'next/link';
//next/image is an extension of the HTML <img> element evovled for the modern web 
import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file -choose image on internet and right click, save image as and put it in correct directory under Public/images
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);
//file name should  be lower case, upper case should be in code http://localhost:3000/posts/x
//import Link from 'next/link';
export default function FirstPost({params}) { //error saying we haven't given params a type
  return (
    <>
 
      <h1>OTHER Post</h1>
      <h2>
        <YourComponent/>
        <Link href="/">Back to home</Link>
      </h2>
      <p>{params.slug}</p> 
    </>
  );
}
//http://localhost:3000/posts/x
//http://localhost:3000/posts/mynameisjanine can pull params out of URL - search for a product and can use it in fetch 
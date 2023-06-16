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
//file name should  be lower case, upper case should be in code 
//import Link from 'next/link';
export default function FirstPost() {
  return (
    <>
 
      <h1>First Post</h1>
      <h2>
        <YourComponent/>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
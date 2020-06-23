import Link from 'next/link';

export default function Details() {
 return <div>
  <Link as="/car/harish" href="/[vehicle]/[person]">
   <a>Navigate to Harish's car</a>
  </Link>
  </div>
}
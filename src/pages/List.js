import Link from 'next/link';
import { useEffect, useState} from 'react';

const owners = [
 { vehicle: 'car', ownerName: 'Harish' },
 { vehicle: 'bike', ownerName: 'John' },
 { vehicle: 'airplane', ownerName: 'Alice' }
]

export default function List(ownersList) {

 return (<div>
  {owners.map((e, index) => (
   <div>
   <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
  <a>Navigate to {e.ownerName}'s {e.vehicle}</a>
   </Link>
   </div>
  ))}
 </div>)
}

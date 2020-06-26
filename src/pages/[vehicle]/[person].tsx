import { useRouter } from 'next/router';
import { NextPageContext } from 'next';

export default function Person(ownerList: {}) {
 const router = useRouter();
return <pre>{JSON.stringify(ownerList, null, 4)}</pre>
}

interface MyNextPageContext extends NextPageContext {
 query: {
  person: string;
  vehicle: string;
 }
}

Person.getInitialProps = async ({query, req}: MyNextPageContext) => {
 const response = await fetch('https://jsonplaceholder.typicode.com/todos?completed='+ query.person);
 const ownerList = await response.json();
 return {ownerList: ownerList}
}

import { useRouter } from 'next/router';

export default function Person(ownerList) {
 const router = useRouter();
return <pre>{JSON.stringify(ownerList, null, 4)}</pre>
}

Person.getInitialProps = async (ctx) => {
 const {query} = ctx;
 const response = await fetch('https://jsonplaceholder.typicode.com/todos');
 const ownerList = await response.json();
 return {ownerList: ownerList}
}

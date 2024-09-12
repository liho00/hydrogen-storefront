import {Suspense, useEffect} from 'react';

// /**
//  * @type {MetaFunction}
//  */
// export const meta = () => {
//   return [{title: 'Hydrogen | Home'}];
// };

import {useChat} from 'ai/react';

const VercelTest = () => {
  const {messages, input, append} = useChat({
    // streamProtocol: "text",
    headers: {
      'Content-Type': 'text/event-stream',
    },
    streamMode: 'stream-data',
    // fetch: async (input) => {
    //   console.log('fetch', input);
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve({
    //         content: "Hello, I'ma bot! How can I help you today?",
    //         role: 'user',
    //       });
    //     }, 1000);
    //   });
    // },
  });

  useEffect(() => {
    append({
      content: "Hello, I'm a bot! How can I help you today?",
      // role: 'user',
    });
  }, []);
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.length > 0
        ? messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}
            </div>
          ))
        : null}
    </div>
  );
};

export default function Homepage() {
  return (
    <div className="home">
      <VercelTest />
    </div>
  );
}

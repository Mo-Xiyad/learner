import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';
export const metadata = {
  title: 'promote-generator',
  description:
    'Promote Generator is a tool that helps you great social media posts for your business.'
};
// const NoSSR = dynamic(() => import('@components/nav'), { ssr: false });
const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

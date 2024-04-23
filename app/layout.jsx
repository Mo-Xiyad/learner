import '@styles/globals.css';
// import Provider from '@components/Provider';
import Nav from '@components/Nav';
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
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

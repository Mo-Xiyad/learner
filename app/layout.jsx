import '@styles/globals.css';

export const metadata = {
  title: 'promote-generator',
  description:
    'Promote Generator is a tool that helps you great social media posts for your business.'
};

const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

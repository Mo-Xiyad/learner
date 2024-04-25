import Feed from '@components/Feed';
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Welcome to Learner
        <br className="max-md:hidden" />
        <span className="text-2xl orange_gradient text-center">
          AI-Powered 🚀
        </span>
      </h1>
      <p className="desc text-center">
        <span className="blue_gradient font-bold">Learner </span>
        is a tool that helps you to save your Ai-prompts and share them with the
        world. You can also explore the prompts shared by other users.
      </p>
      <Feed />
    </section>
  );
};
export default Home;

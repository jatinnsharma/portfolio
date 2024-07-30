export const Articles = () => {
  return (
    <section>
      <div className="">
        <h2 className="text-4xl font-bold mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-4 rounded-lg border cursor-pointer border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900">
            <h3 className="text-2xl font-bold mb-2">Article Title</h3>
            <p className="text-lg">Brief description of the article.</p>
          </div>
          <div className="p-4 rounded-lg border cursor-pointer border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900">
            <h3 className="text-2xl font-bold mb-2">Article Title</h3>
            <p className="text-lg">Brief description of the article.</p>
          </div>
          <div className="p-4 rounded-lg border cursor-pointer border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900">
            <h3 className="text-2xl font-bold mb-2">Article Title</h3>
            <p className="text-lg">Brief description of the article.</p>
          </div>
          <div className="p-4 rounded-lg border cursor-pointer border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900">
            <h3 className="text-2xl font-bold mb-2">Article Title</h3>
            <p className="text-lg">Brief description of the article.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function InPage() {
  return (
    <div className="flex flex-col items-center justify-center py-6 space-y-2 text-center md:space-y-4 bg-blue-200">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl my-3">
        Welcome to the Page
      </h1>
      <div className="w-full h-[70vh] flex justify-center">
        <img
          alt="Cover image"
          className="rounded-lg object-cover aspect-[3/1] overflow-hidden"
          src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/11/how-to-make-a-website-1.webp"
        />
      </div>
      <p className="w-full max-w-2xl text-blue-500 md:text-xl/relaxed">
        This is the description of the page. It can contain any information that
        the page needs to convey to the user.
      </p>
    </div>
  );
}

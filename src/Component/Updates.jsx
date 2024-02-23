import AddUpdates from "./AddUpdates";
import UpdateList from "./UpdateList";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/shm6rK5IGlW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Updates() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className=" py-2 "
      >
        <AddUpdates />
        <UpdateList />
      </div>
      <div className="max-w-[80vw] mx-auto grid grid-cols-3 gap-4 my-4 py-4">
        <div className="col-span-2 row-span-2">
          <img
            alt="Space Image 1"
            className="w-full h-full object-cover"
            height="400"
            src="https://wallpapers.com/images/hd/sad-aesthetic-tumblr-dark-random-objects-zpjmj7eooqfdrrso.jpg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
        </div>
        <div className="row-span-1">
          <img
            alt="Space Image 2"
            className="w-full h-full object-cover"
            height="200"
            src="https://wallpapers.com/images/hd/sad-aesthetic-tumblr-dark-random-objects-zpjmj7eooqfdrrso.jpg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
        <div className="row-span-1">
          <img
            alt="Space Image 3"
            className="w-full h-full object-cover"
            height="200"
            src="https://wallpapers.com/images/hd/sad-aesthetic-tumblr-dark-random-objects-zpjmj7eooqfdrrso.jpg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
        <div className="row-span-3">
          <img
            alt="Space Image 4"
            className="w-full h-full object-cover"
            height="600"
            src="https://wallpapers.com/images/hd/sad-aesthetic-tumblr-dark-random-objects-zpjmj7eooqfdrrso.jpg"
            style={{
              aspectRatio: "300/600",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
        <div className="row-span-1">
          <img
            alt="Space Image 5"
            className="w-full h-full object-cover"
            height="200"
            src="https://wallpapers.com/images/hd/sad-aesthetic-tumblr-dark-random-objects-zpjmj7eooqfdrrso.jpg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
        <div className="row-span-1">
          <img
            alt="Space Image 6"
            className="w-full h-full object-cover"
            height="200"
            src="https://wallpapers.com/images/hd/sad-aesthetic-tumblr-dark-random-objects-zpjmj7eooqfdrrso.jpg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
        <div className="col-span-2 row-span-1">
          <img
            alt="Space Image 7"
            className="w-full h-full object-cover"
            height="200"
            src="https://wallpapers.com/images/hd/sad-aesthetic-tumblr-dark-random-objects-zpjmj7eooqfdrrso.jpg"
            style={{
              aspectRatio: "600/200",
              objectFit: "cover",
            }}
            width="600"
          />
        </div>
      </div>
    </>
  );
}

export default function Login() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      {/* Header with title and description*/}
      <div className="flex flex-col justify-between items-start">
        <h1 className="text-3xl font-bold mb-4 mt-4">Example form</h1>
        <p className="text-gray-500 mb-4">
          A simple form that posts to an app route handler
        </p>
      </div>

      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action="/formHandler"
        method="post"
      >
        <label className="text-md" htmlFor="first">
          First name
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="first"
          placeholder="Nameboy"
          defaultValue="Nameboy"
          required
        />
        <label className="text-md" htmlFor="last">
          Last name
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="text"
          name="last"
          placeholder="McNameface"
          defaultValue="McNameface"
          required
        />
        <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default function Header() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-cyan-600 p-6 shadow-lg shadow-cyan-500/50">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Cocktail Champ</span>
      </div>
      <div class="block lg:hidden"></div>
      {/* <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div> */}
    </nav>
  );
}

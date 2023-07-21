export default function Header({handleSearch}) {

  return (
    <nav class="sticky top-0 z-50 flex items-center justify-between flex-wrap p-6 shadow-lg bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-500 shadow-yellow-500/80">
      <div class="flex items-center flex-shrink-0 text-white mr-6 ml-5">
        <span class="font-medium font-josef text-2xl tracking-tight drop-shadow-xl">COCKTAIL CHAMP</span>
      </div>
      <div class="block lg:hidden"></div>

      <form>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-zinc-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Cocktails"
            required
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </form>
    </nav>
  );
}

import { searchBar, card } from "../components";

export default function home() {

    const loginForm = `
    <div class="bg-gray-100 flex items-center justify-center h-screen">
     <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" type="email" placeholder="Enter your email">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="password" type="password" placeholder="Enter your password">
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" id='new-user-link' href="/signup">
          New User?
        </a>
      </div>
    </form>
  </div>
  </div>
    `
    // const newUserLink = document.getElementById('new-user-link');
    // if (newUserLink) {
    //     newUserLink.addEventListener('click', () => {
    //         document.location.pathname = '/signup';
    //     })
    // }

    const searchBarElements = searchBar();
    const cardElement = card();
    const loaderElement = loader();
    const isUserLoggedIn = false 
    return  isUserLoggedIn ? 
    loginForm
    :
    `
    <div class="max-w-6xl mx-auto my-10">
        <!-- Search Bar -->
        ${searchBarElements}
    
        <!-- Card List -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${cardElement}
            ${cardElement}
            ${cardElement}
        </div>
    </div>
    `;
}
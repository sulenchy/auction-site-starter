export default function getHeader() {
    return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center">
          <a href="/" class="text-2xl font-bold text-gray-900">AuctionSiteLogo</a>
        </div>
        <nav class="hidden md:flex space-x-4">
          <a href="/" class="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
        </nav>
        
        <div class="md:hidden flex items-center">
          <button type="button" class="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="md:hidden">
      <nav class="px-4 pb-4 space-y-1">
        <a href="#" class="block text-gray-600 hover:text-gray-900">Home</a>
        <a href="#" class="block text-gray-600 hover:text-gray-900">About</a>
        <a href="#" class="block px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">Sign Up</a>
      </nav>
    </div>
    `
}
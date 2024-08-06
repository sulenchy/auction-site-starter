export default function searchBar() {
    return `
        <div class="flex justify-center mb-6">
            <input class="w-full max-w-lg px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Search..." id="searchInput">
        </div>
    `;
}
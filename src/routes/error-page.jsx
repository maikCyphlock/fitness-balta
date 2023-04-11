import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    
    return (
        <div id="error-page">
            <div class="flex h-screen justify-center items-center">
                <div class="bg-white p-16 rounded-lg shadow-lg">
                    <h1 class="text-3xl mb-4">Something went wrong! <span className="bg-red-300 p-1 text-red-800 rounded-lg">{error.statusText || error.message}</span></h1>
                    <i></i>
                    <p class="mb-6">We're sorry, but it looks like there was an error. Please try again later.</p>
                    <a href="/" class="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-lg focus:outline-none">Go back home</a>
                    
                </div>
            </div>
        </div>
    );
}
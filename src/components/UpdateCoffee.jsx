
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const loadedCoffee = useLoaderData();
    console.log(loadedCoffee);
    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;
        const updatedCoffee = { name, chef, supplier, taste, category, details, photoURL };
        console.log(updatedCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${loadedCoffee._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal .fire(
                        'Good job!',
                        'Coffee updated successfully',
                        'success'
                    )
                    form.reset();
                }
            })
    }
    return (
        <div className='bg-gray-50'>
        <h1 className='text-6xl text-center py-5 font-bold text-purple-600'>Update Coffee: {loadedCoffee.name}</h1>
        <form onSubmit={handleUpdateCoffee} className="w-10/12 p-4 md:w-3/5 mx-auto border md:p-20">
            <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <label className="block text-gray-700 font-bold mb-2" >
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" defaultValue={loadedCoffee.name} placeholder="Enter dish name" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Chef
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="chef" name="chef" type="text" defaultValue={loadedCoffee.chef} placeholder="Enter chef name" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <label className="block text-gray-700 font-bold mb-2" >
                        Supplier
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="supplier" name="supplier" type="text" defaultValue={loadedCoffee.supplier} placeholder="Enter supplier name" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <label className="block text-gray-700 font-bold mb-2" >
                        Taste
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="taste" name="taste" type="text" defaultValue={loadedCoffee.taste} placeholder="Enter taste" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Category
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category" name="category" type="text" defaultValue={loadedCoffee.category} placeholder="Enter category" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <label className="block text-gray-700 font-bold mb-2" >
                        Details
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="details" name="details" defaultValue={loadedCoffee.details} placeholder="Enter details"></textarea>
                </div>
                <div className="w-full px-2 mb-4">
                    <label className="block text-gray-700 font-bold mb-2" >
                        Photo URL
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="photo-url" name="photoURL" type="text" defaultValue={loadedCoffee.photoURL} placeholder="Enter photo URL" />
                </div>
                <div className="w-full px-2">
                    <button className="bg-purple-600 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                        Update Coffee
                    </button>
                </div>

            </div>
        </form>

    </div>
    );
};

export default UpdateCoffee;
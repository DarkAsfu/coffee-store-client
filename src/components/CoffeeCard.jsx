import { Link } from 'react-router-dom';
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';
const CoffeeCard = ({ coffee, allCoffee, setAllCoffee }) => {
    console.log(allCoffee)
    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = allCoffee.filter(c => c._id !== id);
                            setAllCoffee(remaining);
                        }
                    })
            }
        })
        console.log(id);
    }
    console.log(coffee)
    return (
        <div className="card card-side bg-base-100 shadow-xl grid grid-cols-3 items-center justify-items-end">
            <figure><img className='w-48' src={coffee.photoURL} alt="Movie" /></figure>
            <div className="card-body">
                <p><span className='font-bold'>Name:</span> {coffee.name}</p>
                <p><span className='font-bold'>Chef:</span> {coffee.chef}</p>
                <p><span className='font-bold'>Category:</span> {coffee.category}</p>
            </div>
            <div className='pr-10 text-white'>
                <Link><FaEye className='bg-amber-700 p-1 mb-2 rounded text-3xl'></FaEye></Link>
                <Link to={`updateCoffee/${coffee._id}`}><FaPen className='bg-gray-800 p-1 mb-2 rounded text-3xl'></FaPen></Link>
                <FaTrash onClick={() => handleDelete(coffee._id)} className='bg-rose-700 p-1 rounded text-3xl'></FaTrash>
            </div>
        </div>
    );
};

export default CoffeeCard;
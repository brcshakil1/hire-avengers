import PropTypes from 'prop-types';
import { useState } from 'react';
import {BsBookmarkCheckFill} from 'react-icons/bs'

const Card = ({avenger, handleSelectItem}) => {
    const [isBook, setIsBook] = useState(false);

    const {id, name, age, role, image, salary, country} = avenger;

    const handleBooked = () => {
        setIsBook(true);
    }
    return (
        <div className="border-2 border-gray-400 w-[280px] h-[400px] rounded-md mx-auto">
            <img className='rounded-t-sm' src={image} alt="" />
            <div className='px-4 space-y-1'>
                <h2 className='text-2xl font-semibold '>{name}</h2>
                <h3 className='text-xl font-semibold'>Role: {role}</h3>
                <div className='flex justify-between'>
                    <p>Salary: {salary}</p>
                    <p>Age: {age}</p>
                </div>
                <p>Country: {country}</p>
                <div className='text-center pt-2.5'>
                    <button 
                    className='py-2 px-5 bg-sky-500 rounded-md flex gap-1 items-center'
                    onClick={() => {
                        handleSelectItem(id, avenger, salary)
                        handleBooked()
                    }} 
                    >Book {isBook ? <BsBookmarkCheckFill/> : ''}</button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    avenger: PropTypes.object,
    handleSelectItem: PropTypes.func,
    handleBooked: PropTypes.func
}

export default Card;
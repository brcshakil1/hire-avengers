
import { useState } from 'react';
import Card from './../Card/Card';
import { useEffect } from 'react';
import Cart from './../Cart/Cart';
const Home = () => {
    const [avengers, setAvengers] = useState([]);
    const [allSelectedHeros, setAllSelectedHeros] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [remaining, setRemaining] = useState(0);

    let budget = 1300000;

    useEffect(()=>{
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAvengers(data))
    }, []);

    const handleSelectItem = (id, hero, salary) => {
        const foundItems = allSelectedHeros.find(item => item.id === id);
        const count = totalCost + salary
        const totalRemaining = budget - count;
        if(foundItems) {
            return alert("Already Booked")
        } else {
            if(count > budget) {
                return alert("Not Enough Money")
            }
            setRemaining(totalRemaining);
            setTotalCost(count);
            setAllSelectedHeros([...allSelectedHeros, hero])
        }
    }

    
    return (
        <div className='text-white flex flex-col-reverse md:flex-row container mx-auto'>
            {/* card container */}
            <div className='w-full md:w-2/3 flex flex-wrap gap-5 my-10 mx-auto'>
                {
                    avengers.map(avenger => <Card 
                        key={avenger.id} 
                        avenger={avenger}
                        handleSelectItem={handleSelectItem}
                        ></Card>)
                }
            </div>
            {/* cart container */}
            <div className='w-full md:w-1/3 my-10'>
                
                <div className='max-w-[280px] mx-auto'>
                    <h3 className='text-xl font-semibold'>Booked Heros: {allSelectedHeros.length}</h3>
                    <h3 className='text-xl font-semibold'>Budget Remaining: {remaining}</h3>
                    <h3 className='text-xl font-semibold'>Total Cost: {totalCost}</h3>
                </div>
                <div className='max-w-[280px] mx-auto my-6'>
                    {
                        allSelectedHeros.map((hero, idx) => <Cart key={idx} hero={hero}></Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
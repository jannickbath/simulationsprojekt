import Track from './Track';
import Default_car from './Cars/Default';
import { useSelector } from 'react-redux';

const Tracks = () => {
    const cars = useSelector((state: any) => state.cars as Array<Car>);

    return (
        <div className="tracks">
            {cars.map((car: Car) => {
                return (
                    <Track>
                        <Default_car own={car.own} progress={car.progress} />
                    </Track>
                )
            })}
        </div>
    );
};

export default Tracks;

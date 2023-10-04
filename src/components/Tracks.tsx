import Track from './Track';
import Default_car from './Cars/Default';

const Tracks = () => {
    const cars: Array<Car> = [
        {
            own: true,
            progress: "10"
        }
    ];

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

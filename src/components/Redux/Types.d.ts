type Player = {
    id: number,
    human: boolean,
    speed: int,
    carId: number | null
}

type AssignCarAction = {
    payload: {
        playerId: number,
        carId?: number
    },
    type: string
}

type PlayerFilterFields = {
    id?: number,
    human?: boolean,
    speed?: number,
    carId?: number
}

type CarFilterFields = {
    id?: number,
    progress?: `${number}`
}

type FilterFields = {
    cars: CarFilterFields,
    players: PlayerFilterFields
}

type ReduxStateObjects = {
    [Key in keyof FilterFields]: Array<FilterFields[Key]>;
};
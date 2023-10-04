import { useSelector } from "react-redux";

function useFilter<StateName extends keyof FilterFields>(stateName: StateName, filterFields: FilterFields[StateName]) {
    const stateObjects = useSelector((state: ReduxStateObjects) => state[stateName]);
    let filteredStateObjects = stateObjects;

    Object.entries(filterFields).forEach(([key, value]) => {
        filteredStateObjects = filteredStateObjects.filter((stateObject: FilterFields[StateName]) => stateObject[key as keyof FilterFields[StateName]] === value)
    })

    return filteredStateObjects;
}

export {useFilter};
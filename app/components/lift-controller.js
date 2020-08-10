import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { floorHeight } from './floor';

const LIFT_COUNT = 3;

const getLiftStartPositions = (totalWidth, countOfLift) => {
    const distanceBetweenLifts = totalWidth / countOfLift;
    let startingPoint = 100;
    const data = Array.from(Array(countOfLift), () => {
        const returnValue = startingPoint;
        startingPoint += distanceBetweenLifts
        return returnValue;
    });
    return data;
}

const getBuildingWidth = () => {
    const building = document.querySelector('.building');

    if (building) {
        return building.clientWidth;
    }

    return 0;
}

export default class LiftControllerComponent extends Component {
    @tracked liftPositions;
    liftHeight = floorHeight - 20;

    @tracked liftTopPosition;

    @action
    updateLiftTopPosition() {
        const floors = document.querySelectorAll('.floor');
        const lastFloor = floors[floors.length - 1];
        this.liftTopPosition = lastFloor.offsetTop + 10;
    }

    @action
    updatePosition() {
        const buildingWidth = getBuildingWidth();
        this.liftPositions = getLiftStartPositions(buildingWidth, LIFT_COUNT);
    }

    needLift() {
        // console.log('hey');
    }
}

export const updateLiftPosition = (topToReach) => {
    const lifts = document.querySelectorAll('.lift');
    let liftToMove;

    lifts.forEach(lift => {
        const currentLiftDifference = Math.abs(lift.offsetTop - topToReach);

        if (currentLiftDifference < 20) {
            return;
        }

        if (!liftToMove) {
            liftToMove = lift;
            return;
        }

        const selectedLiftDifference = Math.abs(liftToMove.offsetTop - topToReach);
        if (currentLiftDifference < selectedLiftDifference) {
            liftToMove = lift;
        }
    });

    liftToMove.style.top = `${topToReach + 10}px`;
}

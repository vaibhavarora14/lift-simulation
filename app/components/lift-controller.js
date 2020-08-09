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

    @action
    updatePosition() {
        const buildingWidth = getBuildingWidth();
        this.liftPositions = getLiftStartPositions(buildingWidth, LIFT_COUNT);
    }

}

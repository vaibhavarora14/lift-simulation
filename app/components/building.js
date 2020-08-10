import Component from '@glimmer/component';
import { floorHeight } from './floor';
import { action } from '@ember/object';
import { updateLiftPosition } from './lift-controller';

const numberOfFloors = 5;

export default class BuildingComponent extends Component {
    numberOfFloors = Array(numberOfFloors);
    floorHeight = floorHeight;

    @action
    moveLiftUp(currentFloorId) {
        const element = document.getElementById(currentFloorId);
        if (element) {
            updateLiftPosition(element.offsetTop);
        }
    }

    @action
    moveLiftDown(currentFloorId) {
        console.log(currentFloorId);
    }
}


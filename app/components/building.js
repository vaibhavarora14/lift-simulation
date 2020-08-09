import Component from '@glimmer/component';
import { floorHeight } from './floor';

const numberOfFloors = 5;

export default class BuildingComponent extends Component {
    numberOfFloors = Array(numberOfFloors);
    floorHeight = floorHeight;
}


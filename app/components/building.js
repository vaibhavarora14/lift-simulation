import Component from '@glimmer/component';

const buildingHeight = "500";
const floorHeight = "100";

export default class BuildingComponent extends Component {
    numberOfFloors = new Array(buildingHeight / floorHeight);
}

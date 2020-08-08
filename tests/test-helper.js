import Application from 'lift-simulation/app';
import config from 'lift-simulation/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();

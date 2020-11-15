import {calculatedBiorhythm, calculateBiorhythm} from './calculation';
import {calculateBiorhythms} from './calculation';

it('calculates the biorhythm', () => {
    const {physical} = calculateBiorhythms('1995-01-01', '2020-02-18');
    expect(physical).toBeCloseTo(0.5196);
});

it('calculates the biorhythm', () => {
    const {emotional} = calculateBiorhythms('1995-01-01', '2020-02-18');
    expect(emotional).toBeCloseTo(-0.9010);
});

it('calculates the biorhythm', () => {
    const {intellectual} = calculateBiorhythms('1995-01-01', '2020-02-18');
    expect(intellectual).toBeCloseTo(0.8146);
});
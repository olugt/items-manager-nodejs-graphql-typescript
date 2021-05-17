import { ServicesModelInterface } from '../interfaces/ServicesModelInterface';

export class ServicesModel {
    constructor() {

    }

    public checkHealth(): string {
        return "Services running OK."
    }
}
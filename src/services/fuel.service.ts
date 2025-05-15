import { Injectable, signal } from '@angular/core';
import { IFuelValue } from '../models/fuel-value.model';

@Injectable({
  providedIn: 'root',
})
export class FuelService {
  public fuelValues = signal<IFuelValue[]>([]);
}

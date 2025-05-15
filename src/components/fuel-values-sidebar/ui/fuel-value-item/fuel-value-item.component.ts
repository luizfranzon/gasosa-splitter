import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IFuelValue } from '../../../../models/fuel-value.model';

@Component({
  selector: 'app-fuel-value-item',
  templateUrl: './fuel-value-item.component.html',
  styleUrls: ['./fuel-value-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
})
export class FuelValueItemComponent {
  public fuelValue = input.required<IFuelValue>();
}

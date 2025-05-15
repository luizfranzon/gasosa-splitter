import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  model,
} from '@angular/core';
import { IFuelValue } from '../../models/fuel-value.model';
import { FuelValueItemComponent } from './ui/fuel-value-item/fuel-value-item.component';
import { FuelService } from '../../services/fuel.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fuel-values-sidebar',
  templateUrl: './fuel-values-sidebar.component.html',
  styleUrls: ['./fuel-values-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FuelValueItemComponent, FormsModule],
})
export class FuelValuesSidebarComponent {
  public typedFuelValue = model<string>();
  private fuelService = inject(FuelService);

  public fuelValues = computed(() => {
    return this.fuelService.fuelValues();
  });

  public handleOnFormSubmit(event: SubmitEvent) {
    event.preventDefault();

    if (this.typedFuelValue() === null) {
      return;
    }

    this.handleOnAddFuelValue(Number(this.typedFuelValue()!));
    this.typedFuelValue.set(``);
  }

  public handleOnAddFuelValue(fuelValue: number): void {
    const newFuelValue: IFuelValue = {
      id: new Date(),
      value: fuelValue,
      date: new Date(),
    };

    this.fuelService.fuelValues.update((fuelValues) => {
      return [...fuelValues, newFuelValue];
    });
  }
}

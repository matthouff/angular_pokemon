import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPokemonComponent } from './form-pokemon.component';

describe('FormPokemonComponent', () => {
  let component: FormPokemonComponent;
  let fixture: ComponentFixture<FormPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresCaixaComponent } from './valores-caixa.component';

describe('ValoresCaixaComponent', () => {
  let component: ValoresCaixaComponent;
  let fixture: ComponentFixture<ValoresCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoresCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoresCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

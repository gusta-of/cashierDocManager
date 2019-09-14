import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralCaixaComponent } from './menu-lateral-caixa.component';

describe('MenuLateralCaixaComponent', () => {
  let component: MenuLateralCaixaComponent;
  let fixture: ComponentFixture<MenuLateralCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLateralCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLateralCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

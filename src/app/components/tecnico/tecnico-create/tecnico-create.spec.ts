import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoCreate } from './tecnico-create';

describe('TecnicoCreate', () => {
  let component: TecnicoCreate;
  let fixture: ComponentFixture<TecnicoCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnicoCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnicoCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

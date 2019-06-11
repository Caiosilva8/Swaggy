import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeMensagemPage } from './lista-de-mensagem.page';

describe('ListaDeMensagemPage', () => {
  let component: ListaDeMensagemPage;
  let fixture: ComponentFixture<ListaDeMensagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeMensagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeMensagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '@app/app.module';
import { BuscarBeneficiosFinanceirosService } from '@core/services/buscar-beneficios-financeiros/buscar-beneficios-financeiros.service';
import { BeneficiosFinanceirosResolver } from './trendings.resolver';

describe('BeneficiosFinanceirosResolver', () => {
  let beneficiosFinanceirosResolver: BeneficiosFinanceirosResolver;
  let buscarBeneficiosFinanceirosService: BuscarBeneficiosFinanceirosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, BrowserModule, HttpClientTestingModule, RouterTestingModule, HomeBeneficiosModule],
    });

    beneficiosFinanceirosResolver = TestBed.get(BeneficiosFinanceirosResolver);
    buscarBeneficiosFinanceirosService = TestBed.get(BuscarBeneficiosFinanceirosService);
  });

  it('deve ser criado', () => {
    expect(beneficiosFinanceirosResolver).toBeTruthy();
  });
});
